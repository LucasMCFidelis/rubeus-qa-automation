import { CERTIFICACAO_PAGE_SELECTORS } from "../../support/selectors/certificacao-page-selectors";
import { SubscribeFormDataFirstStep } from "../../support/types/subscribe-form-data";

export class SubscribeFormFirstStep {
  public form() {
    return cy.get(CERTIFICACAO_PAGE_SELECTORS.subscribeFormFirstStep);
  }

  public nameInput() {
    return cy.get(CERTIFICACAO_PAGE_SELECTORS.subscribeName);
  }

  public emailInput() {
    return cy.get(CERTIFICACAO_PAGE_SELECTORS.subscribeEmail);
  }

  public phoneNumberInput() {
    return cy.get(CERTIFICACAO_PAGE_SELECTORS.subscribePhoneNumber);
  }

  public submitButton() {
    return cy.get(CERTIFICACAO_PAGE_SELECTORS.subscribeSubmitButton);
  }

  public validationMessage() {
    return cy.get(CERTIFICACAO_PAGE_SELECTORS.validationMessage);
  }

  public fill({ name, email, phone }: SubscribeFormDataFirstStep) {
    this.nameInput().type(name);
    this.emailInput().type(email);
    this.phoneNumberInput().type(phone);
  }

  public submit(formData: SubscribeFormDataFirstStep) {
    this.fill(formData);
    this.submitButton().click();
  }
}
