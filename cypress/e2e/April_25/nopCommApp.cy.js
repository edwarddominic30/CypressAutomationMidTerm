
/// <reference types="cypress"/>




describe('Add Command on json', () =>{

it('Verify NOP Page for Command', () => {

cy.visit('https://demo.nopcommerce.com/')


    cy.CustomMethodClickOnLink('Apple MacBook Pro')

    cy.title()
        .should('eq','nopCommerce demo store. Apple MacBook Pro 13-inch')
        .and('contain','MacBook')

cy.url()
    .should('eq','https://demo.nopcommerce.com/apple-macbook-pro-13-inch')

})

})