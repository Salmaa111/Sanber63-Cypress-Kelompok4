import accountInformationPage from "../../../support/pageObjectAccount/account-informationPage";

describe('Change Password LUMA', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'))
        accountInformationPage.clickSignIn()
    })
    afterEach(() =>{
        cy.clearCookies()
    })
    it('Change Password - Positive', () => {   
        accountInformationPage.inputEmail('mailonly1')
        accountInformationPage.inputPassword('passonly1')
        accountInformationPage.clickLogin()
        cy.visitFromData('profURl')
        accountInformationPage.changePasswordClick()
        accountInformationPage.typeCurrentPassword('passonly1')
        accountInformationPage.typeNewPassword('passonly2')
        accountInformationPage.typeConfirmationPassword('passonly2')
        accountInformationPage.saveButtonClick()
        accountInformationPage.verifySuccess('You saved the account information')
    })
    it('Change Password without uppercase - Positive', () => {    
        accountInformationPage.inputEmail('mailonly1')
        accountInformationPage.inputPassword('passonly2')
        accountInformationPage.clickLogin()
        cy.visitFromData('profURl')
        accountInformationPage.changePasswordClick()
        accountInformationPage.typeCurrentPassword('passonly2')
        accountInformationPage.typeNewPassword('passnoup')
        accountInformationPage.typeConfirmationPassword('passnoup')
        accountInformationPage.saveButtonClick()
        accountInformationPage.verifySuccess('You saved the account information')
    })
    it('Change Password without symbol - Positive', () => {    
        accountInformationPage.inputEmail('mailonly1')
        accountInformationPage.inputPassword('passnoup')
        accountInformationPage.clickLogin()
        cy.visitFromData('profURl')
        accountInformationPage.changePasswordClick()
        accountInformationPage.typeCurrentPassword('passnoup')
        accountInformationPage.typeNewPassword('passnosymbol')
        accountInformationPage.typeConfirmationPassword('passnosymbol')
        accountInformationPage.saveButtonClick()
        accountInformationPage.verifySuccess('You saved the account information')
    })
    it('Change Password numeric only - Positive', () => {    
        accountInformationPage.inputEmail('mailonly1')
        accountInformationPage.inputPassword('passnosymbol')
        accountInformationPage.clickLogin()
        cy.visitFromData('profURl')
        accountInformationPage.changePasswordClick()
        accountInformationPage.typeCurrentPassword('passnosymbol')
        accountInformationPage.typeNewPassword('passnumonly')
        accountInformationPage.typeConfirmationPassword('passnumonly')
        accountInformationPage.saveButtonClick()
        accountInformationPage.verifySuccess('You saved the account information')
    })
    it('Change Password numeric only - Positive', () => {    
        accountInformationPage.inputEmail('mailonly1')
        accountInformationPage.inputPassword('passnosymbol')
        accountInformationPage.clickLogin()
        cy.visitFromData('profURl')
        accountInformationPage.changePasswordClick()
        accountInformationPage.typeCurrentPassword('passnosymbol')
        accountInformationPage.typeNewPassword('passonly1')
        accountInformationPage.typeConfirmationPassword('passonly1')
        accountInformationPage.saveButtonClick()
        accountInformationPage.verifySuccess('You saved the account information')
    })


})
