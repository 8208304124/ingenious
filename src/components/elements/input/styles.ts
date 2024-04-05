import { StyleSheet } from 'react-native';
import { ThemeType } from '../../../utility/interfaces/themeInterfaces/ThemeInterfaces';

const styles = (theme: ThemeType) => {
  // const paddingVertical = Platform.OS === 'ios' ? 8 : 8;

  return StyleSheet.create({
    section: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.TEXTINPUT_BACKGROUND,
      borderRadius: theme.shape.borderRadius.S,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderWidth: 1,
    },
    icon: {
      paddingRight: 0,
      marginRight: 8,
    },
    input: {
      backgroundColor: theme.colors.TEXTINPUT_BACKGROUND,
      color: theme.colors.TEXT,
      fontSize: theme.typography.size.S,
      flex: 1,
      paddingVertical: 5,
    },
    iconButton: {
      paddingLeft: 15,
      opacity: 0.5,
    },
  });
};

export default styles;
