import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  mainPage: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 25,
  },
  homeHeaderSearchText: {
    fontFamily: 'Merriweather-Black',
    color: '#2D2D2D',
    fontSize: 16,
  },
  inputSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius: 17,
    paddingHorizontal: 20,
    paddingVertical: 3,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    gap: 20,
    marginTop: 20,
  },
  shadowContainer: {
    paddingHorizontal: 2,
    height: scale(40),
  },
  categoryButton: {
    backgroundColor: '#50C878',
    paddingHorizontal: 20,
    justifyContent: 'center',
    height: scale(35),
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 5,
  },
  letsConnectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: '#50C878',
    padding: 20,
    borderRadius: 9,
  },
});
