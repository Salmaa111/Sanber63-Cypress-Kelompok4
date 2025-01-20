// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

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
  