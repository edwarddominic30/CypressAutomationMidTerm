



/// <reference types="cypress" />


describe('FixtureDemo', ()=>{


    before(function(){

        cy.fixture('datarequest').then(  (loginDetails) => {

            this.nopComm =  loginDetails;


        } )

    })


    it('verify NOP comm app login feature', function(){

        cy.visit(this.nopComm.appURL)
        cy.log(this.nopComm.Email)
        cy.log(this.nopComm.Password)


        cy.get('#Email').clear().type(this.nopComm.Email).should('have.value', this.nopComm.Email)
        cy.get('.password').clear().type(this.nopComm.Password).should('have.value', this.nopComm.Password)


        cy.get('.button-1').click()


    })


})