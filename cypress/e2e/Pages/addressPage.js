class AddressPage {
    visit() {
      cy.visit('/customer/address/'); // Pergi ke halaman buku alamat
    }
  
    editAddress(addressData) {
      //cy.get('button[title="Edit Address"]').first().click(); // Klik tombol edit
      cy.get('#firstname').clear().type(addressData.firstName); // Isi nama depan
      cy.get('#lastname').clear().type(addressData.lastName); // Isi nama belakang
      cy.get('#telephone').clear().type(addressData.phone); // Isi telepon
      cy.get('#street_1').clear().type(addressData.street); // Isi alamat
      cy.get('#city').clear().type(addressData.city); // Isi kota
      cy.get('#zip').clear().type(addressData.zip); // Isi kode pos
      cy.get('#country').select(addressData.country); // Pilih negara
    }
  
    editAddress1(addressData) {
      cy.get('#firstname').clear(); // Tidak perlu .type("")
      cy.get('#lastname').clear();
      cy.get('#telephone').clear();
      cy.get('#street_1').clear();
      cy.get('#city').clear();
      cy.get('#zip').clear();
      cy.get('#country').select(addressData.country);
    }
    
    saveAddress() {
      cy.get('button[title="Save Address"]').click(); // Klik tombol simpan
    }
  }
  
  export default new AddressPage();