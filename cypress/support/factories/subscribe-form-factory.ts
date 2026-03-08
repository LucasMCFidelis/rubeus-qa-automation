import { SubscribeFormData } from "../types/subscribe-form-data";

export const subscribeFormFactory = {
  valid(): SubscribeFormData {
    return {
      name: "Lucas Fidelis",
      email: "lucas@email.com",
      phone: "83999999999",
    };
  },

  withInvalidEmail(): SubscribeFormData {
    return {
      name: "Lucas Fidelis",
      email: "emailsemarroba",
      phone: "83999999999",
    };
  },

  withInvalidPhone(): SubscribeFormData {
    return {
      name: "Lucas Fidelis",
      email: "lucas@email.com",
      phone: "123",
    };
  },
};
