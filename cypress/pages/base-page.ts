export abstract class BasePage {
  public abstract visit(): void;

  public abstract validatePage(): void;

  public validateUrl(path: string) {
    cy.url().should("include", path);
  }

  public validateHrefToElement(
    element: Cypress.Chainable<JQuery<HTMLElement>>,
    expectedHref: string,
  ) {
    element.should("be.visible").should("have.attr", "href", expectedHref);
  }
}
