/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{
    it('My Seventh Test Case', function(){

        cy.visit(Cypress.env('baseUrl') + "/AutomationPractice/");

        cy.get('#opentab').then(function(el){

        const url = el.prop('href')
        cy.log(url)
        cy.visit(url)

       })

    })

})