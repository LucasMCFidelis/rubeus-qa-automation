import { CERTIFICACAO_PAGE_SELECTORS } from "../support/selectors/certificacao-page-selectors";

class CertificacaoPage {
  public visit() {
    cy.visit(CERTIFICACAO_PAGE_SELECTORS.path);
  }
}

export default new CertificacaoPage();
