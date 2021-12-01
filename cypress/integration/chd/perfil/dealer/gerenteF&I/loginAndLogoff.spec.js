/// <reference types="cypress" />

import loc from '../../../../../support/locators'


describe('Login com o perfil Dealer e fazendo Logoff', () => {

    it('Login and logoff', () => {
        cy.login('userDealer')
        cy.get(loc.LOGIN.EXPECT_TEXT_LOGGED).should('contain', 'IDENTIFICAÇÃO')
        cy.logoff()    
    })
})

