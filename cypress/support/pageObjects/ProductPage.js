class HomePage 
{
    getCheckoutButton ()
    {
        return cy.get('.btn.btn-primary')
    }

    getCheckoutButton2 ()
    {
        return cy.get('.btn.btn-success')
    }

    


}

export default HomePage;