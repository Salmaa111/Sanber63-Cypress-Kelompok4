import accountInformationPage from "./pageObjectAccount/account-informationPage";

Cypress.Commands.add('createAccount', (firstName, lastName, email, password) => {
    cy.visit('/customer/account/create/');
    cy.get('#firstname').type(firstName);
    cy.get('#lastname').type(lastName);
    cy.get('#email_address').type(email);
    cy.get('#password').type(password);
    cy.get('#password-confirmation').type(password);
  });

Cypress.Commands.add("fillAddressForm", (addressData) => {
  cy.get("#firstname").clear().type(addressData.firstName);
  cy.get("#lastname").clear().type(addressData.lastName);
  cy.get("#telephone").clear().type(addressData.phone);
  cy.get("#street_1").clear().type(addressData.street);
  cy.get("#city").clear().type(addressData.city);
  cy.get("#zip").clear().type(addressData.zip);
  cy.get("#country").select(addressData.country);
});

Cypress.Commands.add("saveAddress", () => {
  cy.get('button[title="Save Address"]').click();
});
  


Cypress.Commands.add(
  "createAccount",
  (firstName, lastName, email, password) => {
    cy.visit("/customer/account/create/");
    cy.get("#firstname").type(firstName);
    cy.get("#lastname").type(lastName);
    cy.get("#email_address").type(email);
    cy.get("#password").type(password);
    cy.get("#password-confirmation").type(password);
    cy.get('button[title="Create an Account"]').click();
  });