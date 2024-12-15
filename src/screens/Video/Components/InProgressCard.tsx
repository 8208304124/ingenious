import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';

function InProgressCard() {
  const progress = 30;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardshadowContainer}>
        <View style={styles.cardHead}>
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
          </View>
        </View>

        {/* Progress Bar Section */}
        <View style={styles.progressContainer}>
          <View
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Text style={styles.simpleText}>Progress</Text>
            <Text style={styles.lightText}>17/38 chapters completed</Text>
            <Text style={styles.simpleText}>{progress}%</Text>
          </View>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
          </View>
        </View>
      </View>
    </View>
  );
}

export default InProgressCard;

const styles = StyleSheet.create({
  cardshadowContainer: {
    marginHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    borderRadius: 19,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  cardHead: {
    flex: 1,
    paddingHorizontal: 15,
    borderRadius: 19,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
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
  progressContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#E2E2E2',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#50C878',
    borderRadius: 5,
  },
  lightText: {
    color: '#CFD1D3',
    fontSize: 11,
  },
});
