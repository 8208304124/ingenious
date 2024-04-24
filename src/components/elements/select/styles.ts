import { StyleSheet, Platform } from 'react-native';
import { ThemeType } from '../../../utility/interfaces/themeInterfaces/ThemeInterfaces';

const styles = (theme: ThemeType) => {
  const paddingVertical = Platform.OS === 'ios' ? 15 : 13;
  return StyleSheet.create({
    boxStyle: {
      backgroundColor: theme.colors.TEXTINPUT_BACKGROUND,
      padding: paddingVertical,
      borderRadius: theme.shape.borderRadius.S,
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: theme.colors.MODALBG,
    },
    modal: {
      backgroundColor: theme.colors.BACKGROUND,
      borderRadius: theme.shape.borderRadius.S,
      alignSelf: 'center',
    },
    textStyle: {
      // padding: 20,
      // // fontSize: theme.typography.size.S,
      // color: theme.colors.TEXT,
      // borderBottomWidth: theme.shape.borderWidth.M,
      // borderColor: 'gray',
    },
    dropdownItem: {
      padding: 20,
      // fontSize: theme.typography.size.S,
      color: theme.colors.TEXT,
      borderBottomWidth: theme.shape.borderWidth.M,
      borderColor: 'gray',
    },
  });
};

export default styles;
