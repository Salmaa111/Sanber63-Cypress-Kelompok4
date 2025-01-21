class ShoppingPage {
    visit() {
        cy.visit('https://magento.softwaretestingboard.com/selene-yoga-hoodie.html');
    }

    addToCart() {
        cy.get('#product-addtocart-button').click();
    }
}

export default ShoppingPage;
