import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  //position
  PosRel: {
    position: 'relative',
  },
  PosAbs: {
    position: 'absolute',
  },

  //display
  DFlex: {
    display: 'flex',
  },

  //flex
  Flex1: {
    flex: 1,
  },
  Flex1Of6: {
    flex: 1 / 6,
  },
  Flex1Of3: {
    flex: 1 / 3,
  },
  Flex1Of2: {
    flex: 1 / 2,
  },

  //FlexDirection
  FlexDirectionRow: {
    flexDirection: 'row',
  },
  FlexDirectionColumn: {
    flexDirection: 'column',
  },

  //AlignItems
  AlignItemsCenter: {
    alignItems: 'center',
  },
  AlignItemsFlexStart: {
    alignItems: 'flex-start',
  },
  AlignItemsFlexEnd: {
    alignItems: 'flex-end',
  },
  AlignContentCenter: {
    alignContent: 'center',
  },
  AlignSelfFlexStart: {
    alignSelf: 'flex-start',
  },

  //JustifyContent
  JustifyContentFlexStart: {
    justifyContent: 'flex-start',
  },
  JustifyContentFlexEnd: {
    justifyContent: 'flex-end',
  },
  JustifyContentFlexCenter: {
    justifyContent: 'center',
  },
  JustifyContentFlexSpaceBetween: {
    justifyContent: 'space-between',
  },
  JustifyContentFlexSpaceAround: {
    justifyContent: 'space-around',
  },

  //textAlign
  textAlignCenter: {
    textAlign: 'center',
  },
  textAlignJustify: { textAlign: 'justify' },

  //width in %
  w50: {
    width: '50%',
  },
  w100: {
    width: '100%',
  },
  //height in %
  height100: {
    height: '100%',
  },

  //opacity
  opacity5: {
    opacity: 0.5,
  },
  opacity3: {
    opacity: 0.3,
  },

  //zIndex
  zIndex1: {
    zIndex: 1,
  },
  zIndex9: {
    zIndex: 9,
  },
});
