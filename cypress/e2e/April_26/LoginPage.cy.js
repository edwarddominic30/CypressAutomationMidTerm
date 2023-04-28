/// <reference types="cypress"/>

import Login from '../April_26/Login'

describe('Login Activity using Custom Command and Method', ()=>{



    //hooks
    beforeEach(()=>{

        cy.log(`Executing the Before each`)
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
        
        //validation page
        cy.title()
            .should('eq','Your store. Login')

        cy.url()
            .should('contain','admin-demo')


    })

it.skip('verifyLogin and Logout with valid user credenatils', ()=>{

        cy.get('input#Email').clear().type('admin@yourstore.com')

        cy.get('#Password').clear().type('admin')

        cy.get('#RememberMe').check().should('be.checked')

        cy.get('button').contains('Log in').click()


        //validation
        cy.title().should('eq', 'Dashboard / nopCommerce administration')

    })


    it('verifyLogin using custom method and custom command', ()=>{

        cy.viewport("macbook-16")

        
        const MyLoginMethod = new Login();

        //Enter Email Address
        MyLoginMethod.enterEmail('admin@yourstore.com')

        //Validate value of Email
        cy.get('input[type=email]')
        .should('have.value','admin@yourstore.com')
                        
        //Enter Password
        MyLoginMethod.enterPass('admin')


        //Check Checkbox
        MyLoginMethod.checkRemember()   

        //Validate Checkbox
        cy.xpath("//*[@id='RememberMe']")
        .should('be.checked')  
       
        //Click Login Button
        MyLoginMethod.ClickLogin()

        //Validate Page Title
        cy.title().should('eq','Dashboard / nopCommerce administration')


        //Validate Element Value
        cy.get('div.content-header>h1').then((elem) =>{

            let actualTest = elem.text()
            expect(actualTest).to.contain('Dashboard')
            expect(actualTest).to.not.equal('Dash')
            
                                
        })

        //Click Customer Side Panel
        MyLoginMethod.ClickCustomer()

        //Click Customer Page
        MyLoginMethod.ClickCustomerPage()

        //Enter Email
        MyLoginMethod.TypeSearchEmail()
        
        //Click Search Button
        MyLoginMethod.ClickSearchEmail()

        //Verify Search Result
        MyLoginMethod.VerifySearchResult()


    

    })

    

})