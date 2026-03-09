import { LINKS } from "../support/constants/links";
import { SITE_PAGE_SELECTORS } from "../support/selectors/site-page-selectors";

import { BasePage } from "./base-page";
import { NewsletterForm } from "./components/newsletter-form";

class SitePage extends BasePage {
  public visit() {
    cy.visit(SITE_PAGE_SELECTORS.path);
  }

  public validatePage() {
    this.validateUrl(LINKS.SITE);
    this.header().should("be.visible");
  }

  public newsletter = new NewsletterForm();

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

  public headerLinkedinLink() {
    return cy.get(SITE_PAGE_SELECTORS.headerLinkedinLink);
  }
  public headerFacebookLink() {
    return cy.get(SITE_PAGE_SELECTORS.headerFacebookLink);
  }
  public headerTwitterLink() {
    return cy.get(SITE_PAGE_SELECTORS.headerTwitterLink);
  }
  public headerYoutubeLink() {
    return cy.get(SITE_PAGE_SELECTORS.headerYoutubeLink);
  }
  public headerInstagramLink() {
    return cy.get(SITE_PAGE_SELECTORS.headerInstagramLink);
  }

  public cardLinkedinLink() {
    return cy.get(SITE_PAGE_SELECTORS.cardLinkedinLink);
  }
  public cardFacebookLink() {
    return cy.get(SITE_PAGE_SELECTORS.cardFacebookLink);
  }
  public cardTwitterLink() {
    return cy.get(SITE_PAGE_SELECTORS.cardTwitterLink);
  }
  public cardYoutubeLink() {
    return cy.get(SITE_PAGE_SELECTORS.cardYoutubeLink);
  }
  public cardInstagramLink() {
    return cy.get(SITE_PAGE_SELECTORS.cardInstagramLink);
  }

  public footerFacebookLink() {
    return cy.get(SITE_PAGE_SELECTORS.footerFacebookLink);
  }
  public footerLinkedinLink() {
    return cy.get(SITE_PAGE_SELECTORS.footerLinkedinLink);
  }
  public footerYoutubeLink() {
    return cy.get(SITE_PAGE_SELECTORS.footerYoutubeLink);
  }
  public footerInstagramLink() {
    return cy.get(SITE_PAGE_SELECTORS.footerInstagramLink);
  }

  // Footer
  public privacyPolicyLink() {
    return cy.get(SITE_PAGE_SELECTORS.privacyPolicyLink);
  }
}

export default new SitePage();
