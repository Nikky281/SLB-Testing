/// <reference types="cypress" />

describe('Test Sign UP Page',function(){
    // write your own test suites
    beforeEach(()=>{
        cy.fixture('example').then(function(data){

            this.data=data
        } )
        cy.visit('https://www.slb.com/register')
    })

    it('sign up',function(){
    
    cy.contains('button', 'Accept').click()
    
    //Enter all the details

    cy.get('#txtFirstName').type(this.data.firstname)
    cy.get('#txtLastName').type(this.data.lastname)
    cy.get('#txtEmail').type(this.data.email)
    cy.get('[aria-labelledby="btnAffiliation"] .dropdown-items')
    .contains('Current or Potential Customer').click({force: true})
    cy.get('#txtJobTitle').type(this.data.jobname)
    cy.get('#txtCompany').type(this.data.companyname)
    cy.get('#ddlRegion .dropdown-items').contains('Norway').click({force: true})
    cy.get('#txtPassword').type(this.data.pwd)

    //Pause to verify the captcha
    cy.pause()

    cy.get('#btnRegister').click()
    //verify the error msg
    cy.get('#spanErrorMsg').contains('We were unable to process your registration.')    
        .should('include.text','We were unable to process your registration.')
    })

}
)


