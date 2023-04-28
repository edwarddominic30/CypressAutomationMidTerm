

/// <reference types="cypress"/>


describe('Xpath Relationships Parenth/Child', () =>{



    it('Verify Page for parent and child Relationships', () =>{

        cy.visit('https://www.amazon.in/')

        cy.xpath("//h2[contains(text(),'Bluetooth Calling')]/parent::div/following-sibling::div/descendant::a[text()='Shop Now']").click()



    })
})