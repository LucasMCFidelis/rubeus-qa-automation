import { LINKS } from "../support/constants/links";
import { CERTIFICACAO_PAGE_SELECTORS } from "../support/selectors/certificacao-page-selectors";

import { BasePage } from "./base-page";
import { SubscribeFormFirstStep } from "./components/subscribe-form-first-step";
import { SubscribeFormSecondStep } from "./components/subscribe-form-second-step";

class CertificacaoPage extends BasePage {
  public visit() {
    cy.visit(CERTIFICACAO_PAGE_SELECTORS.path);
  }

  public firstStep = new SubscribeFormFirstStep();
  public secondStep = new SubscribeFormSecondStep();

  public validatePage() {
    this.validateUrl(LINKS.CERTIFICACAO);
    this.homeCard().should("be.visible");
  }

  public homeCard() {
    return cy.get(CERTIFICACAO_PAGE_SELECTORS.homeCard);
  }

  public validationMessage() {
    return cy.get(CERTIFICACAO_PAGE_SELECTORS.validationMessage);
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
