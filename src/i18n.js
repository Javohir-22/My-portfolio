import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en.json';
import translationRU from './locales/ru.json';
import translationUZ from './locales/uz.json';

const resources = {
  
  En: {
    translation: translationEN
  },
  Ru: {
    translation: translationRU
  },
  Uz: {
    translation: translationUZ
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: localStorage.getItem("lang") === "Uz" ? 'Uz' : localStorage.getItem("lang") === "Ru" ? "Ru" : "En",
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
