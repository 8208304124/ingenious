import { StyleSheet } from 'react-native';
import { ThemeType } from '../../utility/interfaces/themeInterfaces/ThemeInterfaces';
import { shape } from '../../theme/shape';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    body: {
      flex: 1,
      marginTop: '45%',
    },
    formContainer: {
      flexGrow: 1,
      paddingBottom: 60,
    },
    commonStyle: {
      flexDirection: 'row',
      marginHorizontal: shape.margin.M,
      marginBottom: shape.margin.L,
      marginTop: '5%',
    },
    language: { marginHorizontal: 16, flex: 1, marginTop: '5%' },
    theme: { flexDirection: 'row', margin: 16, alignItems: 'center', marginTop: '8%' },
    themeText: {
      color: theme.colors.TEXT,
      fontSize: theme.typography.size.S,
      marginHorizontal: 5,
    },
    themeSwitch: { marginLeft: 8 },
    switchStyle: {
      marginRight: '6%',
    },
  });

export default styles;
