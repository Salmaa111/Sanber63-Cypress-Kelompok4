class ProductPage {
  // Constructor
  constructor() {
    this.productName = '.product-item-name';
    this.productPrice = '.price';
    this.addToCartButton = 'button.action.tocart';
    this.customerReviews = '.product-reviews-summary';
  }

  // Methods to interact with the page elements
  getProductName() {
    return cy.get(this.productName);
  }
  
  getProductPrice() {
    return cy.get(this.productPrice);
  }

  getCustomerReviews() {
    return cy.get(this.customerReviews);
  }
}

// Export an instance of the ProductPage class
export const productPage = new ProductPage();



  