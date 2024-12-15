import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  safeAreaContainer: { flex: 1, backgroundColor: '#F7F8FA', paddingHorizontal: 25 },
  imageStyle: {
    borderRadius: 19,
    overflow: 'hidden',
    height: scale(204),
    width: '100%',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Merriweather-Black',
    color: '#2C2C2C',
  },
  Container: {
    flex: 1,
    gap: 20,
    marginTop: 30,
  },
  simpleText: {
    color: '#7B8A99',
    fontSize: 14,
    lineHeight: 21,
  },
});
