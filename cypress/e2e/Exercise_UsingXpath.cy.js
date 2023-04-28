

/// <reference types="cypress"/>

/// <reference types="cypress-xpath"/>



describe('Xpath Exercise', () =>{

    it('Verify Xpath to Cypress', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.title('OrangeHRM')
            .should('eq','OrangeHRM')
            .and('contain','Orange')
            .and('not.eq','Apple')


        //Enter Username
        cy.xpath('//input[@name="username"]').type('Admin')

        //Enter Password
        cy.xpath('//input[@name="password"]').type('admin123')

        //Click Login Button
        //cy.xpath('//button[@type="submit"]').click()

        //Click Profile Dropdown
        //cy.xpath('//i[@class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]').click()

        //Click Logout
        //cy.xpath('//a[@href="/web/index.php/auth/logout"]').click()


        


    })
})