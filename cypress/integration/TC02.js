it('Page fully loaded', () => {
  cy.visit('https://www.saucedemo.com').as('getPage');

  cy.get('input[id="user-name"]')
    .type('standard_user');

  cy.get('input[id="password"]')
    .type('secret_sauce');

  cy.get('input[id="login-button"')
    .click()
//    .then(() => {
//    expect(sessionStorage.getItem('session-username')).contains('standard_user')
//    });;
      //page does not set key session-username, so I couldnt test it
      //Img from the Application> Session Storage tab in the folder

  cy.url().should('include', '/inventory.html');
  


})