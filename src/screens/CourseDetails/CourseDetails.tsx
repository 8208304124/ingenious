import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Styles';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
function CourseDetails() {
  const learnPoints = [
    'Corporate Restructure',
    'Provisions relating to Compromise and Arrangements',
    'Types of Mergers',
    'Mode of Acquisition',
    'Types of Demerger',
    'Capital Gains Provisions',
    'Drafting of Schemes',
    'Procedure',
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.safeContainer}>
        <View style={{ marginTop: 20 }}>
          <Image
            source={require('../../assets/images/GradientLight.png')}
            style={styles.shadowContainer}
          />
          <Feather
            size={45}
            name="play-circle"
            color={'white'}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: [{ translateX: -20 }, { translateY: -15 }],
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
        <View style={{ marginTop: 15, gap: 10 }}>
          <Text style={styles.homeHeaderSearchText}>
            Advanced Training Program on Mergers and Acquisition Law
          </Text>
          <Text style={styles.simpleText}>
            A comprehensive program on Mergers and Acquisitions (M&A) Law is designed to equip
            participants with a thorough understanding of the legal, regulatory, and practical
            aspects involved in M&A transactions.
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <View style={styles.commonFlexdirection}>
            <Feather name="bar-chart" size={15} color="#50C878" />
            <Text style={styles.midText}>Advanced</Text>
          </View>
          <View style={styles.commonFlexdirection}>
            <MaterialIcon name="web" size={15} color="#50C878" />
            <Text style={styles.midText}>English</Text>
          </View>
          <View style={styles.commonFlexdirection}>
            <Feather name="clock" size={15} color="#50C878" />
            <Text style={styles.midText}>6 Hours</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 10, marginTop: 20 }}>
          <Text style={styles.priceTag}>₹12500</Text>
          <Text style={[styles.simpleText, { color: '#B1BAC3', fontSize: 12 }]}>
            589+ Enrolled in 24 hours
          </Text>
        </View>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-evenly', gap: 10, marginTop: 20 }}
        >
          <TouchableOpacity style={styles.outlineButton}>
            <Text style={{ fontSize: 14, color: '#4169E1', fontWeight: '500' }}>
              Add to wishlist
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={{ fontSize: 14, color: 'white', fontWeight: '500' }}>Enroll Now</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20, gap: 20 }}>
          <Text style={styles.simpleFontheader}>What you’ll Learn</Text>
          <View style={{ gap: 15, paddingHorizontal: 20 }}>
            {learnPoints.map((learnPoint, i) => (
              <View key={i} style={styles.pointsHead}>
                <View style={styles.pointer}></View>
                <View style={{ alignItems: 'flex-start', marginTop: -3 }}>
                  <Text style={styles.pointsText}>{learnPoint}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CourseDetails;
