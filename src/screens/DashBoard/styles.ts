import { StyleSheet } from 'react-native';
import { ThemeType } from '../../utility/interfaces/themeInterfaces/ThemeInterfaces';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    DashBoardText: {
      fontSize: theme.typography.size.SR,
      fontWeight: 'bold',
    },
    carousel: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
export default styles;
