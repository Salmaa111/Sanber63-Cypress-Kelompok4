import accountInformationPage from "../../../support/pageObjectAccount/account-informationPage";

describe('Change Email LUMA', () => {
    beforeEach(() => {
        cy.fixture('Data.json').then((data) => {
            cy.inputCredentialsFromJson('user1');
            cy.visitFromData('profURl')
            accountInformationPage.editButtonClick()
        })
    })
    it('Change Email - Positive', () => {    
        accountInformationPage.changeEmailCheckBox()
        accountInformationPage.clearInputEmail()
        accountInformationPage.inputEmail('mailonly1')
        accountInformationPage.typeCurrentPassword('passonly1')
        accountInformationPage.saveButtonClick()
        accountInformationPage.verifySuccess('You saved the account information')
    })
    it('Click Save Button - Negative', () => {
        accountInformationPage.changeEmailCheckBox()
        accountInformationPage.saveButtonClick()
        accountInformationPage.currentPasswordError('This is a required field.')
    })
    it('Blank Email Input - Negative', () => {
        accountInformationPage.changeEmailCheckBox()
        accountInformationPage.clearInputEmail()
        accountInformationPage.typeCurrentPassword('passonly1')
        accountInformationPage.saveButtonClick()
        accountInformationPage.emailError('This is a required field.')
    })  
    it('Invalid Email Structure - Negative', () => {
        accountInformationPage.changeEmailCheckBox()
        accountInformationPage.clearInputEmail()
        accountInformationPage.inputEmail('failmail')
        accountInformationPage.typeCurrentPassword('passonly1')
        accountInformationPage.saveButtonClick()
        accountInformationPage.emailError('Please enter a valid email address.')
    })  
    it.skip('Change Email - Positive', () => {    
        accountInformationPage.changeEmailCheckBox()
        accountInformationPage.clearInputEmail()
        cy.newEmail('mailonly1')
        accountInformationPage.typeCurrentPassword('passonly1')
        accountInformationPage.saveButtonClick()
        accountInformationPage.verifySuccess('You saved the account information')
    })
})
