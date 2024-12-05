import { StyleSheet } from 'react-native';
import { ThemeType } from '../../../utility/interfaces/themeInterfaces/ThemeInterfaces';
import { scale } from 'react-native-size-matters';

const styles = (theme: ThemeType) => {
  // const paddingVertical = Platform.OS === 'ios' ? 8 : 8;

  return StyleSheet.create({
    section: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F9F9F9',
      borderColor: '#50C878',
      borderRadius: theme.shape.borderRadius.S,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderWidth: 1,
    },
    icon: {
      paddingRight: 0,
      marginRight: 8,
    },
    input: {
      color: 'black',
      flex: 1,
      borderColor: '#50C878',
      backgroundColor: '#F9F9F9',
      paddingHorizontal: 10,
      height: scale(42),
      borderWidth: 0.5,
      borderRadius: 7,
      textAlign: 'center',
      fontSize: 14,
    },
    iconButton: {
      paddingLeft: 15,
      opacity: 0.5,
    },
  });
};

export default styles;
