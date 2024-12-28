import { Dimensions, StyleSheet } from 'react-native';
import { ThemeType } from '../../../utility/interfaces/themeInterfaces/ThemeInterfaces';

const WIDTH = Dimensions.get('screen').width;
const maxWidth = WIDTH * 0.7;
const minWidth = WIDTH * 0.5;

export const styles = (theme: ThemeType) =>
  StyleSheet.create({
    parentContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalContainer: {
      backgroundColor: 'white',
      borderRadius: theme.shape.borderRadius.L,
      paddingVertical: 20,
      maxWidth,
      minWidth,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.12,
      shadowRadius: 60,
      elevation: 6,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 17,
      marginBottom: 20,
      color: 'black',
    },
    horizontalPadding: {
      paddingHorizontal: 30,
    },
    buttonText: {
      fontSize: 16,
      textTransform: 'uppercase',
      fontWeight: '600',
      alignSelf: 'flex-end',
      paddingHorizontal: 30,
      color: theme.colors.PRIMARY,
    },
  });
