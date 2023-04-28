

/// <reference types="cypress"/>




describe('Iframe Command', () =>{


    it('Verify Command IFrame ', () => {


        cy.visit('https://the-internet.herokuapp.com/iframe')



        cy.frameLoaded('#mce_0_ifr')

        cy.iframe('#mce_0_ifr').clear().type('Hello Edward Welcome')
    })

})