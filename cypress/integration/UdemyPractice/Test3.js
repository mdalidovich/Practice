/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{
    it('My Third Test Case', function(){

        cy.visit(Cypress.env('baseUrl') + "/AutomationPractice/");

        //checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        cy.get('input[type="checkbox"]').check();
        cy.get('input[type="checkbox"]').uncheck();
        cy.get('input[type="checkbox"]').check(['option2', 'option3']);
        
        //static dropdown
        cy.get('select').select('option2').should('have.value', 'option2');

        //dynamic dropdown
        cy.get('#autocomplete').type('bel');

        cy.get('.ui-menu-item').each(($el, index, $list) => {

            if($el.text() === 'Belarus')
            {
                cy.wrap($el).click()
            }
        })

        cy.get("#autocomplete").should('have.value','Belarus');

        //show and hide check, visible invisible
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');

        //radio button
        cy.get('[value="radio2"]').check().should('be.checked');



    })

})