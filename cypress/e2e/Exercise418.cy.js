


/// <reference types="cypress" />

var Firstname='Edward'
var Lastname ='Garado'

describe('Test Blog Page', ()=>{


    before(function(){

        cy.fixture('data').then(  (loginDetails) => {

            this.testBlog =  loginDetails;


        } )

    })


    it('verify Test Blog Page feature', function(){

        cy.visit(this.testBlog.appURL)
        

        cy.get('input[name=fname]').clear().type(Firstname).should('have.value','Edward')


        cy.get('[value="Bike"]').check().should('be.checked')

        cy.get('[value="Car"]').should('not.be.checked')

        cy.get('[value="Boat"]').should('not.be.checked')



        cy.get('[value="male"]').check().should('be.checked')

        cy.get('[value="female"]').should('not.be.checked')

        

    })


})