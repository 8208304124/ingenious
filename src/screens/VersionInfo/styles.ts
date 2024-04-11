import { StyleSheet } from 'react-native';
import { ThemeType } from '../../utility/interfaces/themeInterfaces/ThemeInterfaces';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    header: {
      alignSelf: 'center',
      paddingVertical: 10,
      fontSize: theme.typography.size.M,
      color: theme.colors.TEXT,
      marginTop: '10%',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '15%',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    label: {
      width: 120,
      color: theme.colors.TEXT,
      fontSize: 15,
      marginLeft: 20,
    },
    input: {
      // marginLeft: 10, // Adjusted marginLeft
      // marginRight: 20, // You can adjust marginRight if needed
      height: 50,
      width: 280,
      fontSize: 13,
      borderColor: 'gray',
      // borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      color: theme.colors.TEXT,
    },
  });

export default styles;
