import accountInformationPage from "../../../support/pageObjectAccount/account-informationPage";

describe('Change Name Test LUMA', () => {
    beforeEach(() => {
        cy.SignIn('alpha@testing.com', 'Abc12345.')
        cy.visitFromData('profURl')
        accountInformationPage.editButtonClick()
    })
    after(() => {
        cy.clearCookies();
    })
    
    it('Edit Name - Save Without Edit - Positive' , () => {
        accountInformationPage.clearInputFirstname()
        accountInformationPage.inputFirstname('Tes')
        accountInformationPage.clearInputLasttname()
        accountInformationPage.inputLastname('Ting')
        accountInformationPage.saveButtonClick()
        accountInformationPage.verifySuccess('You saved the account information')
    })
    it('Edit Name All Fields - Positive' , () => {
        accountInformationPage.clearInputFirstname()
        accountInformationPage.inputFirstname('Tes')
        accountInformationPage.clearInputLasttname()
        accountInformationPage.inputLastname('Ting')
        accountInformationPage.saveButtonClick()
        accountInformationPage.verifySuccess('You saved the account information')
    })
    it('Edit Firstname Only - Positive' , () => {
        accountInformationPage.clearInputFirstname()
        accountInformationPage.inputFirstname('Tes')
        accountInformationPage.saveButtonClick()
        accountInformationPage.verifySuccess('You saved the account information')
    })
    it('Edit Lastname Only - Positive' , () => {
        accountInformationPage.clearInputLasttname()
        accountInformationPage.inputLastname('Ting')
        accountInformationPage.saveButtonClick()
        accountInformationPage.verifySuccess('You saved the account information')
    })
    it('Edit Name Without Clear - Positive' , () => {
        accountInformationPage.inputFirstname('Tes')
        accountInformationPage.inputLastname('Ting')
        accountInformationPage.saveButtonClick()
        accountInformationPage.verifySuccess('You saved the account information')
    })
    it('Edit Name - Clear All Field And Click Save - Negative' , () => {
        accountInformationPage.clearInputFirstname()
        accountInformationPage.clearInputLasttname()
        accountInformationPage.saveButtonClick()
        accountInformationPage.firstNameError('This is a required field.')
        accountInformationPage.lastNameError('This is a required field.')
    })
    it('Edit Name - Clear Firstname Field And Click Save - Negative' , () => {
        accountInformationPage.clearInputFirstname()
        accountInformationPage.clearInputLasttname()
        accountInformationPage.inputLastname('Ting')
        accountInformationPage.saveButtonClick()
        accountInformationPage.firstNameError('This is a required field.')
    })
    it('Edit Name - Clear Lastname Field And Click Save - Negative' , () => {
        accountInformationPage.clearInputFirstname()
        accountInformationPage.inputFirstname('Ting')
        accountInformationPage.clearInputLasttname()
        accountInformationPage.saveButtonClick()
        accountInformationPage.lastNameError('This is a required field.')
    })
})
