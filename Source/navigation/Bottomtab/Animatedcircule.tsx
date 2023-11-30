import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
type CirculeProps = {
  circlex: Animated.SharedValue<number>;
};
const circleContainerSize = 50;
const AnimatedCircle: FC<CirculeProps> = ({circlex}) => {
  const circleCOntainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: circlex.value - circleContainerSize / 2}],
    };
  }, []);
  return <Animated.View style={[circleCOntainerStyle]} />;
};
export default AnimatedCircle;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -circleContainerSize / 1.1,
    width: circleContainerSize,
    borderRadius: circleContainerSize,
    height: circleContainerSize,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
