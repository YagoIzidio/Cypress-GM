/// <reference types="cypress" />

import loc from '../../../support/locators'

before(() => {
	cy.task("queryDb", `DELETE FROM simulator.vehicle_color WHERE code ='AE2'`);
})

And(/^clico no menu lateral de cores$/, () => {

	cy.get('[data-cy="offers"]').click()
	cy.get('[data-cy="colors"]').click()
	
});

And(/^preencho os campos para cadastrar uma nova cor$/, () => {

	cy.get(':nth-child(1) > .undefined > .form-control').type('Amarelo mostarda teste11')
	cy.get(':nth-child(2) > .undefined > .form-control').type('LL11')
	cy.get('[data-cy="newColorSubmitButton"]').click()
	
});

Then(/^confiro se a cor foi adicionada com sucesso$/, () => {

	cy.get('.alert').should('contain', 'Cor salva com sucesso')
	cy.get('.insuranceContent').should('contain', 'LL11')

});
