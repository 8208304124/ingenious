import { StyleSheet } from 'react-native';
import { ThemeType } from '../../utility/interfaces/themeInterfaces/ThemeInterfaces';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.BACKGROUND,
    },
    DropDown: {
      width: 145,
      height: 28,
      marginTop: '8%',
      marginLeft: '8%',
      backgroundColor: theme.colors.APP_FOOTER_BG,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 5,
      color: theme.colors.TEXT,
    },
    LoginContainer: {
      zIndex: -1,
      marginTop: '20%',
    },
    LoginTextContainer: {
      marginTop: '20%',
    },
    loginText: { fontWeight: '600', textAlign: 'center' },
    input: {
      marginTop: '6%',
      flexDirection: 'row',
      paddingHorizontal: '9%',
    },
    VersionInfoContainer: {
      marginTop: '5%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    VersionInfoText: {
      paddingHorizontal: '10%',
    },
    alignCenter: { alignSelf: 'center' },
    logo: { alignItems: 'center' },
    welcomeBackText: { marginVertical: 20, textAlign: 'center' },
    loginButton: { marginTop: '10%' },
    switchstyle: {
      marginRight: '6%',
    },
    themeText: {
      marginLeft: '30%',
      marginTop: '1%',
    },
    ButtonContainer: {
      paddingHorizontal: '9%',
    },
    IconContainer: {
      marginTop: '9%',
      marginRight: '5%',
    },
  });
export default styles;
