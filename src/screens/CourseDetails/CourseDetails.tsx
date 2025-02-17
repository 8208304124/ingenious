import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Styles';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import TutorialCard from './Components/TutorialCard';
import { navigate } from '../../routes/RootNavigation';
import Video from 'react-native-video';

function CourseDetails() {
  const [play, setPlay] = useState(false);
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
  const tutorialArray = [
    {
      title: 'Module 1',
      subTitle: 'Introduction to Corporate Restructuring',
      tutorialLessons: [
        {
          access: true,
          topic: 'Lesson 1.1',
          subTopic: 'Understanding Corporate Restructuring',
        },
        {
          access: true,
          topic: 'Lesson 1.2',
          subTopic: 'Strategic Importance of Restructuring',
        },
        {
          access: false,
          topic: 'Lesson 1.3',
          subTopic: 'Case Studies on Successful Restructuring',
        },
      ],
    },
    {
      title: 'Module 1',
      subTitle: 'Introduction to Corporate Restructuring',
      tutorialLessons: [
        {
          access: true,
          topic: 'Lesson 1.1',
          subTopic: 'Understanding Corporate Restructuring',
        },
        {
          access: true,
          topic: 'Lesson 1.2',
          subTopic: 'Strategic Importance of Restructuring',
        },
        {
          access: false,
          topic: 'Lesson 1.3',
          subTopic: 'Case Studies on Successful Restructuring',
        },
      ],
    },
    {
      title: 'Module 1',
      subTitle: 'Introduction to Corporate Restructuring',
      tutorialLessons: [
        {
          access: true,
          topic: 'Lesson 1.1',
          subTopic: 'Understanding Corporate Restructuring',
        },
        {
          access: true,
          topic: 'Lesson 1.2',
          subTopic: 'Strategic Importance of Restructuring',
        },
        {
          access: false,
          topic: 'Lesson 1.3',
          subTopic: 'Case Studies on Successful Restructuring',
        },
      ],
    },
    {
      title: 'Module 1',
      subTitle: 'Introduction to Corporate Restructuring',
      tutorialLessons: [
        {
          access: true,
          topic: 'Lesson 1.1',
          subTopic: 'Understanding Corporate Restructuring',
        },
        {
          access: true,
          topic: 'Lesson 1.2',
          subTopic: 'Strategic Importance of Restructuring',
        },
        {
          access: false,
          topic: 'Lesson 1.3',
          subTopic: 'Case Studies on Successful Restructuring',
        },
      ],
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.safeContainer}>
        {play ? (
          <View style={{ marginTop: 10 }}>
            <Video
              source={{
                uri: 'https://d1c9r6dlt2rggt.cloudfront.net/pradip_sable-b9d1f626-be4f-40e1-9e67-3f86a7d5f396/file/1faabb5c-c835-4a5e-b912-1aaaf552ce35-acuqa-1.mov',
              }}
              style={styles.video}
              controls={true}
              resizeMode="contain"
              paused={false}
            />
          </View>
        ) : (
          <TouchableOpacity style={{ marginTop: 20 }} onPress={() => setPlay(true)}>
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
          </TouchableOpacity>
        )}
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
          <TouchableOpacity style={styles.primaryButton} onPress={() => navigate('Checkout')}>
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
        <View style={{ gap: 15, marginTop: 20 }}>
          {tutorialArray.map((tutorial, i) => (
            <TutorialCard key={i} tutorial={tutorial} />
          ))}
        </View>
        <View style={styles.intructorContainer}>
          <Text style={styles.simpleFontheader}>Instructor</Text>
          <View style={styles.instructorNameContainer}>
            <Image
              resizeMode="cover"
              style={styles.profileImage}
              source={{
                uri: 'https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Profile-Picture.jpg',
              }}
            />
            <View style={{ justifyContent: 'flex-start', gap: 6 }}>
              <Text style={styles.InstructorName}>Adv. (Dr.) Swapnali Bangali</Text>
              <Text style={styles.instructorSubText}>4.5 Rating</Text>
              <Text style={styles.instructorSubText}>3 courses</Text>
            </View>
          </View>
          <Text style={styles.simpleText}>
            Dr. Swapnil Bangali, Member of the Committee to examine issues related to admissibility
            of information received through Exchange of Information on Request as ‘evidence’ in
            prosecution proceedings for Central Board of Direct Taxes, Ministry of Finance, North
            Block, New Delhi, Pune and enrolled himself as an Advocate in Bar Council of Maharashtra
            & Goa in 2004.
          </Text>
        </View>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <TouchableOpacity style={styles.primaryButton} onPress={() => navigate('Checkout')}>
            <Text style={{ fontSize: 14, color: 'white', fontWeight: '500' }}>Enroll Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CourseDetails;
