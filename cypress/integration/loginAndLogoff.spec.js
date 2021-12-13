/// <reference types="cypress" />

import loc from '../support/locators'


describe('Login com o perfil Dealer e fazendo Logoff', () => {

    it('Login and logoff', () => {
        cy.login('userDealer')
        cy.get('.steps').should('contain', 'IDENTIFICAÇÃO')
        cy.logoff()    
    })
})

