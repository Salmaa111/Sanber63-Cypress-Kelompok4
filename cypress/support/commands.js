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

Cypress.Commands.add('visitFromData', (linkKey) => {
    cy.fixture('Data.json').then((data) => {
      const link = data.env.links[linkKey];
        if (!link) {
            throw new Error(`Link "${linkKey}" not found in Data.json`);
        }
      cy.visit(link);
    });
});

Cypress.Commands.add('inputCredentialsFromJson', (userKey) => {
        cy.fixture('Data.json').then((data) => {
        const users = data.env.users;
    
        if (!users.hasOwnProperty(userKey)) {
            throw new Error(`User "${userKey}" not found in Data.json users`);
        }
    
        const user = users[userKey];
        if (!user.hasOwnProperty('email') || !user.hasOwnProperty('pass')) {
            throw new Error(`User "${userKey}" does not have property "email" or "pass" in Data.json users`);
        }
        const { email, pass } = user;
        cy.visit(Cypress.config('baseUrl'))
        accountInformationPage.clickSignIn()
        cy.inputEmail(email);
        cy.inputPassword(pass);
        accountInformationPage.clickLogin()
    });
});

//   Cypress.Commands.add('inputEmail', (email) => {
//     cy.get('#email').type(email);
// });

// Cypress.Commands.add('inputPassword', (password) => {
//     cy.get('#pass').type(password, { log: false });
// });


Cypress.Commands.add('newEmail', (emailKey) => {
    cy.fixture('Data.json').then((data) => {

      const emails = data.env.mails
      const emailData = emails[emailKey]
      const email = emailData.email

      return email
  
    });
});

Cypress.Commands.add('currentPassword', (passwordKey) => {
    cy.fixture('Data.json').then((data) => {
      const passwords = data.env.passwrd
      const passwordData = passwords[passwordKey]
      const password = passwordData.pass

      return password;
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