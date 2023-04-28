

/// <reference types="cypress"/>

/// <reference types="cypress-xpath"/>


describe('Xpath Exercise', () =>{

    it('Verify Xpath to Cypress', ()=>{

        cy.visit('https://www.amazon.in/')

        cy.xpath('//input[@id="twotabsearchtextbox"]').type('Macbook Pro')

        cy.xpath('//*[@id="nav-search-submit-button"]').click()
    })
})