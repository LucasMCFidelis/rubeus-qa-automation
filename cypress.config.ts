import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://qualidade.apprbs.com.br",
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/e2e/**/*.cy.ts",
  },
});
