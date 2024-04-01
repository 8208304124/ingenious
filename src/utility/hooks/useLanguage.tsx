import { useContext } from 'react';
import { LangContext } from '../langSupport/MultiLanguage';

const useLanguage = () => {
  return useContext(LangContext);
};

export default useLanguage;
