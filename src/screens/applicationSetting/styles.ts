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
    },
    formContainer: {
      flexGrow: 1,
      paddingBottom: 60,
    },
    row1: {
      flexDirection: 'row',
      marginHorizontal: shape.margin.M,
      marginVertical: shape.margin.L,
    },
    row2: {
      flexDirection: 'row',
      marginHorizontal: shape.margin.M,
      marginBottom: shape.margin.L,
    },
    row3: {
      flexDirection: 'row',
      marginHorizontal: shape.margin.M,
      marginBottom: shape.margin.L,
      alignItems: 'center',
    },
    macId: {
      flexDirection: 'row',
      marginHorizontal: shape.margin.M,
      marginBottom: shape.margin.L,
    },
    payment: {
      marginHorizontal: 16,
      flex: 1,
      marginBottom: shape.margin.L,
    },
    language: { marginHorizontal: 16, flex: 1 },
    theme: { flexDirection: 'row', margin: 16, alignItems: 'center' },
    themeText: {
      color: theme.colors.TEXT,
      fontSize: theme.typography.size.S,
      marginHorizontal: 5,
    },
    colon: {
      fontWeight: '900',
      fontSize: theme.typography.size.S,
    },
    themeSwitch: { marginLeft: 8 },
    switchStyle: {
      marginRight: '6%',
    },
    rowChild: { marginRight: 0, flex: 1 },
    rowFirstChild: { marginRight: 10, flex: 1 },
    serviceUrl: { marginRight: 10, flex: 7 },
    servicePort: { marginLeft: 10, flex: 3 },
  });

export default styles;
