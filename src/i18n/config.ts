import en from "@/i18n/en/en.json";
import tr from "@/i18n/tr/tr.json";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  debug: true,
  fallbackLng: localStorage.getItem("lang") ?? "en",
  resources: {
    en: { translation: en },
    tr: { translation: tr },
  },
});

export default i18next;
