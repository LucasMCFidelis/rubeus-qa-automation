import sitePage from "../pages/site-page";
import { LINKS } from "../support/constants/links";
import { Tag } from "../support/enums/tag";
import { subscribeFormFactory } from "../support/factories/subscribe-form-factory";

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

  it(
    [Tag.REGRESSION],
    "CT-025 — Validar envio do formulário de newsletter com todos os dados válidos",
    () => {
      sitePage.newsletter.form().should("be.visible");
      sitePage.newsletter.nameInput().type(subscribeFormFactory.valid().name);
      sitePage.newsletter.emailInput().type(subscribeFormFactory.valid().email);
      sitePage.newsletter.phoneInput().type(subscribeFormFactory.valid().phone);
      sitePage.newsletter.submitButton().click();
      sitePage.newsletter.feedbackMessage().should("be.visible");
    },
  );

  it(
    [Tag.REGRESSION],
    "CT-028 — Validar bloqueio do envio do formulário de newsletter quando o campo 'Nome' não é informado",
    () => {
      sitePage.newsletter.emailInput().type(subscribeFormFactory.valid().email);
      sitePage.newsletter.submitButton().should("be.disabled");
    },
  );

  it(
    [Tag.REGRESSION],
    "CT-029 — Validar bloqueio do envio do formulário de newsletter quando o campo 'E-mail' não é informado",
    () => {
      sitePage.newsletter.nameInput().type(subscribeFormFactory.valid().name);
      sitePage.newsletter.submitButton().should("be.disabled");
    },
  );

  it(
    [Tag.REGRESSION],
    "CT-032 — Validar redirecionamento dos links de redes sociais no cabeçalho, card e footer",
    () => {
      // Cabeçalho
      sitePage.validateHrefToElement(
        sitePage.headerLinkedinLink(),
        LINKS.LINKEDIN,
      );
      sitePage.validateHrefToElement(
        sitePage.headerFacebookLink(),
        LINKS.FACEBOOK,
      );
      sitePage.validateHrefToElement(
        sitePage.headerTwitterLink(),
        LINKS.TWITTER,
      );
      sitePage.validateHrefToElement(
        sitePage.headerYoutubeLink(),
        LINKS.YOUTUBE,
      );
      sitePage.validateHrefToElement(
        sitePage.headerInstagramLink(),
        LINKS.INSTAGRAM,
      );

      // Card
      sitePage.validateHrefToElement(
        sitePage.cardLinkedinLink(),
        LINKS.LINKEDIN,
      );
      sitePage.validateHrefToElement(
        sitePage.cardFacebookLink(),
        LINKS.FACEBOOK,
      );
      sitePage.validateHrefToElement(sitePage.cardTwitterLink(), LINKS.TWITTER);
      sitePage.validateHrefToElement(sitePage.cardYoutubeLink(), LINKS.YOUTUBE);
      sitePage.validateHrefToElement(
        sitePage.cardInstagramLink(),
        LINKS.INSTAGRAM,
      );

      // Footer
      sitePage.validateHrefToElement(
        sitePage.footerFacebookLink(),
        LINKS.FACEBOOK,
      );
      sitePage.validateHrefToElement(
        sitePage.footerLinkedinLink(),
        LINKS.LINKEDIN,
      );
      sitePage.validateHrefToElement(
        sitePage.footerYoutubeLink(),
        LINKS.YOUTUBE,
      );
      sitePage.validateHrefToElement(
        sitePage.footerInstagramLink(),
        LINKS.INSTAGRAM,
      );
    },
  );

  it(
    [Tag.REGRESSION],
    "CT-034 — Validar redirecionamento do link 'Política de Privacidade' no footer",
    () => {
      sitePage.validateHrefToElement(
        sitePage.privacyPolicyLink(),
        LINKS.RUBEUS_PRIVACIDADE,
      );
    },
  );
});
