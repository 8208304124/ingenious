import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

type TutorialLesson = {
  access: boolean;
  topic: string;
  subTopic: string;
};

type Module = {
  title: string;
  subTitle: string;
  tutorialLessons: TutorialLesson[];
};

interface TutorialCardType {
  tutorial: Module;
}

function TutorialCard({ tutorial }: TutorialCardType) {
  const [bottomOpen, setBottomOpen] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: '#E9EEFF', borderRadius: 13 }}>
      {/* Touchable Area */}
      <TouchableOpacity style={[styles.container]} onPress={() => setBottomOpen(!bottomOpen)}>
        <Text style={styles.title}>{tutorial.title}:</Text>
        <Text style={styles.subtitle}>{tutorial.subTitle}</Text>
      </TouchableOpacity>

      {/* Tooltip */}
      {bottomOpen && (
        <View style={styles.tooltip}>
          {tutorial.tutorialLessons.map((tutorialLesson, i) => (
            <View key={i} style={styles.subTopicContainer}>
              {tutorialLesson.access ? (
                <Feather name="play-circle" size={15} color={'#1F2C94'} />
              ) : (
                <Feather name="lock" size={15} color={'#8B8B8B'} />
              )}
              <Text style={tutorialLesson.access ? styles.tutorialtopic : styles.accessNot}>
                {' '}
                {tutorialLesson.topic}:{' '}
              </Text>
              <Text
                style={[
                  tutorialLesson.access ? styles.tutorialtopic : styles.accessNot,
                  { flex: 1 },
                ]}
              >
                {tutorialLesson.subTopic}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

export default TutorialCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 13,
    padding: 20,
    gap: 15,
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 7,
  },
  title: {
    color: '#2D2D2D',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  subtitle: {
    flex: 1,
    color: '#2D2D2D',
    fontSize: 16,
    justifyContent: 'center',
    fontWeight: '500',
  },
  tutorialtopic: {
    fontSize: 12,
    fontWeight: '500',
    color: '#4169E1',
  },
  subTopicContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 25,
    gap: 5,
  },
  tooltip: {
    marginTop: 15,
    gap: 15,
    borderRadius: 10,
    paddingVertical: 10,
    marginBottom: 20,
  },
  accessNot: {
    fontSize: 12,
    fontWeight: '500',
    color: '#8B8B8B',
  },
});
