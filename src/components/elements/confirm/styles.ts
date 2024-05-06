import { Dimensions, StyleSheet } from 'react-native';
import { ThemeType } from '../../../utility/interfaces/themeInterfaces/ThemeInterfaces';

const { width } = Dimensions.get('screen');

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    modalContainer: {
      flex: 1,
      backgroundColor: theme.colors.MODALBG,
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentContainer: {
      backgroundColor: theme.colors.BACKGROUND,
      borderRadius: 20,
      maxWidth: width - 100,
      padding: 20,
    },
    editText: {
      color: theme.colors.TEXT,
      fontSize: theme.typography.size.S,
      margin: 10,
      marginBottom: 20,
      alignSelf: 'center',
      textAlign: 'center', //removed textAlignVertical
    },
    title: { fontWeight: 'bold', fontSize: 17, marginBottom: 12 },
    editButtons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderTopWidth: theme.shape.borderWidth.M,
      borderColor: theme.colors.BORDER,
      marginBottom: -20,
      marginHorizontal: -20,
    },
    button1: {
      flex: 1,
      borderRightWidth: theme.shape.borderWidth.M,
      borderColor: theme.colors.BORDER,
    },
    button2: {
      flex: 1,
    },
  });

export default styles;
