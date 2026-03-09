import { CERTIFICACAO_PAGE_SELECTORS } from "../../support/selectors/certificacao-page-selectors";

export class SubscribeFormSecondStep {
  public subscribeFormSecondStep() {
    return cy.get(CERTIFICACAO_PAGE_SELECTORS.subscribeFormSecondStep);
  }
}
