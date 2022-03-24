/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('IFrame Test Practice', function() 
{
    it('IFrame Test', function(){

        cy.visit(Cypress.env('baseUrl') + "/AutomationPractice/");
        cy.frameLoaded('#courses-iframe');

        cy.iframe().find('a[href*="mentorship"]').eq(0).click();
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2);

    })

})

