

/// <reference types="cypress"/>

/// <reference types="cypress-xpath"/>




describe('Xpath Exercise', () =>{

    it('Verify Xpath to Cypress', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        


        //Enter Username
        cy.xpath('//input[@name="username"]').type('Admin')

        //Enter Password
        cy.xpath('//input[@name="password"]').type('admin123')


        cy.xpath('//p[@class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').click()


        cy.title('OrangeHRM')
            .should('eq','OrangeHRM')
            .and('contain','Orange')
            .and('not.eq','Apple')

            
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
            .and('contain','orange')
            .and('not.eq','Apple')


        cy.wait(1000)
        cy.screenshot()


    })
})