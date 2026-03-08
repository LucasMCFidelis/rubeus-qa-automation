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

  public libraryLink() {
    return cy.get(SITE_PAGE_SELECTORS.libraryLink);
  }

  public carouselNextButton() {
    return cy.get(SITE_PAGE_SELECTORS.carouselNext);
  }

  public carouselPrevButton() {
    return cy.get(SITE_PAGE_SELECTORS.carouselPrev);
  }

  public carouselDots() {
    return cy.get(SITE_PAGE_SELECTORS.carouselDots);
  }

  public carouselDotActive() {
    return this.carouselDots().find(SITE_PAGE_SELECTORS.carouselDotActive);
  }

  public carouselCurrentSlide() {
    return cy.get(SITE_PAGE_SELECTORS.carouselCurrentSlide);
  }

  public getSlideSrcs(): Array<string> {
    const slideSrcs: Array<string> = [];
    cy.get(".mySlides img").each((img) => {
      slideSrcs.push(img.attr("src")!);
    });
    return slideSrcs;
  }
}

export default new SitePage();
