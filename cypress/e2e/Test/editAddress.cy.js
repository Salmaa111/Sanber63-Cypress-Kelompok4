import addressPage from '../Pages/addressPage';
import addressData from '../../fixtures/addressData.json';
import loginPage from '../pages/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Tes Edit Alamat Magento', () => {
  beforeEach(() => {

    const email = loginData.validEmail; 
    const password = loginData.validPassword; 

    loginPage.visit(); 
    loginPage.fillForm(email, password); 
    loginPage.submitForm(); 

    addressPage.visit(); 
  });

  it('Edit alamat dengan data kosong', () => {
    cy.navigateToAddressBook();
    addressPage.editAddress1(addressData.invalidAddress);
  });

  it('Edit alamat sukses dengan data valid', () => {
    addressPage.editAddress(addressData.validAddress); 
    addressPage.saveAddress(); 
  });

    cy.contains('You saved the address.').should('be.visible');
});