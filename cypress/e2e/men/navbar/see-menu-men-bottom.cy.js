// cypress/integration/navbar.spec.js

describe('Navigation Bar Test', () => {
    it('should navigate through the man dropdown menu', () => {
        // Visit the webpage
        cy.visit('http://magento.softwaretestingboard.com/women.html');

        cy.get('#ui-id-5 > :nth-child(2)').trigger('mouseover');
        cy.get('#ui-id-18').click()
        cy.get('.base').should('contain', 'Buttoms')

    
    });
});