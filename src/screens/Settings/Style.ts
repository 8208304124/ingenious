import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  safeAreaContainer: { flex: 1, backgroundColor: '#F7F8FA' },
  optionContainer: {
    flex: 1,
    paddingHorizontal: 25,
    gap: 10,
  },
  option: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 13,
    borderRadius: 5,
    gap: 15,
    paddingHorizontal: 20,
  },
  optionText: {
    fontSize: 15,
    fontFamily: 'Merriweather-Regular',
    color: '#2C2C2C',
  },
  imageStyle: {
    borderRadius: 100,
    overflow: 'hidden',
    height: scale(80),
    width: scale(80),
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 5,
    alignItems: 'center',
  },
  profileText: {
    fontSize: 20,
    fontFamily: 'Merriweather-Black',
    color: '#616161',
  },
  profileNumberText: {
    fontSize: 14,
    color: '#616161',
  },
});
