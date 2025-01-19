import accountInformationPage from "../../../support/pageObjectAccount/account-informationPage";

describe('Change Name Test LUMA', () => {
    before(() => {
        cy.clearCookies();
    })
    beforeEach(() => {
        cy.SignIn('testing@example.com', 'Abc12345.')
        cy.visit(Cypress.config('profileUrl'));
        
    })
    
    it('Edit Name - Save Without Edit - Positive' , () => {
        //cy.visit(Cypress.config('profileUrl')); // Navigate to the profile page
        cy.contains('Edit').click()
        cy.get('#firstname').clear()
        cy.get('#firstname').type('Testing')
        cy.get('#lastname').clear()
        cy.get('#lastname').type('2')
        cy.contains('Save').click()
        cy.get('.message-success').should('contain.text','You saved the account information.')
    })
    it('Edit Name All Fields - Positive' , () => {
        //cy.visit(Cypress.config('profileUrl')); // Navigate to the profile page
        cy.contains('Edit').click()
        cy.get('#firstname').clear()
        cy.get('#firstname').type('Testing')
        cy.get('#lastname').clear()
        cy.get('#lastname').type('2')
        cy.contains('Save').click()
        cy.VerifySuccess('You saved the account information.')
    })
    it('Edit Firstname Only - Positive' , () => {
        //cy.visit(Cypress.config('profileUrl')); // Navigate to the profile page
        cy.contains('Edit').click()
        cy.get('#firstname').clear()
        cy.get('#firstname').type('Testing')
        cy.contains('Save').click()
        cy.VerifySuccess('You saved the account information.')
    })
    it('Edit Lastname Only - Positive' , () => {
        //cy.visit(Cypress.config('profileUrl')); // Navigate to the profile page
        cy.contains('Edit').click()
        cy.get('#lastname').clear()
        cy.get('#lastname').type('2')
        cy.contains('Save').click()
        cy.VerifySuccess('You saved the account information.')
    })
    it('Edit Name Without Clear - Positive' , () => {
        //cy.visit(Cypress.config('profileUrl')); // Navigate to the profile page
        cy.contains('Edit').click()
        cy.get('#firstname').type('Testing')
        cy.get('#lastname').type('2')
        cy.contains('Save').click()
        cy.VerifySuccess('You saved the account information.')
    })
    it('Edit Name - Clear All Field And Click Save - Negative' , () => {
        //cy.visit(Cypress.config('profileUrl')); // Navigate to the profile page
        cy.contains('Edit').click()
        cy.get('#firstname').clear()
        cy.get('#lastname').clear()
        cy.contains('Save').click()
        cy.FirstNameError('This is a required field.')
        cy.LastNameError('This is a required field.')
    })
    it('Edit Name - Clear Firstname Field And Click Save - Negative' , () => {
        //cy.visit(Cypress.config('profileUrl')); // Navigate to the profile page
        cy.contains('Edit').click()
        cy.get('#firstname').clear()
        cy.get('#lastname').clear()
        cy.get('#lastname').type('AAAABBBB')
        cy.contains('Save').click()
        cy.FirstNameError('This is a required field.')
    })
    it('Edit Name - Clear Lastname Field And Click Save - Negative' , () => {
        //cy.visit(Cypress.config('profileUrl')); // Navigate to the profile page
        cy.contains('Edit').click()
        cy.get('#firstname').clear()
        cy.get('#firstname').type('AAAABBBB')
        cy.get('#lastname').clear()
        cy.contains('Save').click()
        cy.LastNameError('This is a required field.')
    })
})
