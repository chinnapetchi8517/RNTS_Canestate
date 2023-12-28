import React, {useEffect, useState} from 'react';
import {Dimensions, StyleProp, StyleSheet, View} from 'react-native';
import RNReanimated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  WithSpringConfig,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Defs, LinearGradient, Path, Stop, Svg} from 'react-native-svg';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Route} from '@react-navigation/native';
import FabBarButton, {BarButton} from './TabbarButton';
import {colors} from '../../../utils/colors';
import {getTabShape} from './Tab_shape';
const ReanimatedSvg = RNReanimated.createAnimatedComponent(Svg);

const tabWidth = 110;
const TAB_BAR_HEIGHT = 64;
export const defaultSpringConfig = {
  damping: 30,
  mass: 0.7,
  stiffness: 250,
};

type CustomProps = {
  /**
   * Custom spring animation config
   */
  springConfig?: Omit<WithSpringConfig, 'toValue'>;
  /**
   * Custom style for bar
   */
  bottomBarContainerStyle?: StyleProp<any>;
  /**
   * Adding additional style for the focused tab button, such as a shadow.
   */
  focusedButtonStyle?: StyleProp<any>;
  /**
   * Enable right to left
   */
  isRtl?: boolean;
};

export const FabTabBar: React.FC<BottomTabBarProps & CustomProps> = ({
  state,
  descriptors,
  navigation,
  springConfig,
  bottomBarContainerStyle,
  focusedButtonStyle,
  isRtl = false,
}) => {
  const currentDescriptor = descriptors[state.routes[state.index].key];

  const [{width, height}, setDimensions] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  });
  const {bottom} = useSafeAreaInsets();
  const d = getTabShape(width, height, tabWidth, TAB_BAR_HEIGHT);

  const tabsWidthValue = React.useMemo(
    () => width / state.routes.length,
    [width, state.routes],
  );
  const tabsRealWidth = width / state.routes.length;

  const initialPosition = isRtl
    ? -width + tabsWidthValue * (state.routes.length - 1 - state.index)
    : -width + tabsWidthValue * state.index;

  const animatedValueLength = useSharedValue(initialPosition);

  const offset =
    tabsRealWidth < tabWidth
      ? tabWidth - tabsRealWidth
      : (tabsRealWidth - tabWidth) * -1;

  useEffect(() => {
    animatedValueLength.value = initialPosition;
  }, [isRtl]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animatedValueLength.value}],
    };
  });
  useEffect(() => {
    animatedValueLength.value = withSpring(
      initialPosition - offset / 2,
      springConfig || defaultSpringConfig,
    );
  }, [
    width,
    height,
    state,
    tabsWidthValue,
    offset,
    animatedValueLength,
    springConfig,
    initialPosition,
  ]);

  const animationValueThreshold = useSharedValue(0);

  useEffect(() => {
    animationValueThreshold.value = withSpring(
      state.index,
      springConfig || defaultSpringConfig,
    );
    /*Animated.spring(animationValueThreshold, {
      toValue: state.index,
      ...(springConfig || defaultSpringConfig),
      useNativeDriver: false,
    }).start();*/
  }, [animationValueThreshold, state.index, springConfig]);

  return (
    <View
      onLayout={({
        nativeEvent: {
          layout: {height: lHeight, width: lWidth},
        },
      }) => {
        setDimensions({width: lWidth, height: lHeight});
      }}
      style={[
        style.container,
        {
          marginBottom: bottom,
          height: TAB_BAR_HEIGHT,
          flexDirection: isRtl ? 'row-reverse' : 'row',
        },
        bottomBarContainerStyle,
        // apply style from descriptor
        currentDescriptor.options.tabBarStyle,
      ]}>
      {bottom > 0 && (
        <View
          style={[
            {
              height: bottom,
              backgroundColor:
                Object.values(descriptors)[state.index].options
                  .tabBarActiveBackgroundColor,
              bottom: bottom * -1,
            },
            style.bottomFill,
          ]}
        />
      )}
      <View
        style={[
          style.fabButtonsContainer,
          {flexDirection: isRtl ? 'row-reverse' : 'row'},
        ]}>
        {state.routes.map((route: Route<any>, index: number) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <FabBarButton
              key={route.key}
              options={options}
              onPress={onPress}
              onLongPress={onLongPress}
              focusedButtonStyle={focusedButtonStyle}
              index={index}
              isFocused={isFocused}
              activeTintColor={options.tabBarActiveTintColor}
              inactiveTintColor={options.tabBarInactiveTintColor}
            />
          );
        })}
      </View>
      <View style={[StyleSheet.absoluteFill, style.barShapeWrapper]}>
        <ReanimatedSvg
          width={width * 2.5}
          height={height + bottom}
          style={[
            {
              width: '100%',
              backgroundColor: 'transparent',
            },
            animatedStyles,
          ]}>
          <Defs>
            <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="0%" stopColor={colors.primarycolor} />
              <Stop offset="50%" stopColor={colors.primarycolor} />
              <Stop offset="100%" stopColor={colors.secondarycolor} />
            </LinearGradient>
          </Defs>
          <Path d={d} fill="url(#gradient)" />
        </ReanimatedSvg>
      </View>
      {state.routes.map((route: Route<any>, index: number) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <BarButton
            focusedButtonStyle={focusedButtonStyle}
            key={route.key}
            options={options}
            onPress={onPress}
            onLongPress={onLongPress}
            index={index}
            isFocused={isFocused}
            activeTintColor={options.tabBarActiveTintColor}
            inactiveTintColor={options.tabBarInactiveTintColor}
          />
        );
      })}
    </View>
  );
};
const style = StyleSheet.create({
  barShapeWrapper: {elevation: 11, zIndex: 0, backgroundColor: 'transparent'},
  container: {
    flexDirection: 'row',
    height: TAB_BAR_HEIGHT,
    backgroundColor: 'transparent',
  },
  bottomFill: {
    width: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
  },
  fabButtonsContainer: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    zIndex: -1,
    height: TAB_BAR_HEIGHT,
  },
});

export default FabTabBar;
