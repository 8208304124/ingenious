import { StyleSheet, Platform } from 'react-native';
import { ThemeType } from '../../../utility/interfaces/themeInterfaces/ThemeInterfaces';

export const styles = (theme: ThemeType) => {
  const paddingVertical = Platform.OS === 'ios' ? 16 : 13;
  return StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: paddingVertical,
      borderRadius: theme.shape.borderRadius.XL,
      elevation: 1,
      backgroundColor: theme.colors.BUTTON,
    },
    outline: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: paddingVertical - 1,
      borderRadius: theme.shape.borderRadius.XL,
      elevation: 0,
      borderWidth: 1,
      borderColor: '#797C8B4D',
      backgroundColor: theme.colors.OUTLINE, //'#F9F9F9',
    },
    textButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: paddingVertical,
    },
    text: {
      fontSize: theme.typography.size.SR,
      color: 'white',
      textTransform: 'uppercase',
    },
    outlineText: {
      color: theme.colors.TEXT,
      textTransform: 'uppercase',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      // paddingHorizontal: 10,
    },
  });
};
