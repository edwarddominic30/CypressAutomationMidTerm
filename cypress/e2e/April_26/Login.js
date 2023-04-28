class Login {


    //Identification

    txtEmail = 'input#Email'
    txtPass = 'input#Password'
    chkrem = 'input#RememberMe'
    btnLogin = 'Log in'

    SidebarCust = "(//p[contains(text(),'Customers')])[1]"
    CustPage = "(//p[contains(text(),'Customers')])[2]"


    EmailField ="//*[@id='SearchEmail']"
    SearchEmail ='victoria_victoria@nopCommerce.com'

    btnSearch = "//*[@id='search-customers']"


    SearchResult ="//td[contains(text(), 'victoria_victoria@nopCommerce.com')]"

    //Methods

    enterEmail(emailID){

        cy.get(this.txtEmail)
            .clear()
            .type(emailID)
            
    }

    enterPass(Pass){

        cy.get(this.txtPass)
            .clear()
            .type(Pass)
    }
    checkRemember(){
        cy.get(this.chkrem)
        .check()
    }

    ClickLogin(){
        cy.get('*').contains(this.btnLogin).click()
    }

    ClickCustomer(){
        cy.xpath(this.SidebarCust)     
            .click()

    }
    ClickCustomerPage(){
        cy.xpath(this.CustPage)     
            .click()

    }


    TypeSearchEmail() {
        cy.xpath(this.EmailField)
            .clear()
            .type(this.SearchEmail)


       

    }
    ClickSearchEmail(){
        cy.xpath(this.btnSearch)
        .click()
    }

    VerifySearchResult(){
        cy.xpath(this.SearchResult).should('exist')
    }

}


export default Login;