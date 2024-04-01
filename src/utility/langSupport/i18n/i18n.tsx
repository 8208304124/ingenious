import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import ch from './ch.json';
import bh from './bh.json';
import th from './th.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: en,
    ch: ch,
    bh: bh,
    th: th,
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
