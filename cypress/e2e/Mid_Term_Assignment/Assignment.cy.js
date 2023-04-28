

/// <reference types="cypress"/>

describe('Mid Term Assignment', () =>{


    it('Verify Page for Assignment', () => {

        cy.viewport("macbook-16")
        
        //Launch Application
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')

        cy.title()
            .should('eq','Your store. Login')
            .and('contain','Login')



        //Enter Username
        cy.get('input[type=email]')
            .clear()
            .type('admin@yourstore.com')
            .should('have.value','admin@yourstore.com')

        // Enter Password
        cy.xpath("//*[@id='Password']")
            .clear()
            .type('admin')

        //Click on Checkbox
        cy.xpath("//*[@id='RememberMe']")
        .should('not.be.checked')
        .check()
        .should('be.checked')


        //Click Login Button
        cy.get('.button-1').click()

        //validate Application Title after Login
        cy.title()
            .should('eq','Dashboard / nopCommerce administration')
            .and('contains','Dashboard')
            .and('not.eq','Customers')
            


    




        //Optional Steps
        cy.xpath("(//p[contains(text(),'Customers')])[1]")     
            .click()


        cy.xpath("(//p[contains(text(),'Customers')])[2]")     
            .click()


        cy.xpath("//*[@id='SearchEmail']")
            .clear()
            .type('victoria_victoria@nopCommerce.com')


        cy.xpath("//*[@id='search-customers']")
        .click()




        //Take Screenshot
        cy.screenshot()
    });
})