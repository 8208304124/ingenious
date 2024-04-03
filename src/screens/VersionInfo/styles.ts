import { StyleSheet } from 'react-native';
import { ThemeType } from '../../utility/interfaces/themeInterfaces/ThemeInterfaces';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    header: {
      alignSelf: 'center',
      paddingVertical: 10,
      fontSize: 20,
      color: theme.colors.TEXT_COLOR,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center', 
      marginVertical: 10,
    },
    label: {
      paddingLeft: 15,
      width: 120,
      color: theme.colors.TEXT_COLOR,
      fontSize: 20,
    },
    input: {
      marginLeft: 25,
      height: 50,
      width: 250,
      fontSize: 18,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      color: theme.colors.TEXT_COLOR,
    },
  });
export default styles;
