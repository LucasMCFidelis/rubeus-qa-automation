import { LINKS } from "../support/constants/links";
import { CERTIFICACAO_PAGE_SELECTORS } from "../support/selectors/certificacao-page-selectors";

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
}

export default new CertificacaoPage();
