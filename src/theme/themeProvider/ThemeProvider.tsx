import React, { useEffect, useState, createContext, ReactNode } from 'react';
import { colors } from '../colors';
import { typography, typographyType } from '../typography';
import { shape, shapeType } from '../shape';
import { getTheme, storeTheme } from '../../utility/localStorage/localStorage';
import { colorsType } from '../../utility/interfaces/themeInterfaces/ThemeInterfaces';

export interface ThemeContextType {
  colors: colorsType;
  typography: typographyType;
  toggleTheme: () => void;
  isLightTheme: boolean;
  shape: shapeType;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isLightTheme, setLightTheme] = useState<boolean>(false);

  const toggleTheme = (): void => {
    storeTheme(isLightTheme ? 'dark' : 'light');
    setLightTheme((previousState: boolean) => !previousState);
  };

  useEffect(() => {
    setThemeFromLocal();
  }, []);

  const setThemeFromLocal = async (): Promise<void> => {
    const theme = await getTheme();
    if (theme && theme === 'light') {
      setLightTheme(true);
    } else {
      setLightTheme(false);
    }
  };
  const theme: ThemeContextType = {
    colors: isLightTheme ? colors.light : colors.dark,
    typography: typography,
    toggleTheme: toggleTheme,
    isLightTheme: isLightTheme,
    shape: shape,
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
