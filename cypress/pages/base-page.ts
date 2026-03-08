export abstract class BasePage {
  public abstract visit(): void;

  public abstract validatePage(): void;

  public validateUrl(path: string) {
    cy.url().should("include", path);
  }
}
