/// <reference types="cypress" />

it('Google Search', async() => {
    await cy.visit('https://google.com/')

    cy.get('#APjFqb').type('Azumo{Enter}')

})