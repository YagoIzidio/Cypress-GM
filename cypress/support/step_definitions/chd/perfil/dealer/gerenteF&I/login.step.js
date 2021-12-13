/// <reference types="cypress" />

import loc from '../../../../../locators'

/* global Given, Then, When, And */

    Given('que acesso a pagina de login com minhas credenciais validas', () => {
      cy.login('userDealer')
    })

    Then('sou direcionado para pagina principal', () => {
      cy.get('.steps').should('contain', 'IDENTIFICAÇÃO')
    })


   