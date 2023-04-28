// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//const cypress = require('cypress')

require('cypress-xpath')
require('cypress-iframe')
require('@4tw/cypress-drag-drop')

Cypress.Commands.add('CustomMethodClickOnLink', (ele) =>{

    cy.get('a').contains(ele).click()
})

Cypress.Commands.add('Login',(user,pass) =>{


})

require('@4tw/cypress-drag-drop')
require('cypress-iframe');

import 'cypress-file-upload';


Cypress.Commands.add('ClickElement', (text)=>{
    cy.get('*').contains(text).click()
})

Cypress.Commands.add('TypeElement', (id,input)=> {

    cy.get(`input[id="${id}"]`).clear().type(input)
})




Cypress.Commands.add('DropandDropMethod',(ori,des) =>{

    cy.get('class').contains(ori)
    cy.get('class').contains(des)
})


Cypress.Commands.add('Validation', (id,value)=>{

    cy.get(`input[id="${id}"]`).should('eq',`${value}`)
})





