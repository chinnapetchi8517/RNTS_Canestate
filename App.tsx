import React from 'react';
import RootNavigator from './Source/navigation/Root';

const App: React.FC = () => {
  return <RootNavigator />;
};

export default App;

// <--------------------------------- swiper>
// import React, {useState, useRef, useEffect} from 'react';
// import {View, Text, StyleSheet, Animated, Dimensions} from 'react-native';
// import Swiper from 'react-native-swiper';

// const {width} = Dimensions.get('window');

// const CustomSwiper = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const activeDotWidth = useRef(new Animated.Value(10)).current; // Initial width of the active dot

//   const handleIndexChanged = index => {
//     setCurrentIndex(index);

//     // Reset the width of the active dot when the index changes
//     Animated.timing(activeDotWidth, {
//       toValue: 10, // Initial width of the active dot
//       duration: 300,
//       useNativeDriver: false,
//     }).start();
//   };

//   const handleSwipeEnd = () => {
//     // Reset the width of the active dot when the swipe ends
//     Animated.timing(activeDotWidth, {
//       toValue: 10, // Initial width of the active dot
//       duration: 300,
//       useNativeDriver: false,
//     }).start();
//   };

//   const handleSwipe = (event, state) => {
//     // Increase the width of the active dot while the user is swiping
//     const progress = event.nativeEvent.contentOffset.x / width;
//     const index = Math.round(progress);
//     const value = Math.abs(progress - index);

//     Animated.timing(activeDotWidth, {
//       toValue: value * 20 + 20, // Adjust the desired width based on swipe progress
//       duration: 0, // No animation duration during the swipe
//       useNativeDriver: false,
//     }).start();
//   };

//   return (
//     <View style={{flex: 1}}>
//       <Swiper
//         loop={false}
//         showsButtons={false}
//         onIndexChanged={handleIndexChanged}
//         onMomentumScrollEnd={handleSwipeEnd}
//         onScroll={Animated.event(
//           [{nativeEvent: {contentOffset: {x: activeDotWidth}}}],
//           {listener: handleSwipe, useNativeDriver: false},
//         )}
//         activeDot={
//           <Animated.View
//             style={[
//               styles.dot,
//               {
//                 width: currentIndex ? activeDotWidth : 10,
//                 backgroundColor: 'red',
//               },
//             ]}
//           />
//         }
//         dot={
//           <Animated.View
//             style={[
//               styles.dot,
//               // {
//               //   width: activeDotWidth,
//               // },
//             ]}
//           />
//         }>
//         {/* Your slides go here */}
//         <View style={styles.slide}>
//           <Text>Slide 1</Text>
//         </View>
//         <View style={styles.slide}>
//           <Text>Slide 2</Text>
//         </View>
//         <View style={styles.slide}>
//           <Text>Slide 3</Text>
//         </View>
//         <View style={styles.slide}>
//           <Text>Slide 3</Text>
//         </View>
//       </Swiper>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   slide: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#e0e0e0',
//   },
//   dot: {
//     height: 10,
//     width: 10,
//     borderRadius: 5,
//     backgroundColor: 'blue',
//     margin: 5,
//   },
// });

// export default CustomSwiper;

// <--------------------------------- swiper>
