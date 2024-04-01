import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DashBoard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.DashBoardText}>DashBoard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  DashBoardText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default DashBoard;
