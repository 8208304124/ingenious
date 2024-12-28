import { StyleSheet } from 'react-native';
import { ThemeType } from '../../utility/interfaces/themeInterfaces/ThemeInterfaces';
import { scale } from 'react-native-size-matters';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-evenly',
    },
    headerText: {
      textAlign: 'center',
      fontFamily: 'Merriweather-Bold',
      color: 'black',
      fontSize: 28,
    },
    loginSubText: {
      color: '#7F8C8D',
      textAlign: 'center',
      paddingHorizontal: 5,
      fontSize: 14,
      lineHeight: 19,
    },
    button: {
      height: scale(42),
      alignItems: 'center',
      justifyContent: 'center',
      width: scale(130),
      borderRadius: 7,
      backgroundColor: '#4169E1',
    },
    buttonText: {
      color: 'white',
      fontSize: 14,
      fontWeight: '500',
    },
    DropDown: {
      width: 147,
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
      gap: 20,
      paddingHorizontal: 35,
    },
    LoginTextContainer: {
      marginTop: '20%',
    },
    loginText: { fontWeight: '600', textAlign: 'center' },
    input: {
      flexDirection: 'row',
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
      alignItems: 'center',
      paddingHorizontal: '9%',
    },
    IconContainer: {
      marginTop: '9%',
      marginRight: '5%',
    },
    otpMain: {
      flex: 1,
      justifyContent: 'space-evenly',
      marginHorizontal: 30,
    },
    otpContainer: {
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 16,
      borderColor: '#50C878',
      padding: 20,
      paddingHorizontal: 30,
      gap: 20,
    },
    otpBox: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      gap: 20,
    },
    inputText: {
      color: 'black',
      width: scale(35),
      borderColor: '#50C878',
      backgroundColor: '#F9F9F9',
      paddingHorizontal: 10,
      height: scale(35),
      borderWidth: 0.5,
      borderRadius: 7,
      textAlign: 'center',
      fontSize: 14,
    },
    otpheaderText: {
      textAlign: 'center',
      fontFamily: 'Merriweather-Bold',
      color: 'black',
      fontSize: 20,
      lineHeight: 20,
    },
    subText: {
      color: '#77808B',
      lineHeight: 20,
    },
  });
export default styles;
