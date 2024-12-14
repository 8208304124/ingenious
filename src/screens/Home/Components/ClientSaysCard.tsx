import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';

interface ClientSaysCardParams {
  image: string;
  fullname: string;
  designation: string;
  superText: string;
  ratings: number;
}
interface ClientSaysCardType {
  client: ClientSaysCardParams;
}
function ClientSaysCard({ client }: ClientSaysCardType) {
  const screenWidth = Dimensions.get('window').width;
  const [rating, setRating] = useState(0); // Current rating value

  const handlePress = (starIndex: number) => {
    setRating(starIndex); // Set rating to the index of the star
  };
  useEffect(() => {
    handlePress(client.ratings);
  }, []);

  return (
    <View style={[styles.cardContainer, { width: screenWidth - 50 }]}>
      <View style={styles.clienNameContainer}>
        <Image
          resizeMode="cover"
          style={styles.imageStyle}
          source={{
            uri: client.image,
          }}
        />
        <View>
          <Text style={styles.clientNameText}>{client.fullname}</Text>
          <Text style={styles.simpleText}>{client.designation}</Text>
        </View>
      </View>
      <Text style={styles.superText}>{client.superText}</Text>
      <View style={styles.ratingContainer}>
        <Text>{client.ratings}</Text>
        <View style={styles.starContainer}>
          {Array.from({ length: 5 }, (_, index) => (
            <TouchableOpacity key={index} onPress={() => handlePress(index + 1)}>
              <Icon
                name={index < rating ? 'star' : 'star-o'}
                size={20}
                color={index < rating ? '#FFD700' : '#C1C1C1'}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

export default ClientSaysCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 40,
    gap: 15,
    borderRadius: 20,
  },
  imageStyle: {
    borderRadius: 40,
    overflow: 'hidden',
    height: scale(40),
    width: scale(40),
  },
  clientNameText: {
    fontFamily: 'Merriweather-Black',
    color: '#616161',
    fontSize: 14,
  },
  clienNameContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  simpleText: {
    color: '#616161',
    fontSize: 12,
  },
  superText: {
    color: '#4169E1',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '500',
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  ratingContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
