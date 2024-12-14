import React from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { styles } from './Style';
import Feather from 'react-native-vector-icons/Feather';
import FilterIcon from '../../assets/images/Filter_big.svg';
import CoursesCard from './Components/CoursesCard';
import ClientSaysCard from './Components/ClientSaysCard';
import FacebookIcon from '../../assets/images/facebook.svg';
import GmailIcon from '../../assets/images/mail.svg';
import LinkedinIcon from '../../assets/images/linkedin.svg';
import Xicon from '../../assets/images/x.svg';
import InstaIcon from '../../assets/images/insta.svg';
function Home() {
  const category = ['Corporate Law', 'Tax Law', 'Taxation Law', 'Contract Law', 'Family Law'];
  const courses = [
    {
      type: 'Corporate Law',
      headerTitle: 'Mergers and Acquisition Law',
      headerSubTitle:
        'Essential insights into the legal, regulatory, and practical aspects of Mergers and Acquisitions (M&A)',
      price: 1200,
      image:
        'https://img.freepik.com/premium-vector/abstract-white-landscape-background-template_469489-1272.jpg?w=1480',
    },
    {
      type: 'Tax Law',
      headerTitle: 'Mergers and Acquisition Law',
      headerSubTitle:
        'Essential insights into the legal, regulatory, and practical aspects of Mergers and Acquisitions (M&A)',
      price: 1200,
      image:
        'https://img.freepik.com/premium-vector/gradient-abstract-background_23-2149154566.jpg?w=1480',
    },
    {
      type: 'Taxation Law',
      headerTitle: 'Mergers and Acquisition Law',
      headerSubTitle:
        'Essential insights into the legal, regulatory, and practical aspects of Mergers and Acquisitions (M&A)',
      price: 1200,
      image:
        'https://img.freepik.com/free-vector/paper-style-white-monochrome-background_52683-66443.jpg?t=st=1734161079~exp=1734164679~hmac=553b9e5a44f98f5a9051d19bf17fcfe16dcfab3e08608bea245294df8e605eea&w=1480',
    },
    {
      type: 'Corporate Law',
      headerTitle: 'Mergers and Acquisition Law',
      headerSubTitle:
        'Essential insights into the legal, regulatory, and practical aspects of Mergers and Acquisitions (M&A)',
      price: 1200,
      image:
        'https://img.freepik.com/premium-vector/abstract-white-landscape-background-template_469489-1272.jpg?w=1480',
    },
  ];
  const clients = [
    {
      image: 'https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Profile-Picture.jpg',
      fullname: 'Riya L Dsouza',
      designation: 'Student , LLB',
      superText: '“Its a Great Platform to learn all Legal laws and to stay informed”',
      ratings: 3,
    },
    {
      image:
        'https://www.profilebakery.com/wp-content/uploads/2023/04/LINKEDIN-Profile-Picture-AI.jpg',
      fullname: 'Rahul Jagtap',
      designation: 'Working Professional',
      superText: '“Its a Great Platform to learn all Legal laws and to stay informed”',
      ratings: 4,
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.mainPage}>
        <View style={{ marginTop: 15, gap: 20 }}>
          <Text style={styles.homeHeaderSearchText}>What do you want to learn Today?</Text>
          <View style={styles.inputSearch}>
            <Feather size={20} name="search" color={'#C1C1C1'} />
            <TextInput
              style={styles.input}
              placeholder="Search courses..."
              placeholderTextColor={'#C1C1C1'}
            />
            <FilterIcon />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.homeHeaderSearchText}>Category</Text>
            <Text style={{ color: '#4169E1', textDecorationLine: 'underline' }}>View all</Text>
          </View>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 7 }}
          >
            {category.map((cat, i) => (
              <View key={i} style={styles.shadowContainer}>
                <TouchableHighlight
                  style={styles.categoryButton}
                  // onPress={() => console.log('Pressed:', cat)}
                >
                  <Text style={{ color: 'white' }}>{cat}</Text>
                </TouchableHighlight>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={{ marginTop: 20, gap: 20 }}>
          <Text style={styles.homeHeaderSearchText}>Featured courses</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 10 }}
          >
            {courses.map((course, i) => (
              <CoursesCard course={course} key={i} />
            ))}
          </ScrollView>
        </View>
        <View style={{ flex: 1, marginTop: 20, gap: 20 }}>
          <Text style={styles.homeHeaderSearchText}>What our clients says</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 10 }}
          >
            {clients.map((client, i) => (
              <ClientSaysCard client={client} key={i} />
            ))}
          </ScrollView>
        </View>
        <View style={{ marginBottom: 30, gap: 20, marginTop: 20 }}>
          <Text style={styles.homeHeaderSearchText}>Lets connect</Text>
          <View style={styles.letsConnectContainer}>
            <FacebookIcon />
            <InstaIcon />
            <LinkedinIcon />
            <Xicon />
            <GmailIcon />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
