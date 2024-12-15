import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import NotificationEmpty from '../../assets/images/NotificationEmpty.svg';
import { styles } from './Style';

function Notifications() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.noCourse}>
        <Text style={styles.simpleText}>It seems you don’t have any Notification</Text>
        <NotificationEmpty />
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Explore courses</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Notifications;
