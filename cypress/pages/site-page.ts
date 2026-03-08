import { LINKS } from "../support/constants/links";
import { SITE_PAGE_SELECTORS } from "../support/selectors/site-page-selectors";

import { BasePage } from "./base-page";

class SitePage extends BasePage {
  public visit() {
    cy.visit(SITE_PAGE_SELECTORS.path);
  }

  public validatePage() {
    this.validateUrl(LINKS.SITE);
    this.header().should("be.visible");
  }

  public header() {
    return cy.get(SITE_PAGE_SELECTORS.header);
  }
}

export default new SitePage();
