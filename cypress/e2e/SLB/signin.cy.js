/// <reference types="cypress" />

describe('Test Sign UP Page',function(){
  // write your own test suites
  beforeEach(()=>{
      cy.fixture('example').then(function(data){

          this.data=data
      } )
      cy.visit('https://www.slb.com/register')
  })

it('displays two todo items by default', function() {
    
      
      //open the site
      cy.visit('https://www.slb.com/register')
      cy.contains('button', 'Accept').click()
      cy.get('.btn-label').click()
      //enter the mail id
      cy.get('#text-fields-emailaddress').type(this.data.email)
      //enter the password
      cy.get('#text-fields-password').type(this.data.password)
      //pause to verify the captcha
      cy.pause()
      //click on sign in 
      cy.get('.btn').contains('Sign In').click()
      //Go to my account and verify the mail id same as we passed
      cy.get(':nth-child(7) > .dropdown-container').find('li')
      .contains('My Account').click({force: true})
      cy.get('#txtEmail').should('have.value',this.data.email)
     
      })
    })
