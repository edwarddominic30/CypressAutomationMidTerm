

/// <reference types="cypress"/>


describe('dropdrown example', function(){

    it.skip('dropdown- select tag ---- Andorra', ()=>{


        cy.visit('https://www.zoho.com/commerce/free-demo.html')


        
        //index
        cy.get('#zcf_address_country')
            .select(5)
            .should('have.value', 'Andorra')


    })



    it.skip('dropdown- without select tag / using Keyboard operation', ()=>{


        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        
        //index
        cy.get('#select2-billing_country-container').click()


        //enter value and perform enter keyboard operation
        cy.get('.select2-search__field').type('Italy').type('{enter}')


        //validation step
        cy.get('#select2-billing_country-container').should('have.text', 'Italy')


    })


    it.skip('dropdown- select tag ---- Andorra', ()=>{


        cy.visit('https://only-testing-blog.blogspot.com/2013/11/new-test.html')


        
        //index
        cy.get('[dir=ltr] > :nth-child(5)')
            .select(2)
            .should('have.value','Singapore')
            .should('contain','Opel')



    })

    it.skip('dropdown- select tag ---- Multiple', ()=>{


        cy.visit('https://only-testing-blog.blogspot.com/2013/11/new-test.html')
      
        //index
        cy.get('select[name="FromLB"]')
            .select([0,2,3], {force: true})
            
            cy.get('[onclick="move(this.form.FromLB,this.form.ToLB)"]').click()

    })


    it.only('dropdown- select tag ---- Wikipedia', ()=>{


        cy.visit('https://www.wikipedia.org/')
      
        //index
        cy.get('input#searchInput').clear().type('Delhi')

        cy.get('h3.suggestion-title').should('have.length', 6)
        cy.get('h3.suggestion-title').should('have.length.greaterThan', 4)


        cy.get('h3.suggestion-title').contains('Delhi University').click()



        cy.title('Delhi University - Wikipedia')
            .should('eq','Delhi University - Wikipedia')
            .should('contain','Delhi')
            .should('not.eq','India')


        cy.url('https://en.wikipedia.org/wiki/Delhi_University')
            .should('eq','https://en.wikipedia.org/wiki/Delhi_University')
            .should('contain','Delhi')
            .should('not.eq','India')







    })


})

