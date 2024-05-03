import { StyleSheet } from 'react-native';
import { ThemeType } from '../../../utility/interfaces/themeInterfaces/ThemeInterfaces';

const styles = (theme: ThemeType) => {
  return StyleSheet.create({
    textStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: 20,
      marginLeft: '35%',
      color: theme.colors.TEXT_COLOR,
    },
  });
};

export default styles;
