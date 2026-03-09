import { LINKS } from "../support/constants/links";
import { CERTIFICACAO_PAGE_SELECTORS } from "../support/selectors/certificacao-page-selectors";
import { SubscribeFormData } from "../support/types/subscribe-form-data";

import { BasePage } from "./base-page";

class CertificacaoPage extends BasePage {
  public visit() {
    cy.visit(CERTIFICACAO_PAGE_SELECTORS.path);
  }

  public validatePage() {
    this.validateUrl(LINKS.CERTIFICACAO);
    this.homeCard().should("be.visible");
  }

  public homeCard() {
    return cy.get(CERTIFICACAO_PAGE_SELECTORS.homeCard);
  }

  public subscribeFormFirstStep() {
    return cy.get(CERTIFICACAO_PAGE_SELECTORS.subscribeFormFirstStep);
  }

  public subscribeNameInput() {
    return cy.get(CERTIFICACAO_PAGE_SELECTORS.subscribeName);
  }

  public subscribeEmailInput() {
    return cy.get(CERTIFICACAO_PAGE_SELECTORS.subscribeEmail);
  }

  public subscribePhoneCountryButton() {
    return cy.get(CERTIFICACAO_PAGE_SELECTORS.subscribePhoneCountry);
  }

  public subscribePhoneNumberInput() {
    return cy.get(CERTIFICACAO_PAGE_SELECTORS.subscribePhoneNumber);
  }

  public subscribeSubmitButton() {
    return cy.get(CERTIFICACAO_PAGE_SELECTORS.subscribeSubmitButton);
  }

  public validationMessage() {
    return cy.get(CERTIFICACAO_PAGE_SELECTORS.validationMessage);
  }

  public fillSubscribeFormFirstStep({ name, email, phone }: SubscribeFormData) {
    this.subscribeNameInput().type(name);
    this.subscribeEmailInput().type(email);
    this.subscribePhoneNumberInput().type(phone);
  }

  public submitSubscribeFirstStep(formData: SubscribeFormData) {
    this.fillSubscribeFormFirstStep(formData);
    this.subscribeSubmitButton().click();
  }

  public subscribeFormSecondStep() {
    return cy.get(CERTIFICACAO_PAGE_SELECTORS.subscribeFormSecondStep);
  }

  public otherCoursesLearnMoreButtons() {
    return cy.get(CERTIFICACAO_PAGE_SELECTORS.otherCoursesLearnMoreButtons);
  }

  public facebookLink() {
    return cy.get(CERTIFICACAO_PAGE_SELECTORS.facebookLink);
  }

  public instagramLink() {
    return cy.get(CERTIFICACAO_PAGE_SELECTORS.instagramLink);
  }

  public linkedinLink() {
    return cy.get(CERTIFICACAO_PAGE_SELECTORS.linkedinLink);
  }

  public youtubeLink() {
    return cy.get(CERTIFICACAO_PAGE_SELECTORS.youtubeLink);
  }
}

export default new CertificacaoPage();
