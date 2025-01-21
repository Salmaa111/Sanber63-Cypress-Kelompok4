import CreateAccountPage from "../../support/pageObjects/createAccountPage";

describe('Create Account Test', () => {
  const createAccountPage = new CreateAccountPage();

  function randomEmail(){
    const randomString = Math.random().toString(36).substring(2,9)
    const email = randomString + "@mailinator.com"
    return email
  }
  let usermail = randomEmail()

  beforeEach(() => {
    cy.fixture('user').then(function(data) {
      this.data = data;
    });
  });

  it('Create A New Account - Success', function() {
    createAccountPage.navigate();
    createAccountPage.fillFirstName(this.data.validUser.firstName);
    createAccountPage.fillLastName(this.data.validUser.lastName);
    createAccountPage.fillEmail(usermail);
    createAccountPage.fillPassword(this.data.validUser.password);
    createAccountPage.fillPasswordConfirmation(this.data.validUser.password);
    createAccountPage.submit();
    cy.contains('Thank you for registering with Main Website Store.');
  });

  it('Create A New Account - Failed (existing email)', function() {
    createAccountPage.navigate();
    createAccountPage.fillFirstName(this.data.invalidUser.firstName);
    createAccountPage.fillLastName(this.data.invalidUser.lastName);
    createAccountPage.fillEmail(this.data.invalidUser.email);
    createAccountPage.fillPassword(this.data.invalidUser.password);
    createAccountPage.fillPasswordConfirmation(this.data.invalidUser.password);
    createAccountPage.submit();
    cy.contains('There is already an account with this email address.');
  });

});
