import accountInformationPage from "../../../support/pageObjectAccount/account-informationPage";

describe('Change Email And Password LUMA', () => {
    beforeEach(() => {
        // Load Data.json and authenticate
        cy.fixture('Data.json').then((data) => {
            cy.auth('baseURl', 'user1')
            cy.visit(data.env.links.profURl) // Visit profile URL from the JSON file
        });
    });

    it('Change Email - Positive', () => {
            cy.contains('Edit').click()
            accountInformationPage.clearInputFirstname()
            accountInformationPage.inputFirstname('Testing')
            accountInformationPage.clearInputLasttname()
            accountInformationPage.inputLastname('Testingin')
            accountInformationPage.changeEmailCheckBox()
            cy.newEmail('mailonly1')
            cy.currentPassword('passonly1')
            accountInformationPage.saveButtonClick()
            accountInformationPage.verifySuccess('You saved the account information')
    });
});
