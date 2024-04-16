import { StyleSheet } from 'react-native';
import { ThemeType } from '../../../utility/interfaces/themeInterfaces/ThemeInterfaces';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    Menu2Text: {
      fontSize: theme.typography.size.SR,
      fontWeight: 'bold',
    },
  });
export default styles;
