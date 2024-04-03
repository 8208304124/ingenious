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
        fontSize: 50,
        color: theme.colors.TEXT_COLOR,
      },
      name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: theme.colors.TEXT_COLOR,
      },
      email: {
        fontSize: 18,
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
