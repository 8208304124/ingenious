import { StyleSheet } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import { ThemeType } from '../../../utility/interfaces/themeInterfaces/ThemeInterfaces';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      width: '100%',
      paddingVertical: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.BOTTOM_NAVIGATION_BACKGROUND,
      // backgroundColor:'red',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderColor: '#91919145',
    },
    container2: {
      paddingHorizontal: '15%',
      alignSelf: 'center',
    },
    iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    icon: {
      alignSelf: 'center',
      color: theme.colors.PLACEHOLDER,
    },
    label: {
      color: theme.colors.APP_FOOTER_TEXT,
      textAlign: 'center',
      fontSize: moderateScale(theme.typography.size.FOOTER_FONT_SIZE),
      marginTop: scale(3),
    },
    ripple: { borderRadius: 40, paddingHorizontal: 15 },
  });

export default styles;
