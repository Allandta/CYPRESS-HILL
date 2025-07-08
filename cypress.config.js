const { defineConfig } = require("cypress");
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Existing tasks...
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });
      // Add this line:
      addMatchImageSnapshotPlugin(on, config);
      return config;
    },
  },
});

