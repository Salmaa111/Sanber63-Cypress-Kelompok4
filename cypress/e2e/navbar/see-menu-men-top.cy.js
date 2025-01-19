// cypress/integration/navbar.spec.js

describe('Navigation Bar Test', () => {
    it('should navigate through the man dropdown menu', () => {
        // Visit the webpage
        cy.visit('http://magento.softwaretestingboard.com/women.html');

        // Hover over the "Women" menu item
        cy.get('#ui-id-5 > :nth-child(2)').trigger('mouseover');

        // Verify the "Tops" and "Bottoms" subcategories are visible
        cy.contains('Tops').should('be.visible');
        //cy.contains('Bottoms').should('be.visible');

        // Hover over the "Tops" subcategory
        cy.contains('Tops').trigger('mouseover');

        // Verify the subcategories under "Tops" are visible
        cy.contains('Jackets').should('be.visible');
        cy.contains('Hoodies & Sweatshirts').should('be.visible');
        cy.contains('Tees').should('be.visible');
        cy.contains('Bras & Tanks').should('be.visible');

        // Hover over the "Bottoms" subcategory
       // cy.contains('Bottoms').trigger('mouseover');

        // Verify the subcategories under "Bottoms" are visible
        //cy.contains('Pants').should('be.visible');
        //cy.contains('Shorts').should('be.visible');
    });
});