import React from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from './Style';
import FilterIcon from '../../assets/images/Filter_big.svg';
import CoursesCard from '../Home/Components/CoursesCard';
function Books() {
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
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
      <View style={styles.inputSearch}>
        <Feather size={20} name="search" color={'#C1C1C1'} />
        <TextInput
          style={styles.input}
          placeholder="Search courses..."
          placeholderTextColor={'#C1C1C1'}
        />
        <FilterIcon />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
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
      </ScrollView>
    </SafeAreaView>
  );
}

export default Books;
