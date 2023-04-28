
/// <reference types="cypress"/>


const data = require('./config/datarequest.json')


describe("Launch Orange HRM Page", ()=>{

    it('Orange HRM',() =>{


        cy.visit(data.appURL2)

        
    })
}
)
