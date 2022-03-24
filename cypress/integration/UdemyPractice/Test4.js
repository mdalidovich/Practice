/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{
    it('My Forth Test Case', function(){

        cy.visit(Cypress.env('baseUrl') + "/AutomationPractice/");

        cy.get('#alertbtn').click();
        cy.get('[value="Confirm"]').click();

        //window:alert
        cy.on('window:alert', (str) =>
        {
            //Mocha assertion
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        //window:confirm
        cy.on('window:confirm', (str) =>
        {
            //Mocha assertion
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //remove target attribute to open page in the same browser window. JQuery - removeAttr
        cy.get('#opentab').invoke('removeAttr', 'target').click();

        cy.url().should('include', 'rahulshettyacademy')

        //go back to previous page
        cy.go('back');



    })

})