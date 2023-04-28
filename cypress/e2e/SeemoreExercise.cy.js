

/// <reference types="cypress"/>



describe('See more / Link example', function(){ 

it('See more or Link Explore', ()=>{


    cy.visit('https://www.amazon.in/')



    cy.get('#Hg1Gf-r1QW-n8BjJhP5-Hw > .a-cardui-footer > .a-link-normal').click()
})



})