import loc from './locators/locLogin'

Cypress.Commands.add('login', (perfil) => {           

  const { userName, passWord } = Cypress.env(perfil)
  
  cy.get(loc.LOGIN.USER).type(userName)
  cy.get(loc.LOGIN.PASSWORD).type(passWord)
  cy.get(loc.LOGIN.CLICK_BTN_ENTRAR).click()

})

Cypress.Commands.add("queryDb", (query) => {
  cy.task("queryDb", query);
});


