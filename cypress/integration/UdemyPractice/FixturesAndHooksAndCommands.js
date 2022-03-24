/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'

describe('Hooks, Fixtures, Commands and pageObject', function() 
{
    before(function()
    {
        //runs once before all tests in the block
        cy.fixture('example').then(function(data)
        {
            this.data = data
        })
    })

    it('Test', function(){
        
        //create object for class
        const homePage = new HomePage();
        const productPage = new ProductPage();

        cy.visit(Cypress.env('baseUrl') +'/angularpractice/');

        homePage.getNameField().type(this.data.name);
        homePage.getGender().select(this.data.gender);
        homePage.getTwoWayDataBinding().should('have.value', this.data.name);
        homePage.getNameField().should('have.attr', 'minlength', '2');
        homePage.getEntrepreneurRadioButton().should('be.disabled');
        
        //cy.pause();
        
            
        Cypress.config('defaultCommandTimeout', 10000);  
        homePage.getShopButton().click();

        //cy.debug();

        //select by text and put into cart
        /*cy.get('.card-title').each(($el, index, $list) => 
        {
            if($el.text().includes('Blackberry'))
            {
                cy.get('.btn.btn-info').eq(index).click();
            }
        })*/
                
        this.data.productName.forEach(element => cy.selectProduct(element));
                
        productPage.getCheckoutButton().click();
        var sum = 0;

        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {

            cy.log($el.text())
            const textElement = $el.text()
            var result = textElement.split(" ")
            result = result[1].trim()
            cy.log(result)
            sum = Number(sum) + Number(result)
            

        }).then(function(){
            cy.log(sum)
        })

        cy.get('h3 strong').then(function(element){

            const sumElement = element.text()
            var totalResult = sumElement.split(" ")
            totalResult = totalResult[1].trim()
            expect(Number(totalResult)).to.equal(sum)

        })
        
        productPage.getCheckoutButton2().click();          
        cy.get('#country').type('India');
        cy.get('.suggestions > ul > li > a').click();
        cy.get('.checkbox').click();
        cy.get('input[type="submit"]').click();
        //cy.get('.alert.alert-success').should('includes', 'Success! Thank you! Your order will be delivered in next few weeks');
        
        cy.get('.alert').then(function(element)
        {
            const actualText = element.text()
            expect(actualText.includes('Success')).to.be.true;
        })

    })

})

