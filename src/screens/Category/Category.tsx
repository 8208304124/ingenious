import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from './Style';

function Category() {
  const category = [
    'Corporate Law',
    'Criminal Law',
    'Constitutional Law',
    'Intellectual Property Law',
    'Tax Law',
    'Taxation Law',
    'Contract Law',
    'Family Law',
    'Labor and Employment Law',
    'International Law',
    'Environmental Law',
    'Cyber Law',
    'Real Estate Law',
  ];
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={{ flex: 1, justifyContent: 'center', gap: 20, marginTop: -50 }}>
        {category.map((cat, i) => (
          <View key={i}>
            <Text style={styles.categoryText}>{cat}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

export default Category;
