const { defineConfig } = require("cypress");
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // Existing tasks...
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });
      // Add Cucumber preprocessor plugin
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      // Add image snapshot plugin
      addMatchImageSnapshotPlugin(on, config);
      return config;
    },
    specPattern: "cypress/e2e/**/*.feature", // Use .feature files for Cucumber
  },
});

