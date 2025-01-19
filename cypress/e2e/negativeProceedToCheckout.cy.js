import proceedToCheckoutPage from '../support/pageObject/proceedToCheckoutPage';

describe('Task_Reza_Paramarta_Proceed_To_Checkout', () => {
    before(() => {
        cy.visit('https://magento.softwaretestingboard.com/men/tops-men/tees-men.html/');
        cy.VerifyProductName('Tees');
    });

    it('Test Case 2 Negative - Invalid Zip/Postal Code', () => {
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
        cy.verifyEmailAddress('nugget@example.com');
        cy.wait(500);
        cy.inputFirstName('Reza');
        cy.inputLastName('Paramarta');
        cy.inputCompany('PT. Arkamaya');
        cy.verifyArray(1);
        cy.inputAddress1('Jl. Cijambe RT03/03');
        cy.inputAddress2('Jl. Cijambe RT03/03');
        cy.inputAddress3('Jl. Cijambe RT03/03');
        cy.inputCity('Bandung');
        cy.inputRegion('Alabama');
        cy.inputPostCode('fsgffgsg');
        cy.get('.control > .message > span').should('contain.text', 'Provided Zip/Postal Code seems to be invalid. Example: 12345-6789; 12345. If you believe it is the right one you can ignore this notice.');
        // cy.inputCountry('Indonesia');
        // cy.inputTelephone('081234567890');
        // proceedToCheckoutPage.showButtonInfo();
        // proceedToCheckoutPage.showButtonProceed();
        // cy.wait(500);
        // cy.verifyUrl('/checkout/#payment');
        // cy.verifyTitle('Review & Payments');
        // cy.verifyOpcBlockSummary('be.visible');
        // cy.verifyCost('$44.00');
        // cy.verifyShipingInfoContent('be.visible');
        // cy.verifyShippingText('Flat Rate - Fixed');
        // proceedToCheckoutPage.checkBoxBilling();
        // proceedToCheckoutPage.finalButtonPayment();
        // cy.wait(500);
        // cy.verifyUrl('/checkout/onepage/success/');
        // cy.verifySuccessMessage('Thank you for your purchase!');
        // cy.verifyOrderNo('000036783');
        // cy.verifyButton1('be.visible');
        // cy.verifyButton2('be.visible');
    });
});