/// <reference types="cypress" />

describe('Test the URL working',()=>{
    // write your own test suites
   
    it('site is open',()=>{

        //open the URL
        cy.visit('https://www.slb.com/')

        cy.contains('button', 'Accept').click()
        
        cy.get('.global-nav .nav-logo[alt="SLB Logo White"]')
        .should('be.visible')

    })
}
)


