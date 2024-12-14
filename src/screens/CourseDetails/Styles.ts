import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#F7F8FA',
    paddingHorizontal: 25,
  },
  homeHeaderSearchText: {
    fontFamily: 'Merriweather-Black',
    color: '#616161',
    fontSize: 18,
    lineHeight: 27,
  },
  simpleFontheader: {
    fontFamily: 'Merriweather-Black',
    color: '#2D2D2D',
    fontSize: 16,
    lineHeight: 20,
  },
  shadowContainer: {
    position: 'absolute',
    top: 0,
    zIndex: 10,
    borderRadius: 12,
    height: scale(202),
    width: '100%',
    resizeMode: 'cover',
  },
  imageStyle: {
    borderRadius: 12,
    overflow: 'hidden',
    height: scale(202),
    width: '100%',
  },
  simpleText: {
    fontSize: 14,
    color: '#7B8A99',
    lineHeight: 21,
  },
  midText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#50C878',
  },
  commonFlexdirection: { flexDirection: 'row', gap: 5 },
  priceTag: {
    fontWeight: '500',
    fontSize: 24,
    color: '#4169E1',
  },
  outlineButton: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#4169E1',
    padding: 15,
    borderRadius: 10,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#4169E1',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
  },
  pointsText: { fontSize: 14, lineHeight: 17, color: '#2C2C2C' },
  pointer: {
    height: 10,
    width: 10,
    borderRadius: 20,
    backgroundColor: '#50C878',
  },
  pointsHead: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
});
