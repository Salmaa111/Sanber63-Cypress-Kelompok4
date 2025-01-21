const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    browser: 'chrome',
    baseUrl: 'https://magento.softwaretestingboard.com/women.html',  // Change to your product page URL
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 4500,
    pageLoadTimeout: 60000,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },
});

