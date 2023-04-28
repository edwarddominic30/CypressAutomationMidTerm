/// <reference types="cypress"/>


// comment/uncomment --------ctrl + / 
//launch terminal ---- ctrl + j
//   npx cypress open

const data = require('./config/datarequest.json')

describe('Launch NPO ECommerce Page', () => {

  it('ECommerce Page', () => {

    cy.visit(data.appURL)


    cy.url().should('eq','https://admin-demo.nopcommerce.com/login')


    cy.title().should('contain','Your store')

    //cy.title().should('not.contain','Welcome')

    //Email Field
    cy.get('input[type=email]').clear().type(data.Email).should('have.value','admin@yourstore.com')

    //Password Field
    cy.get('input[id*=Pass]').clear().type(data.Password)

    cy.get('input[id^=Rem]').check().should('be.checked')

    cy.get('.button-1').click()


    cy.get('a[href*="logout"]').click()

    
    


  })
})