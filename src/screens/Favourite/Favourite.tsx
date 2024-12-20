import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Style';
import WishlistEmpty from '../../assets/images/WishlistEmpty.svg';
function Favourite() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.noCourse}>
        <WishlistEmpty />
        <View style={{ gap: 3 }}>
          <Text style={styles.simpleText}>It seems you didn’t saved anything yet</Text>
          <Text style={styles.simpleText}>Tap on this button to add here</Text>
        </View>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Explore courses</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Favourite;
