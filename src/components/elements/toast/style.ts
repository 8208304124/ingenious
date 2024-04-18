import { StyleSheet } from 'react-native';
import { ThemeType } from '../../../utility/interfaces/themeInterfaces/ThemeInterfaces';

const style = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      margin: 20,
      borderColor: '#00000029',
      borderWidth: 0.5,
      padding: 10,
      borderRadius: 6,
      flexDirection: 'row',
      alignItems: 'center',
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 1,
      backgroundColor: theme.colors.WHITE,
    },
    text: { fontWeight: '600', paddingHorizontal: 10, color: '#000' },
  });

export default style;
