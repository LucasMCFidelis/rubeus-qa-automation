import sitePage from "../pages/site-page";
import { LINKS } from "../support/constants/links";
import { Tag } from "../support/enums/tag";

describe("Página Site", () => {
  beforeEach(() => {
    sitePage.visit();
  });

  it([Tag.SMOKE], "Validar acesso a página 'Site'", () => {
    sitePage.validatePage();
  });

  it(
    [Tag.REGRESSION],
    "CT-021 — Validar acesso à página 'Biblioteca' no cabeçalho",
    () => {
      sitePage.validateHrefToElement(
        sitePage.libraryLink(),
        LINKS.ZENDESK_BIBLIOTECA,
      );
    },
  );

  it(
    [Tag.REGRESSION],
    "CT-022 — Validar navegação entre banners pelos controles de carrossel",
    () => {
      const slideSrcs = sitePage.getSlideSrcs();

      cy.wrap(slideSrcs).then((srcs) => {
        // 1. Verificar o banner exibido inicialmente
        sitePage
          .carouselCurrentSlide()
          .find("img")
          .invoke("attr", "src")
          .should("equal", srcs[0]);

        // 2. Clicar na seta '❯' (próximo)
        sitePage.carouselNextButton().click();

        // 3. Verificar se o banner seguinte é exibido (src diferente do inicial)
        sitePage
          .carouselCurrentSlide()
          .find("img")
          .invoke("attr", "src")
          .should("not.equal", srcs[0]);

        // 4. Clicar na seta '❮' (anterior)
        sitePage.carouselPrevButton().click();

        // 5. Verificar se o banner anterior é exibido (src igual ao inicial)
        sitePage
          .carouselCurrentSlide()
          .find("img")
          .invoke("attr", "src")
          .should("equal", srcs[0]);

        // 6. Clicar em cada dot e verificar se o banner correspondente é exibido
        sitePage
          .carouselDots()
          .find(".dot")
          .each((dot, index) => {
            cy.wrap(dot).click();
            cy.wrap(dot).should("have.class", "active");
            sitePage
              .carouselCurrentSlide()
              .find("img")
              .invoke("attr", "src")
              .should("equal", srcs[index]);
          });
      });
    },
  );
});
