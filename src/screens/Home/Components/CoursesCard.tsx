import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
interface CoursesCardType {
  type: string;
  headerTitle: string;
  headerSubTitle: string;
  price: number;
  image: string;
}
interface CoursesCardMain {
  course: CoursesCardType;
}
function CoursesCard({ course }: CoursesCardMain) {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Text style={styles.labelText}>{course.type.toUpperCase()}</Text>
        <Image
          source={require('../../../assets/images/GradientLight.png')}
          style={styles.shadowContainer}
        />
        <Text style={styles.subText}>ADVANCE COURSE</Text>
        <Feather
          size={22}
          name="heart"
          color={'white'}
          style={{ position: 'absolute', bottom: 10, right: 10, zIndex: 10 }}
        />
        <Image
          resizeMode="cover"
          style={styles.imageStyle}
          source={{
            uri: course.image,
          }}
        />
      </View>
      <View style={{ marginRight: 15, marginLeft: 5 }}>
        <Text style={styles.textHead}>{course.headerTitle}</Text>
        <Text style={styles.subHeaderText}>{course.headerSubTitle}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={{ color: '#4169E1', fontSize: 18, fontWeight: '500' }}>₹{course.price}</Text>
        <TouchableHighlight style={styles.enrollButton}>
          <Text style={{ color: 'white', fontSize: 12 }}>Enroll Now</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default CoursesCard;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    width: scale(225),
    padding: 13,
    borderRadius: 12,
    gap: 10,
    borderWidth: 3,
    borderColor: '#f5f5f5',
  },
  imageStyle: {
    borderRadius: 12,
    overflow: 'hidden',
    height: scale(135),
    width: scale(200),
  },
  labelText: {
    position: 'absolute',
    top: 20,
    fontSize: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 3,
    color: 'white',
    zIndex: 10,
    backgroundColor: '#50C878',
  },
  subText: {
    position: 'absolute',
    zIndex: 10,
    fontSize: 10,
    color: 'white',
    bottom: 10,
    left: 10,
  },
  shadowContainer: {
    position: 'absolute',
    top: 0,
    zIndex: 10,
    borderRadius: 12,
    height: scale(135),
    width: scale(200),
    resizeMode: 'cover',
  },
  textHead: {
    fontFamily: 'Merriweather-Black',
    color: '#616161',
    fontSize: 13,
  },
  subHeaderText: {
    color: '#7B8A99',
    fontSize: 10,
  },
  bottomContainer: {
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  enrollButton: {
    backgroundColor: '#4169E1',
    padding: 8,
    paddingHorizontal: 15,
    borderRadius: 7,
  },
});
