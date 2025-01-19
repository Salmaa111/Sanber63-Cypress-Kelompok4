const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl : 'https://magento.softwaretestingboard.com/',
    profileUrl : 'https://magento.softwaretestingboard.com/customer/account/',
  },
});
