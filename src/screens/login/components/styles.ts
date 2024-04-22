import { Platform, StyleSheet } from 'react-native';
import { ThemeType } from '../../../utility/interfaces/themeInterfaces/ThemeInterfaces';

const styles = (theme: ThemeType) => {
  const paddingVertical = Platform.OS === 'ios' ? 15 : 10;

  return StyleSheet.create({
    inputContainer: {
      backgroundColor: theme.colors.TEXTINPUT_BACKGROUND,
      borderRadius: theme.shape.borderRadius.S,
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 10,
      borderWidth: 1,
    },
    icon: {
      paddingRight: 0,
      marginRight: 8,
    },
    inputField: {
      backgroundColor: theme.colors.TEXTINPUT_BACKGROUND,
      color: theme.colors.TEXT,
      paddingVertical: paddingVertical,
      fontSize: theme.typography.size.S,
      flex: 1,
    },
  });
};

export default styles;
