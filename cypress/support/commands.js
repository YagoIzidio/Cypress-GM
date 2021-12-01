import loc from './locators'

Cypress.Commands.add('login', (perfil) => {

  const { userName, passWord } = Cypress.env(perfil)
  
  cy.visit('https://chevroletdigital-dev.accurate.com.br/')
  cy.get(loc.LOGIN.EXPECT_TEXT_NOT_LOGGED).should('contain', 'Esqueci minha senha')
  cy.get(loc.LOGIN.USER).type(userName)
  cy.get(loc.LOGIN.PASSWORD).type(passWord)
  cy.get(loc.LOGIN.BTN_ENTRAR).click()

})

Cypress.Commands.add('logoff', () => {

  cy.get(loc.LOGOFF.CLICK_USER).click()
  cy.get(loc.LOGOFF.EXPECT_YOUR_DATA).should('contain', 'SEUS DADOS')
  cy.get(loc.LOGOFF.CLICK_LOGOFF).click()
})

