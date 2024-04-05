import { StyleSheet } from 'react-native';
import { ThemeType } from '../../utility/interfaces/themeInterfaces/ThemeInterfaces';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileImage: {
      marginBottom: 20,
      width: 100,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderRadius: 50,
      borderColor: '#ccc',
      color: theme.colors.TEXT_COLOR,
    },
    profileIcon: {
      color: theme.colors.TEXT_COLOR,
      fontSize: 50,
    },
    input: {
      width: '80%',
      height: 40,
      // borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
      color: theme.colors.TEXT_COLOR,
    },
    button: {
      backgroundColor: 'blue',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
export default styles;
