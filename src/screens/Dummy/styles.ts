import { StyleSheet } from 'react-native';
import { ThemeType } from '../../utility/interfaces/themeInterfaces/ThemeInterfaces';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.SUMMARY_VIEW_BACKGROUND,
    },
    color: {
      color: theme.colors.INFO_COLOR,
    },
    imgStyle: {
      zIndex: 1,
      marginTop: '30%',
      marginLeft: '25%',
    },
    datePicker: {
      marginTop: '5%',
    },
    conformButton: {
      marginTop: '5%',
      padding: 20,
    },
  });
export default styles;
