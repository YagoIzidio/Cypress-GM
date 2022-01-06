/// <reference types="cypress" />

import loc from '../../../../../../../support/locators/locLogin'

Given('que acesso minha tela de login', () => {
	cy.visit('https://chevroletdigital-dev.accurate.com.br/').url().should('include','/login')
});

When('submeto meu usuario de ofertas com os dados validos', () => {
	cy.login('userGMF')
});

Then('sou redirecionado para tela simulação de ofertas', () => {
	cy.get('.filters-title').should('contain','IDENTIFICAÇÃO')
});

When(/^submeto meu usuario "([^"]*)" e senha "([^"]*)" invalidos$/, (user, password) => {
	cy.get(loc.LOGIN.USER).type(user)
  cy.get(loc.LOGIN.PASSWORD).type(password)
  cy.get(loc.LOGIN.CLICK_BTN_ENTRAR).click()
});

Then(/^vejo a mensagem de alerta "([^"]*)"$/, (alert) => {
  cy.get('.signin-container').should('contain', alert)
});

