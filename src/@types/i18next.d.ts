import "react-i18next";
import resources from "./resources";

declare module "i18next" {
  // interface Resources extends LocalizationKeys {}
  interface CustomTypeOptions {
    defaultNS: "en";
    resources: typeof resources;
  }
}
