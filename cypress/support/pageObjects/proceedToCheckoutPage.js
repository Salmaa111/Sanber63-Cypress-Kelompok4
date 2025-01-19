class proceedToCheckoutPage {
    product = ':nth-child(1) > .product-item-info > .details > .name > .product-item-link';
    sizeOrder = '#option-label-size-143-item-169';
    colorOrder = '#option-label-color-93-item-50';
    addButton = '#product-addtocart-button';
    viewCart = '.showcart';
    cartButton = '#top-cart-btn-checkout';
    blockTitle = '.block > .title';
    comboboxButton = 'select[name="region_id"]';
    buttonInfo = ':nth-child(1) > :nth-child(1) > .radio';
    buttonProceed = '.button';
    billingAddressSameAsShipping = '#billing-address-same-as-shipping-checkmo';
    paymentMethodContent = ':nth-child(4) > div.primary > .action';
    checkBox = '#billing-address-same-as-shipping-checkmo';
    finalButton = '.payment-method-content > :nth-child(4) > div.primary > .action';



    chooseProduct() {
        cy.get(this.product).click();
    }

    chooseSize() {
        cy.get(this.sizeOrder, { timeout: 1500 }).click();
    }

    chooseColor() {
        cy.get(this.colorOrder, { timeout: 1500 }).click();
    }

    addToCart() {
        cy.get(this.addButton, { timeout: 1500 }).click();
    }

    showCart() {
        cy.get(this.viewCart).click();
    }

    showCartButton() {
        cy.get(this.cartButton).click();
    }

    showBlockTitle() {
        cy.get(this.blockTitle).click();
    }

    showButtonInfo() {
        cy.get(this.buttonInfo).click();
    }

    showButtonProceed() {
        cy.get(this.buttonProceed).click();
    }

    billingShipping() {
        cy.get(this.billingAddressSameAsShipping).click();
    }

    paymentMethod() {
        cy.get(this.paymentMethodContent).click();
    }

    checkBoxBilling() {
        cy.get(this.checkBox).click();
    }

    finalButtonPayment() {
        cy.get(this.finalButton).click();
    }


}

module.exports = new proceedToCheckoutPage();