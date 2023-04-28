/// <reference types="cypress"/>


// comment/uncomment --------ctrl + / 
//launch terminal ---- ctrl + j
//   npx cypress open

const data = require('./config/datarequest.json')


describe('Launch Amazon Page', () => {
    



    it('Amazon In Page', () => {


        let search = 'Iphone 14'
        
        //cy.fixture('config/datarequrest.json',appURL3)

        cy.visit(data.appURL3)

        cy.get('#twotabsearchtextbox').clear().type(search)

        cy.get('#nav-search-submit-button').click()


    })



})