class accountInformationPage {
    email = '#email'
    pass = '#pass'
    changeEmail = '#change-email'
    firstName = '#firstname'
    lastName = '#lastname'
    loginBtn = '#send2'
    successMsg = '[data-ui-id="message-success"]'
    firstNameErrorMsg = '#firstname-error'
    lastNameErrorMsg = '#lastname-error' 
    saveBtn = '#form-validate > .actions-toolbar > div.primary > .action'
    signIn = '.panel > .header > .authorization-link > a'
    currentPassword = '#current-password'
    editBtn = '.block-dashboard-info > .block-content > .box > .box-actions > .edit > span'

    clickLogin(){
        cy.get(this.loginBtn).click()
    }

    clickSignIn() {
        cy.get(this.signIn).click()
    }

    inputFirstname(firstname) {
        cy.get(this.firstName).type(firstname)
    }

    clearInputFirstname () {
        cy.get(this.firstName).clear()
    }

    clearInputLasttname () {
        cy.get(this.lastName).clear()
    }

    inputLastname(lastname) {
        cy.get(this.lastName).type(lastname)
    }

    inputEmail(email) {
        cy.get(this.email).type(email)
    }

    inputPassword(pass) {
        cy.get(this.pass).type(pass)
    }

    inputNewEmail(email) {
        cy.get(this.email).clear().type(email)
    }

    changeEmailCheckBox() {
        cy.get(this.changeEmail).click()
    }

    inputCurrentPassword(pass) {
        cy.get(this.currentPassword).type(pass)
    }

    verifySuccess(message) {
        cy.get(this.successMsg).should('contain.text', message)
    }

    firstNameError(message) {
        cy.get(this.firstNameErrorMsg).should('have.text', message)
    }

    lastNameError(message) {
        cy.get(this.lastNameErrorMsg).should('have.text', message)
    }

    saveButtonClick() {
        cy.get(this.saveBtn).click()
    } 

    editButtonClick () {
        cy.get(this.editBtn).click()
    }


}
export default new accountInformationPage()