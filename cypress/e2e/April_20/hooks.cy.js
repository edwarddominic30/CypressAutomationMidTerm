
/// <reference types="cypress" />

describe('HRM App validation', ()=>{


    //hooks
    //mocha/chai/jasmine  ----- unit testing framework for Javascript


    afterEach(function(){

        cy.log('********after each**************')

    })


    after( ()=>{

        cy.log('------execute after-----')

    }  )


    it('verify login feature', ()=>{


        cy.log('-------------verify login feature test case------------------')

        

    })



    it('verify logout feature', ()=>{


        cy.log('-------------verify logout feature test case------------------')


    })


    before( ()=>{

        cy.log('------execute before-----')

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.log('application launched sucessfully.')

    }  )





    beforeEach(function(){

        cy.log('********before each **************')

    })



})