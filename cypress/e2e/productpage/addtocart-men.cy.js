describe('template spec', () => {
    it('Login Sucsess', () => {
        cy.visit('https://magento.softwaretestingboard.com')
        cy.get('#ui-id-5').click()  
        cy.get('[class="product-image-photo"]')
        cy.get('#btn-minicart-close').click({ force: true })


    })
    
  })