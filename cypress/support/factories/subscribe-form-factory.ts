import { SubscribeFormDataFirstStep } from "../types/subscribe-form-data";

export const subscribeFormFactory = {
  valid(): SubscribeFormDataFirstStep {
    return {
      name: "Lucas Fidelis",
      email: "lucas@email.com",
      phone: "83999999999",
    };
  },

  withInvalidEmail(): SubscribeFormDataFirstStep {
    return {
      name: "Lucas Fidelis",
      email: "emailsemarroba",
      phone: "83999999999",
    };
  },

  withInvalidPhone(): SubscribeFormDataFirstStep {
    return {
      name: "Lucas Fidelis",
      email: "lucas@email.com",
      phone: "123",
    };
  },
};
