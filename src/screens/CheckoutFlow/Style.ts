import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#F7F8FA',
    paddingHorizontal: 25,
  },
  simpleFontheader: {
    fontFamily: 'Merriweather-Black',
    color: '#2C2C2C',
    fontSize: 16,
    lineHeight: 20,
  },
  imageStyle: {
    borderRadius: 12,
    overflow: 'hidden',
    height: scale(75),
    width: scale(73),
  },
  orderInnerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 11,
    gap: 20,
    alignItems: 'center',
  },
  orderText: {
    color: '#616161',
    fontFamily: 'Merriweather-Regular',
    fontSize: 12,
    lineHeight: 16,
  },
  priceContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  orderPrice: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 20,
    color: '#4169E1',
  },
  orderSubPrice: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 20,
    color: '#61636E',
    textDecorationLine: 'line-through',
  },
  summaryContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 11,
    gap: 10,
  },
  FlexJustifySpaceCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  FlexAlignCenter: { flexDirection: 'row', alignItems: 'center' },
  summaryTextBold: {
    fontSize: 14,
    fontWeight: '600',
    color: '#61636E',
  },
  footerContainer: {
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    padding: 25,
    justifyContent: 'center',
    gap: 20,
    alignItems: 'center',
    zIndex: 10,
    bottom: 0,
    backgroundColor: 'white',
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#4169E1',
    alignItems: 'center',
    padding: 13,
    borderRadius: 10,
  },
  smallText: {
    fontSize: 12,
    color: '#61636E',
    marginBottom: 5,
  },
  footerPriceText: {
    fontSize: 24,
    justifyContent: 'flex-end',
    color: '#4169E1',
    fontWeight: '600',
  },
});
