import { Dimensions, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  safeAreaContainer: { flex: 1, backgroundColor: '#F7F8FA' },
  primaryButton: {
    padding: 15,
    width: scale(158),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4169E1',
  },
  buttonText: {
    fontWeight: '500',
    fontSize: 14,
    color: 'white',
  },
  noCourse: {
    position: 'absolute',
    top: height / 3,
    left: width / 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
