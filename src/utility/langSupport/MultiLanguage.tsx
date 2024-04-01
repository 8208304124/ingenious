import React, { useState, useEffect, createContext, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { getLanguage, storeLanguage } from '../localStorage/localStorage';
import i18n from './i18n/i18n';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LangContext = createContext<any>(null);

interface Props {
  children: ReactNode;
}

const MultiLanguage: React.FC<Props> = ({ children }) => {
  const [currentLanguage, setLanguage] = useState<string>('en');
  const { t } = useTranslation();

  useEffect(() => {
    getLanguage().then((language) => {
      if (language) {
        setLanguage(language);
      }
    });
    setLanguageAsync();
  }, []);

  const setLanguageAsync = async () => {
    const language_ = await getLanguage();
    if (language_) changeLanguage(language_);
  };

  const changeLanguage = (value: string) => {
    storeLanguage(value);
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  };

  const language = {
    changeLanguage,
    currentLanguage,
    setLanguage,
    t,
  };

  return <LangContext.Provider value={language}>{children}</LangContext.Provider>;
};

export default MultiLanguage;
