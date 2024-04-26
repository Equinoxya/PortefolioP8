import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from './en/translation.json'
import translationFR from './fr/translation.json'

const ressource = {
    en: {
        translation : translationEN
    },
    fr: {
        translation : translationFR
    }
};
i18next
    .use(initReactI18next)
    .init({
        ressource,
        lng: "fr",
        fallbackLng: "fr",
    }
);

export default i18next