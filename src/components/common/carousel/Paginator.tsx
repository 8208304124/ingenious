import { StyleSheet, View, Dimensions, Animated, ImageProps } from 'react-native';
import React from 'react';
interface CarouselItem {
  id: number;
  image: ImageProps;
}
interface props {
  data: CarouselItem[];
  scrollX: Animated.Value;
}
const Paginator = ({ data, scrollX }: props) => {
  const screenWidth = Dimensions.get('window').width;
  return (
    <View style={{ flexDirection: 'row' }}>
      {data.map((_: unknown, i: number) => {
        const inputRange = [(i - 1) * screenWidth, i * screenWidth, (i + 1) * screenWidth];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[
              styles.dot,
              {
                width: dotWidth,
                opacity,
              },
            ]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#fff',
  },
});
