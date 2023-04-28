


/// <reference types="cypress"/>



describe('Right Click and Double Click', function(){ 

    it('Verify Page', ()=>{
    
    
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
    
    
    
       //cy.xpath("//*[@type='text']").type('Iphone 14')


       //right click button
        //span[text()='right click me']

        //span[contains(text(),'ht click')]
        

        //app1


        //contextmenu   ------ right click operation
        //cy.get("span.context-menu-one.btn.btn-neutral").trigger('contextmenu')

        

        //using xpath
        //cy.xpath("//span[contains(text(),'ht click')]").trigger('contextmenu')

        cy.xpath("//button[contains(text(),'-Click')]").dblclick()


        cy.on('window:alert', (alerttext)=>{
            expect(alerttext).eq('You double clicked me.. Thank You..')

        })


        //app2
        //cy.get("span.context-menu-one.btn.btn-neutral").rightclick()

    })


        
    })