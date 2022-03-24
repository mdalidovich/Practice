/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{
    it('My First Test Case', function(){
        cy.visit(Cypress.env('baseUrl') + "/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.product').should('have.length',5);
        cy.get('.product:visible').should('have.length',4);
        //parent child chaining
        cy.get('.products').as('productsLocator')
        cy.get('@productsLocator').find('.product').should('have.length',4);
        cy.get(':nth-child(3) > .product-action > button').click();
        cy.get('@productsLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function()
        {
            console.log('resolving the step')
        });

        cy.get('@productsLocator').find('.product').each(($el, index, $list) => {

            const veggieText = $el.find('h4.product-name').text()
            if(veggieText.includes('Cashews'))
            {
                cy.wrap($el).find('button').click()
            }
        });

        cy.get('.brand').should('have.text','GREENKART');

        cy.get('.brand').then(function(logoElement)
        {
            cy.log(logoElement.text())

        });
        


    })

    })