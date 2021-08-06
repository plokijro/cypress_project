it('Page fully loaded', () => {
  cy.visit('https://www.saucedemo.com');

  cy.get('input[id="user-name"]')
    .type('standard_user');

  cy.get('input[id="password"]')
    .type('secret_sauce');

  cy.get('input[id="login-button"')
    .click()
//    .then(() => {
//    expect(sessionStorage.getItem('session-username')).contains('standard_user')
//    });
      //page does not set key session-username, so I couldnt test it
      //Img from the Application> Session Storage tab in the folder

  cy.url().should('include', '/inventory.html');
  
  cy.get('button[id="add-to-cart-sauce-labs-backpack"]')
    .click()
    .then(() => {
    expect(localStorage.getItem('cart-contents')).contains('4')
    })
    .should('not.exist');

  cy.get('button[id="remove-sauce-labs-backpack"]')
    .should('exist');

  cy.get('span')
    .should('have.class', 'shopping_cart_badge')
    .contains('1')
    .click();

  cy.url().should('include', '/cart.html');

  cy.get('a[id="item_4_title_link"] > div' )
    .contains('Sauce Labs Backpack');


  cy.get('button[id="checkout"]')
    .click();

  cy.url().should('include', '/checkout-step-one.html');

  cy.get('input[id="first-name"]')
    .type('fist');

  cy.get('input[id="last-name"]')
    .type('last');

  cy.get('input[id="postal-code"]')
    .type('000');

  cy.get('input[id="continue"]')
    .click();

  cy.url().should('include', '/checkout-step-two.html');

  cy.get('button[id="finish"]')
    .click()

  cy.url().should('include', '/checkout-complete.html');

  cy.get('div[id="checkout_complete_container"] > h2')
    .contains('THANK YOU FOR YOUR ORDER');
})