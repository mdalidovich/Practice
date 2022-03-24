/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{
    it('My Second Test Case', function(){
        cy.visit(Cypress.env('baseUrl') + "/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
            
        cy.get('.products').as('productsLocator')
        
        cy.get('@productsLocator').find('.product').each(($el, index, $list) => {

            const veggieText = $el.find('h4.product-name').text()
            if(veggieText.includes('Cashews'))
            {
                cy.wrap($el).find('button').click()
            }
        });

        cy.get('.cart-icon').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();


    


    })

    })