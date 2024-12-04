import { StyleSheet } from 'react-native';
import { ThemeType } from '../../../utility/interfaces/themeInterfaces/ThemeInterfaces';

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
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 1,
      borderRadius: theme.shape.borderRadius.S,
      textAlign: 'center',
      fontSize: theme.typography.size.S,
    },
    iconButton: {
      paddingLeft: 15,
      opacity: 0.5,
    },
  });
};

export default styles;
