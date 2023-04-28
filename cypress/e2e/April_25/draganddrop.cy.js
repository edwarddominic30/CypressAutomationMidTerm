

/// <reference types="cypress"/>




describe('Drag and Drop Page', () =>{


    it('Drag and Drop ', () => {

        cy.viewport('macbook-16')


        //cy.visit('https://the-internet.herokuapp.com/iframe')
        
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    //     cy.xpath('//div[@id="box6"]').should('be.visible')
    //     cy.get('#box106').should('be.visible')



    //    cy.xpath('//div[@id="box6"]').drag('#box106', {force: true})



    });
})