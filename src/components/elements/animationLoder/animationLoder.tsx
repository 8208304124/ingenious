import React from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { StyleSheet, View } from 'react-native';
import AnimatedImg from '../../../assets/images/animated-img.svg';

const duration = 2300;
const easing = Easing.linear;

export default function AnimationLoader() {
  const sv = useSharedValue<number>(0);

  React.useEffect(() => {
    sv.value = withRepeat(withTiming(1, { duration, easing }), -1);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: -60 },
      { translateY: -60 },
      { rotate: `${sv.value * 360}deg` },
      { scale: 1 },
    ],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]}>
        <View style={styles.content}>
          <AnimatedImg />
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    width: 120,
    borderRadius: 20,
  },
  content: {
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
