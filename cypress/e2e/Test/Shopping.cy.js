import ShoppingPage from '../Pages/ShoppingPage';

describe('Shopping Page Test', () => {
    const shoppingPage = new ShoppingPage();

    beforeEach(() => {
        shoppingPage.visit();
    });

    it('should select random color, size, and quantity options for Selene Yoga Hoodie and add to cart', () => {
        cy.selectRandomColor();
        cy.selectRandomSize();
        cy.selectRandomQuantity();
        shoppingPage.addToCart();
    });
});
