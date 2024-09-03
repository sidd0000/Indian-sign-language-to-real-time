// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Define your translations
const resources = {
  en: {
    translation: {
      "welcome": "Welcome to our website",
      "about": "About",
      "contact": "Contact",
      "helpdesk": "Helpdesk",
      // Add more translations here
    }
  },
  hi: {
    translation: {
      "welcome": "हमारी वेबसाइट पर आपका स्वागत है",
      "about": "के बारे में",
      "contact": "संपर्क करें",
      "helpdesk": "सहायता डेस्क",
      // Add more translations here
    }
  },
  // Add more languages here
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
