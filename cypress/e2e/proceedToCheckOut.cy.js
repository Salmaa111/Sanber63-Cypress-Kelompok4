import proceedToCheckoutPage from '../support/pageObject/proceedToCheckoutPage';

describe('Task_Reza_Paramarta_Proceed_To_Checkout', () => {
    before(() => {
        cy.visit('https://magento.softwaretestingboard.com/men/tops-men/tees-men.html/');
        cy.VerifyProductName('Tees');
    });

    it('Test Case 1 Positive - Choose Strike Endurance Tee without Signup', () => {
        proceedToCheckoutPage.chooseProduct();
        cy.verifyPrice('$39.00');
        proceedToCheckoutPage.chooseSize();
        proceedToCheckoutPage.chooseColor();
        proceedToCheckoutPage.addToCart();
        // Tunggu agar pesan muncul
        cy.wait(4000);
        cy.verifySuccessMessage('Strike Endurance Tee');
        cy.verifyDigitCart('1');
        proceedToCheckoutPage.showCart();
        cy.verifyModalInformation('be.visible');
        proceedToCheckoutPage.showCartButton();
        cy.verifyUrl('/checkout/#shipping');
        proceedToCheckoutPage.showBlockTitle();
        cy.verifyOpcBlockSummary('be.visible');
        cy.verifyShipingInformation('Shipping');
        cy.verifyEmailAddress('ulul@ululalba.com');
        cy.wait(500);
        cy.inputFirstName('ululalbab');
        cy.inputLastName('Aja');
        cy.inputCompany('PT. Arkamaya');
        cy.verifyArray(1);
        cy.inputAddress1('Jl. Raya Aja 1');
        cy.inputAddress2('Jl. Raya Aja 2');
        cy.inputAddress3('Jl. Raya Aja 3');
        cy.inputCity('United States');
        cy.inputRegion('Alabama');
        cy.inputPostCode('40123');
        cy.inputTelephone('081234567890');
        cy.inputCountry('United States');
        proceedToCheckoutPage.showButtonInfo();
        proceedToCheckoutPage.showButtonProceed();
        cy.wait(500);
        cy.verifyUrl('/checkout/#payment');
        cy.verifyTitle('Review & Payments');
        cy.verifyOpcBlockSummary('be.visible');
        cy.verifyCost('$44.00');
        cy.verifyShipingInfoContent('be.visible');
        cy.verifyShippingText('Flat Rate - Fixed');
        proceedToCheckoutPage.checkBoxBilling();
        proceedToCheckoutPage.finalButtonPayment();
        cy.wait(500);
        cy.verifyUrl('/checkout/onepage/success/');
        cy.verifySuccessMessage('Thank you for your purchase!');
        cy.verifyButton1('be.visible');
        cy.verifyButton2('be.visible');
        cy.wait(2000);
    });
});