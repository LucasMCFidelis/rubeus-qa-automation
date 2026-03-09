import certificacaoPage from "../pages/certificacao-page";
import { LINKS } from "../support/constants/links";
import { Tag } from "../support/enums/tag";
import { subscribeFormFactory } from "../support/factories/subscribe-form-factory";

describe("Página Certificação", () => {
  beforeEach(() => {
    certificacaoPage.visit();
  });

  it([Tag.SMOKE], "Validar acesso a página 'Certificação'", () => {
    certificacaoPage.validatePage();
  });

  it(
    [Tag.REGRESSION],
    "CT-002 — Validar envio da primeira etapa do formulário de inscrição com todos os dados válidos",
    () => {
      certificacaoPage.firstStep.submit(subscribeFormFactory.valid());
      certificacaoPage.secondStep
        .subscribeFormSecondStep()
        .should("be.visible");
    },
  );

  it(
    [Tag.REGRESSION],
    "CT-003 — Validar bloqueio do envio da primeira etapa do formulário de inscrição quando o e-mail não é informado",
    () => {
      certificacaoPage.firstStep
        .nameInput()
        .type(subscribeFormFactory.valid().name);
      certificacaoPage.firstStep
        .phoneNumberInput()
        .type(subscribeFormFactory.valid().phone);
      certificacaoPage.firstStep.submitButton().should("be.disabled");
    },
  );

  it(
    [Tag.REGRESSION],
    "CT-004 — Validar bloqueio do envio da primeira etapa do formulário de inscrição com e-mail em formato inválido",
    () => {
      certificacaoPage.firstStep.fill(subscribeFormFactory.withInvalidEmail());
      certificacaoPage.firstStep.submitButton().should("be.disabled");
      certificacaoPage.validationMessage().should("be.visible");
    },
  );

  it(
    [Tag.REGRESSION],
    "CT-005 — Validar bloqueio do envio da primeira etapa do formulário de inscrição com telefone em formato inválido",
    () => {
      certificacaoPage.firstStep.fill(subscribeFormFactory.withInvalidPhone());
      certificacaoPage.firstStep.submitButton().should("be.disabled");
      certificacaoPage.validationMessage().should("be.visible");
    },
  );

  it(
    [Tag.REGRESSION],
    "CT-007 — Validar redirecionamento dos botões 'Saiba mais' da seção 'Outros Cursos'",
    () => {
      certificacaoPage.otherCoursesLearnMoreButtons().each((button) => {
        cy.wrap(button)
          .should("be.visible")
          .invoke("attr", "href")
          .should("not.be.empty");
      });
    },
  );

  it(
    [Tag.SMOKE],
    "CT-008 — Validar redirecionamento dos botões de acesso às redes sociais da Rubeus",
    () => {
      certificacaoPage.validateHrefToElement(
        certificacaoPage.facebookLink(),
        LINKS.FACEBOOK,
      );
      certificacaoPage.validateHrefToElement(
        certificacaoPage.instagramLink(),
        LINKS.INSTAGRAM,
      );
      certificacaoPage.validateHrefToElement(
        certificacaoPage.linkedinLink(),
        LINKS.LINKEDIN,
      );
      certificacaoPage.validateHrefToElement(
        certificacaoPage.youtubeLink(),
        LINKS.YOUTUBE,
      );
    },
  );
});
