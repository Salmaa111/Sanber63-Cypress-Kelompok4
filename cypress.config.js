const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/men/tops-men/tees-men.html/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    viewportHeight: 660,
    viewportWidth: 1000,
    defaultCommandTimeout: 5000,
    defaultBrowser: 'chrome',
  },
  
});
