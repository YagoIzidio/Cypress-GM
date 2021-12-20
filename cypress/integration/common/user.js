/// <reference types="cypress" />


Given(/^que acesso a pagina de login com minhas credenciais validas$/, () => {
	cy.login('userGMF')
});

