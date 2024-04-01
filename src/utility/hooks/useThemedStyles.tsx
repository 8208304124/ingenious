import useTheme from './useTheme';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useThemedStyles = (styles: any) => {
  const theme = useTheme();
  return styles(theme);
};

export default useThemedStyles;
