import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Style';
import ShadowCard from './Components/ShadowCard';
import InProgressCard from './Components/InProgressCard';
import CompletedCard from './Components/CompletedCard';

function Video() {
  const [selected, setSelected] = useState(0);
  const category = ['Enrolled', 'In Progress', 'Completed'];
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={{ marginTop: 15, paddingHorizontal: 25 }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 7 }}
        >
          {category.map((cat, i) => (
            <View key={i} style={styles.shadowContainer}>
              <TouchableOpacity
                style={[
                  styles.categoryButton,
                  { backgroundColor: selected == i ? '#4169E1' : '#50C878' },
                ]}
                onPress={() => setSelected(i)}
              >
                <Text style={{ color: 'white', fontSize: 13, fontWeight: '600' }}>{cat}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
      <ScrollView style={{ flex: 1, marginTop: 10 }}>
        {selected == 0 && (
          <View style={{ gap: 15, marginBottom: 50 }}>
            <ShadowCard />
            <ShadowCard />
            <ShadowCard />
            <ShadowCard />
          </View>
        )}
        {selected == 1 && (
          <View style={{ gap: 15, marginBottom: 50 }}>
            <InProgressCard />
            <InProgressCard />
            <InProgressCard />
          </View>
        )}
        {selected == 2 && (
          <View style={{ gap: 15, marginBottom: 50 }}>
            <CompletedCard />
            <CompletedCard />
            <CompletedCard />
            <CompletedCard />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Video;
