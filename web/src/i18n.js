import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import fr from './locales/fr.json'
import ko from './locales/ko.json'

// This is a simple i18n configuration with English and French translations.
// You can find the translations in web/src/locales/{language}.json
// see: https://react.i18next.com
// Here's an example of how to use it in your components, pages or layouts:
/*
import { Link, routes } from '@redwoodjs/router'
import { useTranslation } from 'react-i18next'

const HomePage = () => {

}

export default HomePage
*/

i18n
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false }, // React already does escaping
    fallbackLng: 'en',
    resources: {
      en: {
        translation: en,
      },
      fr: {
        translation: fr,
      },
      ko: {
        translation: ko,
      },
    },
  })
export default i18n
