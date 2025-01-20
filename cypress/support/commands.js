Cypress.Commands.add('fillAddressForm', (addressData) => {
    cy.get('#firstname').clear().type(addressData.firstName);
    cy.get('#lastname').clear().type(addressData.lastName); 
    cy.get('#telephone').clear().type(addressData.phone); 
    cy.get('#street_1').clear().type(addressData.street); 
    cy.get('#city').clear().type(addressData.city); 
    cy.get('#zip').clear().type(addressData.zip); 
    cy.get('#country').select(addressData.country); 
  });
  
  Cypress.Commands.add('saveAddress', () => {
    cy.get('button[title="Save Address"]').click(); 
  });
 
import accountInformationPage from "./pageObjectAccount/account-informationPage"

Cypress.Commands.add('createAccount', (firstName, lastName, email, password) => {
    cy.visit('/customer/account/create/');
    cy.get('#firstname').type(firstName);
    cy.get('#lastname').type(lastName);
    cy.get('#email_address').type(email);
    cy.get('#password').type(password);
    cy.get('#password-confirmation').type(password);
    cy.get('button[title="Create an Account"]').click();
  });

  Cypress.Commands.add('verifyPrice', (price) => {
    cy.get('.price').should('have.text', price);
});

Cypress.Commands.add('VerifyProductName', (product) => {
    cy.get('.base', { timeout: 3000 }).should('contain.text', product);
});

Cypress.Commands.add('verifySuccessMessage', (message) => {
    cy.get('.message-success > div').should('contain.text', message);
});

Cypress.Commands.add('verifyDigitCart', (digit) => {
    cy.get('.showcart > .counter').should('contain.text', digit);
});

Cypress.Commands.add('verifyModalInformation', (image) => {
    cy.get('#ui-id-1').should(image);
});

Cypress.Commands.add('verifyUrl', (url) => {
    cy.url().should('include', url);
});

Cypress.Commands.add('verifyOpcBlockSummary', (modal) => {
    cy.get('.opc-block-summary', { timeout: 3000 }).should(modal);
});

Cypress.Commands.add('verifyShipingInformation', (teks) => {
    cy.get('._active > span', { timeout: 2000 }).should('contain.text', teks);
});

Cypress.Commands.add('verifyEmailAddress', (email) => {
    cy.get('#customer-email-fieldset > .required > .control > #customer-email').type(email);
});

Cypress.Commands.add('inputFirstName', (firstName) => {
    cy.get('[name="shippingAddress.firstname"]').type(firstName);
});

Cypress.Commands.add('inputLastName', (lastName) => {
    cy.get('[name="shippingAddress.lastname"]').type(lastName);
});

Cypress.Commands.add('inputCompany', (company) => {
    cy.get('[name="shippingAddress.company"]').type(company);
});

Cypress.Commands.add('verifyArray', (array) => {
    cy.get('.street').should('have.length', array);
});

Cypress.Commands.add('inputAddress1', (address1) => {
    cy.get('input[name="street[0]"]').type(address1);
});

Cypress.Commands.add('inputAddress2', (address2) => {
    cy.get('input[name="street[1]"]').type(address2);
});

Cypress.Commands.add('inputAddress3', (address3) => {
    cy.get('input[name="street[2]"]').type(address3);
});

Cypress.Commands.add('inputCity', (city) => {
    cy.get('[name="shippingAddress.city"]').type(city);
});

Cypress.Commands.add('inputRegion', (region) => {
    cy.get('select[name="region_id"]').select(region);
});


Cypress.Commands.add('inputPostCode', (postCode) => {
    cy.get('[name="shippingAddress.postcode"]').type(postCode);
});

Cypress.Commands.add('inputCountry', (country) => {
    cy.get('[name="shippingAddress.country_id"]').type(country);
});

Cypress.Commands.add('inputTelephone', (telephone) => {
    cy.get('[name="shippingAddress.telephone"]').type(telephone);
});

Cypress.Commands.add('verifyUrl', (url) => {
    cy.url().should('include', url);
});

Cypress.Commands.add('verifyTitle', (title) => {
    cy.get('._active > span').should('contain.text', title);
});

Cypress.Commands.add('verifyOpcBlockSummary', (modal) => {
    cy.get('.opc-block-summary', { timeout: 3000 }).should(modal);
});

Cypress.Commands.add('verifyCost', (cost) => {
    cy.get('strong > .price').should('contain.text', cost);
});

Cypress.Commands.add('verifyShipingInfoContent', (content) => {
    cy.get('.ship-to > .shipping-information-content').should(content);
});

Cypress.Commands.add('verifyShippingText', (shippingContentText) => {
    cy.get('.shipping-information-content > .value').should('contain.text', shippingContentText);
});

Cypress.Commands.add('verifyUrl', (url) => {
    cy.url().should('include', url);
});

Cypress.Commands.add('verifySuccessMessage', (success) => {
    cy.get('.base').should('have.text', success);
});

Cypress.Commands.add('verifyButton1', (button1) => {
    cy.get('.checkout-success > .actions-toolbar > div.primary > .action').should(button1);
});

Cypress.Commands.add('verifyButton2', (button2) => {
    cy.get('#registration > :nth-child(3) > .action').should(button2);
});


Cypress.Commands.add('SignIn', (email, password) => {
    cy.session([email, password], () => {
        cy.visit(Cypress.config('baseUrl'))
        accountInformationPage.clickSignIn()
        accountInformationPage.inputEmail(email)
        accountInformationPage.inputPassword(password)
        accountInformationPage.clickLogin()
        cy.visit(Cypress.config('profileUrl'))
    }, {
        cacheAcrossSpecs: true,
    })
})

Cypress.Commands.add('visitFromData', (linkKey) => {
    cy.fixture('Data.json').then((data) => {
      const link = data.env.links[linkKey];
        if (!link) {
            throw new Error(`Link "${linkKey}" not found in Data.json`);
        }
      cy.visit(link);
Cypress.Commands.add('selectRandomColor', () => {
    cy.get('.swatch-option.color').then(colors => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        cy.wrap(randomColor).click();
    });
});

Cypress.Commands.add('selectRandomSize', () => {
    cy.get('.swatch-option.text').then(sizes => {
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        cy.wrap(randomSize).click();
    });
});

Cypress.Commands.add('selectRandomQuantity', () => {
    const randomQuantity = Math.floor(Math.random() * 10) + 1; // Random quantity between 1 and 10
    cy.get('#qty').clear().type(randomQuantity);
});


  
  
  