// cypress/integration/navbar.spec.js

describe('Navigation Bar Test', () => {
    it('should navigate through the man dropdown menu', () => {
        // Visit the webpage
        cy.visit('http://magento.softwaretestingboard.com');
        cy.get('#ui-id-5 > :nth-child(2)').click();

        cy.get('[class*="product-image-wrapper"]').trigger('mouseover');
        cy.get('[class*="action towishlist"]').click();
        
    });
});