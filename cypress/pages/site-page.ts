import { SITE_PAGE_SELECTORS } from "../support/selectors/site-page-selectors";

class SitePage {
  public visit() {
    cy.visit(SITE_PAGE_SELECTORS.path);
  }
}

export default new SitePage();
