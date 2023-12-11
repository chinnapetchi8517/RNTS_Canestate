import React from 'react';
import RootNavigator from './Source/navigation/Root';

const App: React.FC = () => {
  return <RootNavigator />;
};

export default App;

// import React, {useEffect, useReducer, useRef} from 'react';
// import {
//   Pressable,
//   StatusBar,
//   StyleSheet,
//   View,
//   Text,
//   LayoutChangeEvent,
//   Image,
// } from 'react-native';
// // navigation
// import {NavigationContainer} from '@react-navigation/native';
// import {
//   BottomTabBarProps,
//   BottomTabNavigationOptions,
//   createBottomTabNavigator,
// } from '@react-navigation/bottom-tabs';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
// // svg
// import Svg, {Path} from 'react-native-svg';
// // reanimated
// import Animated, {
//   useAnimatedStyle,
//   withTiming,
//   useDerivedValue,
// } from 'react-native-reanimated';
// // lottie
// import {Images} from './Source/assets/Images';
// import {colors} from './Source/utils/colors';
// import LinearGradient from 'react-native-linear-gradient';
// import More from './Source/screens/More/index';
// import Svg, {Circle, Ellipse, Path} from 'react-native-svg';

// // ------------------------------------------------------------------

// const Tab = createBottomTabNavigator();

// const AnimatedSvg = Animated.createAnimatedComponent(Svg);

// // ------------------------------------------------------------------

// const App = () => {
//   return (
//     <>
//       <StatusBar barStyle="light-content" />
//       <NavigationContainer>
//         <Tab.Navigator
//           screenOptions={{
//             headerShown: false,

//             //tabBarActiveTintColor: '#fff',
//             tabBarActiveBackgroundColor: 'transparent',
//             tabBarInactiveTintColor: 'white',
//             //tabBarStyle: {position: 'absolute', height: 70},
//             tabBarShowLabel: false,
//           }}
//           tabBar={props => <AnimatedTabBar {...props} />}>
//           <Tab.Screen
//             name="Home"
//             options={{
//               // @ts-ignore
//               tabBarIcon: ({ref}) => (
//                 <Images.Home marginTop={19} marginBottom={18}></Images.Home>
//               ),
//             }}
//             component={PlaceholderScreen}
//           />
//           <Tab.Screen
//             name="Upload"
//             options={{
//               // @ts-ignore
//               tabBarIcon: ({ref}) => (
//                 <Images.More marginTop={19} marginBottom={18}></Images.More>
//               ),
//             }}
//             component={PlaceholderScreen}
//           />
//           <Tab.Screen
//             name="Chat"
//             options={{
//               // @ts-ignore
//               tabBarIcon: ({ref}) => (
//                 <Images.Notification
//                   marginTop={19}
//                   marginBottom={18}></Images.Notification>
//               ),
//             }}
//             component={PlaceholderScreen}
//           />
//           <Tab.Screen
//             name="Settings"
//             options={{
//               // @ts-ignore
//               tabBarIcon: ({ref}) => (
//                 <Images.Payment
//                   marginTop={19}
//                   fillcolor={'white'}
//                   marginBottom={18}></Images.Payment>
//               ),
//             }}
//             component={PlaceholderScreen}
//           />
//           <Tab.Screen
//             name="GHGH"
//             options={{
//               // @ts-ignore
//               tabBarIcon: ({ref}) => (
//                 <Images.Profile
//                   marginTop={19}
//                   marginBottom={18}
//                   fillcolor={'white'}></Images.Profile>
//               ),
//             }}
//             component={PlaceholderScreen}
//           />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </>
//   );
// };

// // ------------------------------------------------------------------

// const PlaceholderScreen = () => {
//   return <View style={{flex: 1, backgroundColor: 'white'}} />;
// };

// // ------------------------------------------------------------------

// const AnimatedTabBar = ({
//   state: {index: activeIndex, routes},
//   navigation,
//   descriptors,
// }: BottomTabBarProps) => {
//   const {bottom} = useSafeAreaInsets();

//   // get information about the components position on the screen -----

//   const reducer = (state: any, action: {x: number; index: number}) => {
//     // Add the new value to the state
//     return [...state, {x: action.x, index: action.index}];
//   };

//   const [layout, dispatch] = useReducer(reducer, []);

//   const handleLayout = (event: LayoutChangeEvent, index: number) => {
//     dispatch({x: event.nativeEvent.layout.x, index});
//   };

//   // animations ------------------------------------------------------

//   const xOffset = useDerivedValue(() => {
//     // Our code hasn't finished rendering yet, so we can't use the layout values
//     if (layout.length !== routes.length) return 0;
//     // We can use the layout values
//     // Copy layout to avoid errors between different threads
//     // We subtract 25 so the active background is centered behind our TabBar Components
//     // 20 pixels is the width of the left part of the svg (the quarter circle outwards)
//     // 5 pixels come from the little gap between the active background and the circle of the TabBar Components
//     return [...layout].find(({index}) => index === activeIndex)!.x - 25;
//     // Calculate the offset new if the activeIndex changes (e.g. when a new tab is selected)
//     // or the layout changes (e.g. when the components haven't finished rendering yet)
//   }, [activeIndex, layout]);

//   const animatedStyles = useAnimatedStyle(() => {
//     return {
//       // translateX to the calculated offset with a smooth transition
//       transform: [{translateX: withTiming(xOffset.value, {duration: 650})}],
//     };
//   });
//   var pathX = '357';
//   var pathY = '675';
//   var pathA = '689';
//   var pathB = '706';

//   return (
//     <LinearGradient
//       start={{x: 0.0, y: 0.9}}
//       end={{x: 0.5, y: 9.0}}
//       locations={[0, 0.8]}
//       colors={['#E2582D', '#EC9E2F']}
//       style={{
//         height: 70,
//         borderTopLeftRadius: 20,
//         borderTopRightRadius: 20,
//         backgroundColor: 'rgba(217, 217, 217, 0.00)',
//       }}>
//       <View style={{paddingBottom: bottom}}>
//         <AnimatedSvg
//           // width={1000}
//           // height={80}
//           // viewBox="0 0 1000 60"
//           style={[styles.activeBackground, animatedStyles]}>
//           <Svg width={10} height={30}>
//             <Path
//               fill="white"
//               d="M20 0H0c11.046 0 20 3.953 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.045 8.954-20 20-20H20z"
//             />
//           </Svg>

//           {/* <Path
//             fill="white"
//             d="M20 0H0c11.046 0 20 3.953 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.045 8.954-20 20-20H20z"
//           /> */}
//         </AnimatedSvg>
//         <View style={styles.tabBarContainer}>
//           {routes.map((route, index) => {
//             const active = index === activeIndex;
//             const {options} = descriptors[route.key];

//             return (
//               <TabBarComponent
//                 key={route.key}
//                 active={active}
//                 options={options}
//                 onLayout={e => handleLayout(e, index)}
//                 onPress={() => navigation.navigate(route.name)}
//               />
//             );
//           })}
//         </View>
//       </View>
//     </LinearGradient>
//   );
// };

// // ------------------------------------------------------------------

// type TabBarComponentProps = {
//   active?: boolean;
//   options: BottomTabNavigationOptions;
//   onLayout: (e: LayoutChangeEvent) => void;
//   onPress: () => void;
// };

// const TabBarComponent = ({
//   active,
//   options,
//   onLayout,
//   onPress,
// }: TabBarComponentProps) => {
//   // handle lottie animation -----------------------------------------
//   const ref = useRef(null);

//   useEffect(() => {
//     if (active && ref?.current) {
//       // @ts-ignore
//       ref.current.play();
//     }
//   }, [active]);

//   // animations ------------------------------------------------------

//   const animatedComponentCircleStyles = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {
//           scale: withTiming(active ? 1 : 0, {duration: 250}),
//         },
//       ],
//     };
//   });

//   const animatedIconContainerStyles = useAnimatedStyle(() => {
//     return {
//       opacity: withTiming(active ? 1 : 0.5, {duration: 250}),
//     };
//   });

//   return (
//     <Pressable onPress={onPress} onLayout={onLayout} style={styles.component}>
//       {active ? (
//         <LinearGradient
//           start={{x: 0.0, y: 0.9}}
//           end={{x: 0.5, y: 9.0}}
//           locations={[0, 0.8]}
//           colors={['#E2582D', '#EC9E2F']}
//           style={styles.componentCircle}>
//           <Animated.View
//             style={[animatedComponentCircleStyles]}></Animated.View>
//         </LinearGradient>
//       ) : null}
//       <Animated.View
//         style={[
//           styles.iconContainer,
//           // {
//           //   bottom: active ? 48 : 0,
//           //   right: active ? 17 : 0,
//           //   top: active ? 0 : 15,
//           //   left: active ? 20 : 0,
//           //   alignItems: 'center',
//           //   justifyContent: 'center',
//           // },
//           animatedIconContainerStyles,
//         ]}>
//         {/* @ts-ignore */}
//         {options.tabBarIcon ? options.tabBarIcon({ref}) : <Text>?</Text>}
//       </Animated.View>
//     </Pressable>
//   );
// };

// // ------------------------------------------------------------------

// const styles = StyleSheet.create({
//   tabBar: {
//     backgroundColor: 'red',
//     height: 70,
//   },
//   activeBackground: {
//     position: 'absolute',
//     //bottom: 10,
//   },
//   tabBarContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   component: {
//     height: 60,
//     width: 60,

//     marginTop: -5,
//   },
//   componentCircle: {
//     width: 55,
//     height: 55,
//     borderRadius: 55 / 2,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'red',
//     //bottom: 20,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,
//     elevation: 1,
//   },
//   iconContainer: {
//     position: 'absolute',

//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   icon: {
//     height: 16,
//     width: 16,
//   },
// });

// export default App;
