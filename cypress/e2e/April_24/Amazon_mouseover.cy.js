


/// <reference types="cypress"/>



describe('See more / Link example', function(){ 

    it('See more or Link Explore', ()=>{
    
    
        cy.visit('https://www.amazon.in/')
    
    
    
        cy.get('#nav-link-accountList-nav-line-1').trigger('mouseover')


        cy.xpath("//span[text()='Create a Wish List']").trigger('mouseover').click()

        cy.title().should('eq','Wish List')
    })
    
    
    
    })