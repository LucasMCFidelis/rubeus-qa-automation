import { SITE_PAGE_SELECTORS } from "../../support/selectors/site-page-selectors";

export class NewsletterForm {
  public form() {
    return cy.get(SITE_PAGE_SELECTORS.newsletterForm);
  }
  public nameInput() {
    return cy.get(SITE_PAGE_SELECTORS.newsletterNameInput);
  }
  public emailInput() {
    return cy.get(SITE_PAGE_SELECTORS.newsletterEmailInput);
  }
  public phoneInput() {
    return cy.get(SITE_PAGE_SELECTORS.newsletterPhoneInput);
  }
  public submitButton() {
    return cy.get(SITE_PAGE_SELECTORS.newsletterSubmitButton);
  }
  public feedbackMessage() {
    return cy.get(SITE_PAGE_SELECTORS.newsletterFeedbackMessage);
  }
  public validationMessage() {
    return cy.get(SITE_PAGE_SELECTORS.newsletterValidationMessage);
  }
}
