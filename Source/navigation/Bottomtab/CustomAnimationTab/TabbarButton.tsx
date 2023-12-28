import React, {memo, useEffect} from 'react';
import {StyleProp, StyleSheet, TouchableOpacity, View} from 'react-native';

import RNReanimated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  WithSpringConfig,
} from 'react-native-reanimated';

import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

interface Props {
  index: number;
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  options: BottomTabNavigationOptions;
  inactiveTintColor?: string;
  activeTintColor?: string;
  springConfig?: WithSpringConfig;
  focusedButtonStyle?: StyleProp<any>;
}

export const defaultSpringConfig: WithSpringConfig = {
  damping: 30,
  mass: 0.7,
  stiffness: 250,
};

export const BarButton: React.FC<Props> = memo(
  ({
    isFocused,
    options,
    onPress,
    onLongPress,
    inactiveTintColor,
    focusedButtonStyle,
    springConfig,
  }) => {
    const animationValueThreshold = useSharedValue(0);

    useEffect(() => {
      if (isFocused) {
        animationValueThreshold.value = withSpring(
          0,
          springConfig || defaultSpringConfig,
        );
      } else {
        animationValueThreshold.value = withSpring(
          1,
          springConfig || defaultSpringConfig,
        );
      }
    }, [isFocused, animationValueThreshold, springConfig]);

    const animatedStyles = useAnimatedStyle(() => {
      return {
        opacity: animationValueThreshold.value,
        transform: [
          {
            scale: animationValueThreshold.value,
          },
        ],
      };
    });

    const textAnimatedStyle = useAnimatedStyle(() => {
      return {
        opacity: interpolate(animationValueThreshold.value, [0.5, 1], [0, 1]),
      };
    });

    return (
      <View style={style.wrapper}>
        <RNReanimated.View style={animatedStyles}>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={[style.unfocusedButton, isFocused ? focusedButtonStyle : {}]}
            onLongPress={onLongPress}>
            <View style={style.tabBarLabelWrapper}>
              {options.tabBarIcon && !isFocused ? (
                options.tabBarIcon({
                  focused: isFocused,
                  color: inactiveTintColor || 'white',
                  size: 28,
                })
              ) : (
                <View />
              )}
              {options.tabBarLabel && (
                <RNReanimated.Text
                  style={[
                    {
                      marginTop: 2,
                      color: inactiveTintColor,
                    },
                    textAnimatedStyle,
                    options.tabBarLabelStyle,
                  ]}>
                  {options.tabBarLabel}
                </RNReanimated.Text>
              )}
            </View>
          </TouchableOpacity>
        </RNReanimated.View>
      </View>
    );
  },
);

export const TabBarButton: React.FC<Props> = memo(
  ({
    isFocused,
    options,
    onPress,
    onLongPress,
    activeTintColor,
    springConfig,
    focusedButtonStyle,
  }) => {
    const animationValueThreshold = useSharedValue(0);

    useEffect(() => {
      if (isFocused) {
        animationValueThreshold.value = withSpring(
          0,
          springConfig || defaultSpringConfig,
        );
      } else {
        animationValueThreshold.value = withSpring(
          1,
          springConfig || defaultSpringConfig,
        );
      }
    }, [isFocused, animationValueThreshold, springConfig]);

    const animatedStyles = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateY: interpolate(
              animationValueThreshold.value,
              [0, 1],
              [-18, 100],
            ),
          },
        ],
      };
    });

    return (
      <View style={style.wrapper}>
        <RNReanimated.View
          style={[
            animatedStyles,
            {backgroundColor: 'green'},
            style.focusedButton,
          ]}>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={[
              {
                ...style.focusedButton,

                backgroundColor: activeTintColor || 'white',
              },
              isFocused ? focusedButtonStyle : {},
            ]}
            onLongPress={onLongPress}>
            {options.tabBarIcon
              ? options.tabBarIcon({
                  focused: isFocused,
                  color: 'white',
                  size: 28,
                })
              : null}
          </TouchableOpacity>
        </RNReanimated.View>
      </View>
    );
  },
);
const style = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    zIndex: 1,
    elevation: 12,
  },
  squareFocusedButton: {
    borderRadius: 16,
  },
  tabBarLabelWrapper: {zIndex: 12, alignItems: 'center'},
  focusedButton: {
    position: 'absolute',
    height: 60,
    width: 60,
    zIndex: -1,
    borderRadius: 32,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unfocusedButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    elevation: 12,
    zIndex: 12,
  },
});

export default TabBarButton;
