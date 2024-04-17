import { StyleSheet, Platform } from 'react-native';

const styles = (theme) => {
  const paddingVertical = Platform.OS === 'ios' ? 15 : 13;
  return StyleSheet.create({
    container: {
      // margin: 16,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.12,
      shadowRadius: 60,
      elevation: 6,
    },
    text: {
      fontSize: theme.typography.size.S,
      color: theme.colors.TEXT,
    },
    placeholder: {
      color: theme.colors.PLACEHOLDER,
      fontSize: theme.typography.size.S,
    },
    touchableOpacity: {
      backgroundColor: theme.colors.TEXTINPUT_BACKGROUND,
      padding: paddingVertical,
      borderRadius: theme.shape.borderRadius.S,
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });
};

export default styles;
