import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Style';
import WishlistEmpty from '../../assets/images/WishlistEmpty.svg';
function Favourite() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.noCourse}>
        <WishlistEmpty />
        <Text>It seems you didn’t saved anything yet</Text>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Explore courses</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Favourite;
