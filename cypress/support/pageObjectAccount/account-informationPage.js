class accountInformationPage {
    email = '#email'
    pass = '#pass'
    changeEmail = '#change-email'
    changePassword = '.change-password'
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
    emailErrorMsg = '#email-error'
    currentPasswordErrorMsg = "#current-password-error"
    currentPass = '#current-password'
    newPass = '#password'
    confirmPass = '#password-confirmation'

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

    clearInputEmail () {
        cy.get(this.email).clear()
    }

    emailError(message) {
        cy.get(this.emailErrorMsg).should('have.text', message)
    }

    currentPasswordError (message) {
        cy.get(this.currentPasswordErrorMsg).should('have.text', message)
    }

    changePasswordClick () {
        cy.get(this.changePassword).click()
    }

    typeCurrentPassword(passwordKey) {
        cy.currentPassword(passwordKey).then((password) => {
          cy.get(this.currentPass).type(password, { log: false });
        })
    }

    typeNewPassword(passwordKey) {
        cy.currentPassword(passwordKey).then((password) => {
          cy.get(this.newPass).type(password, { log: false });
        })
    }

    typeConfirmationPassword(passwordKey) {
        cy.currentPassword(passwordKey).then((password) => {
          cy.get(this.confirmPass).type(password, { log: false });
        })
    }

    inputPassword(passwordKey) {
        cy.currentPassword(passwordKey).then((password) => {
          cy.get(this.pass).type(password, { log: false });
        })
    }

    inputEmail(emailKey) {
        cy.newEmail(emailKey).then((email) => {
            cy.get(this.email).type(email, {log: false})
        })
    }

}
export default new accountInformationPage()