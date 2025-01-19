import accountInformationPage from "./pageObjectAccount/account-informationPage"

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

Cypress.Commands.add('auth', (reqEnv, reqUsr) => {
    cy.fixture('Data.json').then((data) => {
        // Get the correct link based on the environment
        const links = data.env.links
        const link = links[reqEnv]

        cy.visit(link)
        accountInformationPage.clickSignIn()

        const users = data.env.users
        const user = users[reqUsr]

        const { email, pass } = user

        accountInformationPage.inputEmail(email)
        accountInformationPage.inputPassword(pass)
        accountInformationPage.clickLogin()
    });
});

Cypress.Commands.add('newEmail', (newemail) => {
    cy.fixture('Data.json').then((data) => {
        const mails = data.env.mails
        const mail = mails[newemail]

        const {email} = mail

        accountInformationPage.inputNewEmail(email)
    })
})

Cypress.Commands.add('currentPassword', (newpass) => {
    cy.fixture('Data.json').then((data) => {
        const passwrd = data.env.passwrd
        const passw = passwrd[newpass]

        const {pass} = passw

        accountInformationPage.inputCurrentPassword(pass)
    })
})


Cypress.Commands.add('VerifySuccess', (message) => {
    accountInformationPage.verifySuccess(message)
})

Cypress.Commands.add('FirstNameError', (message) => {
    accountInformationPage.firstNameError(message)
})

Cypress.Commands.add('LastNameError', (message) => {
    accountInformationPage.lastNameError(message)
})