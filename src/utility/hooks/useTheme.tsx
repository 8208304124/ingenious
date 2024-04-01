import { useContext } from 'react';
import { ThemeContext, ThemeContextType } from '../../theme/themeProvider/ThemeProvider';

const useTheme = (): ThemeContextType => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return themeContext;
};

export default useTheme;
