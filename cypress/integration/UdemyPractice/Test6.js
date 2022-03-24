/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{
    it('My Sixth Test Case', function(){
        
        cy.visit(Cypress.env('baseUrl') + "/AutomationPractice/");

        cy.get('.mouse-hover-content').invoke('show');
       
        //cy.contains('Top').click({force: true});
        cy.contains('Top').click();
        cy.url().should('include', 'top')

    })

})