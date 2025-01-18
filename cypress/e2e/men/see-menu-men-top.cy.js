describe('template spec', () => {
    it('Login Sucsess', () => {
        cy.visit('https://magento.softwaretestingboard.com')
        cy.get('#ui-id-5').click()  
        cy.get('a').contains('Text Link').click()
    })
    
  })