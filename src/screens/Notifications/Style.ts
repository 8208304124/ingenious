import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },
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
    flex: 1,
    gap: 50,
    marginBottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  simpleText: {
    fontWeight: '500',
    fontSize: 14,
    width: '50%',
    textAlign: 'center',
    color: '#939090',
    lineHeight: 20,
  },
});
