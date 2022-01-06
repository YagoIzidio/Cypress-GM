/// <reference types="cypress" />

import loc from '../../../../../../../support/locators/locOfertas'

before(() => {
	cy.task("queryDb", `DELETE FROM simulator.vehicle_color WHERE code ='CYY'`);
})

When('clico no menu lateral de cores', () => {
	cy.get(loc.CORES.CLICK_MENU).click()
	cy.get(loc.CORES.CLICK_SUBMENU).click()
});

When('submeto o cadastro de uma nova cor valida', () => {
	cy.xpath(loc.CORES.INPUT_NAME).type('Teste cor cypress')
	cy.xpath(loc.CORES.INPUT_CODE).type('CYY')
  cy.get(loc.CORES.CLICK_BTN_CRIAR).click()
});

Then('vejo uma nova cor salva na lista', () => {
	cy.get(loc.CORES.MSG_SUCESSO).should('have.text', 'Cor salva com sucesso')
	cy.get(loc.CORES.LISTA_CORES).should('contain', 'CYY')
});