/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{
    it('My Fifth Test Case', function(){

        cy.visit(Cypress.env('baseUrl') + "/AutomationPractice/");

        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
        
            const textList = $el.text()
            if(textList.includes('Python'))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                   const priceText = price.text()
                   expect(priceText).to.equal('25')
                })
            }
        })


    })

})