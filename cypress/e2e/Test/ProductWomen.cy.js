// cypress/e2e/Test/Product.cy.js

import { productPage } from '../Pages/ProductPage';

describe('Product Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/women.html'); // Update with the actual URL of the product page
  });

  it('should display the product name', () => {
    productPage.getProductName().should('be.visible');
  });

  it('should display the product price', () => {
    productPage.getProductPrice().should('be.visible');
  });

  it('should display customer reviews', () => {
    productPage.getCustomerReviews().should('be.visible');
  });
});

