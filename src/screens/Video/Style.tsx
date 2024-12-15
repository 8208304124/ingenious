import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  safeAreaContainer: { flex: 1, backgroundColor: '#F7F8FA' },
  shadowContainer: {
    height: scale(45),
  },
  categoryButton: {
    backgroundColor: '#50C878',
    justifyContent: 'center',
    alignItems: 'center',
    height: scale(32),
    width: scale(115),
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 6,
  },
});
