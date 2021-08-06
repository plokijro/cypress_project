it('Page fully loaded', () => {
  cy.visit('https://www.saucedemo.com').as('getPage');

  cy.get('input[id="login-button"')
    .click()

  cy.get('h3[data-test="error"]')
    .contains('Epic sadface: Username is required')
    .should('be.visible');
})

