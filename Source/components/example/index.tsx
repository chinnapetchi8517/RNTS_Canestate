// Dots.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  interpolate,
  Extrapolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const Dots = ({ currentIndex, totalSlides }) => {
  const dotStyle = (index:any) => {
    const opacity = interpolate(
      currentIndex.value,
      [index - 1, index, index + 1],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    );

    const scale = interpolate(
      currentIndex.value,
      [index - 1, index, index + 1],
      [1, 1.5, 1],
      Extrapolate.CLAMP
    );

    return {
      opacity,
      transform: [{ scale }],
    };
  };

  return (
    <View style={styles.container}>
      {[...Array(totalSlides).keys()].map((index) => (
        <Animated.View
          key={index}
          style={[styles.dot, dotStyle(index)]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'blue', // Change the color as needed
    margin: 5,
  },
});

export default Dots;
