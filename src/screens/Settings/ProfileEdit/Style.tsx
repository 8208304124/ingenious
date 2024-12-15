import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  safeAreaContainer: { flex: 1, backgroundColor: '#F7F8FA' },
  imageStyle: {
    borderRadius: 50,
    overflow: 'hidden',
    height: scale(85),
    width: scale(85),
  },
  title: {
    fontSize: 16,
    fontFamily: 'Merriweather-Black',
    color: '#2C2C2C',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 5,
    alignItems: 'center',
  },
  profileText: {
    fontSize: 14,
    color: '#4169E1',
  },
  bottomContainer: {
    flex: 1,
    gap: 10,
  },
  saveButtonText: {
    fontSize: 14,
    color: 'white',
  },
  saveButton: {
    padding: 13,
    marginHorizontal: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4169E1',
  },
});
