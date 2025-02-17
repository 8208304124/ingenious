import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Style';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Payment from '../../assets/images/payment.svg';
import { navigate } from '../../routes/RootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStoreLoginUser } from '../../utility/localStorage/localStorage';
import { useIsFocused } from '@react-navigation/native';

function Settings() {
  const [userDetails, setUserDetails] = useState({ name: '', mobNo: '' });
  const isFocused = useIsFocused();
  const handleLogout = async () => {
    await AsyncStorage.removeItem('userLogin');
    navigate('Login');
  };
  const fetchDetails = async () => {
    const userDetail = await getStoreLoginUser();
    setUserDetails({ name: userDetail?.user?.fullName, mobNo: userDetail?.user?.phoneNumber });
  };

  useEffect(() => {
    fetchDetails();
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            style={styles.imageStyle}
            source={{
              uri: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=',
            }}
          />
          <Text style={styles.profileText}>{userDetails.name}</Text>
          <Text style={styles.profileNumberText}>{userDetails.mobNo}</Text>
        </View>
        <View style={styles.optionContainer}>
          <TouchableOpacity style={styles.option} onPress={() => navigate('MyProfileEdit')}>
            <Feather name="user" size={22} color={'#50C878'} />
            <Text style={styles.optionText}>Profile Setting</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Payment />
            <Text style={styles.optionText}>Payment History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => navigate('My Profile')}>
            <Feather name="info" size={22} color={'#50C878'} />
            <Text style={styles.optionText}>About Vishwaguru</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Feather name="share-2" size={22} color={'#50C878'} />
            <Text style={styles.optionText}>Share the app</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Octicons name="question" size={22} color={'#50C878'} />
            <Text style={styles.optionText}>Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={handleLogout}>
            <Feather name="log-out" size={22} color={'#50C878'} />
            <Text style={styles.optionText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Settings;
