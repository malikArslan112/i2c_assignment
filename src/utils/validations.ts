import { companyNameRegex, emailRegex, nameRegex } from "./GlobalContants";

type ValidationRule = {
  regex: RegExp;
  errorMessage: string;
  isRequired?: boolean;
};

export const formValidationRules: Record<string, ValidationRule> = {
  Name: {
    regex: nameRegex,
    errorMessage: "Please enter a valid name",
    isRequired: true,
  },
  Email: {
    regex: emailRegex,
    errorMessage: "Please enter a valid email address",
    isRequired: true,
  },
  companyName: {
    regex: companyNameRegex,
    errorMessage: "Please enter a valid company name",
    isRequired: false,
  },
};
