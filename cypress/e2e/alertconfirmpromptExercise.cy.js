/// <reference types="cypress" />


describe('Alert Confirm Prompt Page', ()=>{




    it('verify alert confirm prompt Page feature', function(){

        cy.visit('http://www.uitestpractice.com/Students/Switchto')


        cy.viewport('macbook-16')

        cy.on('window:alert', (alerttext)=>{
                expect(alerttext).eq('Hello Alert')

        })

        cy.get('button#alert').click()


        cy.get('button#confirm').click()
        cy.on('window:confirm', ()=> false)

        

        cy.window().then((promptenter)=>{

   
            cy.stub(promptenter,"prompt").returns("Edward")      
            cy.get('button#prompt').click()           
            cy.get('div[id=demo]').should('have.text','Hello Edward! How are you today?')
        
        })
        



        

    })


})