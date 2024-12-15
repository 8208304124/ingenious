import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
function ShadowCard() {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardshadowContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/images/GradientLight.png')}
            style={styles.shadowContainer}
          />
          <Feather
            size={28}
            name="play-circle"
            color={'white'}
            style={{
              position: 'absolute',
              top: '35%',
              left: '35%',
              zIndex: 10,
            }}
          />
          <Image
            resizeMode="cover"
            style={styles.imageStyle}
            source={{
              uri: 'https://img.freepik.com/premium-vector/abstract-white-landscape-background-template_469489-1272.jpg?w=1480',
            }}
          />
        </View>
        <View style={{ flex: 1, gap: 2 }}>
          <Text style={styles.simpleFontheader}>
            Advanced Training Program on Mergers and Acquisition Law
          </Text>
          <Text style={styles.simpleText}>Adv. (Dr.) Swapnil Bangali</Text>
          <Text style={styles.greenColorText}>2 days ago</Text>
        </View>
      </View>
    </View>
  );
}

export default ShadowCard;

const styles = StyleSheet.create({
  cardshadowContainer: {
    flex: 1,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 19,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  cardContainer: {
    flex: 1,
  },
  imageContainer: {
    height: scale(70),
    width: scale(70),
  },
  shadowContainer: {
    position: 'absolute',
    top: 0,
    zIndex: 10,
    borderRadius: 19,
    height: scale(70),
    width: scale(70),
    resizeMode: 'cover',
  },
  imageStyle: {
    borderRadius: 19,
    overflow: 'hidden',
    height: scale(70),
    width: scale(70),
  },
  simpleFontheader: {
    fontFamily: 'Merriweather-Black',
    color: '#616161',
    fontSize: 13,
    lineHeight: 18,
  },
  simpleText: {
    color: '#7B8A99',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 21,
  },
  greenColorText: {
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 21,
    color: '#50C878',
  },
});
