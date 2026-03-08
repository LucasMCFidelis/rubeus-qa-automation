import { defineConfig } from "cypress";
import { tagify } from "cypress-tags";

export default defineConfig({
  e2e: {
    baseUrl: "https://qualidade.apprbs.com.br",
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/e2e/**/*.cy.ts",
    setupNodeEvents(on, config) {
      on("file:preprocessor", tagify(config));
    },
  },
});
