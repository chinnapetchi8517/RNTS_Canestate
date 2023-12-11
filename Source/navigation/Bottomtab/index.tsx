import React from 'react';
import {BottomFabBar} from 'rn-wave-bottom-bar';
import Home from '../../screens/Home/Home';
import More from '../../screens/More';
import Notification from '../../screens/Notification';
import Payment from '../../screens/Payment/indexs';
import Profile from '../../screens/Profile';
import {colors} from '../../utils/colors';
import styles from './styles';
import {Images} from '../../assets/Images';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {View} from 'react-native';
//import {BottomFabBar} from './BottomTab';
const Bottomtab: React.FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarBackground: () => (
        //   <LinearGradient
        //     start={{x: 0.0, y: 0.9}}
        //     end={{x: 0.5, y: 9.0}}
        //     locations={[0, 0.3, 0.8]}
        //     colors={[
        //       colors.primarycolor,
        //       colors.secondarycolor,
        //       colors.secondarycolor,
        //     ]}
        //     style={{
        //       height: 70,
        //       borderTopLeftRadius: 20,
        //       borderTopRightRadius: 20,
        //     }}
        //   />
        // ),
        tabBarStyle: {
          position: 'absolute',
          height: 70,
          //backgroundColor: 'red',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },

        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primarycolor,
        tabBarActiveBackgroundColor: colors.primarycolor,
        //'linear-gradient(14deg, rgb(226, 88, 45) 34.23%, rgb(236, 158, 47) 104.35%, rgba(217, 217, 217, 0.00) 104.35%)',
        // tabBarInactiveBackgroundColor: 'red',
      }}
      tabBar={(props: any) => (
        <BottomFabBar
          mode={'default'}
          isRtl={false}
          // Add Shadow for active tab bar button
          focusedButtonStyle={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.41,
            shadowRadius: 9.11,
            elevation: 14,
            background: 'linear-gradient(45deg, #FF0000, #0000FF)',
          }}
          bottomBarContainerStyle={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            // backgroundColor: 'white',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
          {...props}
        />
      )}>
      <Tab.Screen
        options={{
          tabBarIcon: ({}) => (
            <Images.Home
              width={32}
              height={32}
              marginTop={12}
              marginBottom={8}
              //fill={focused ? colors.primarycolor : colors.grey}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="More"
        options={{
          tabBarIcon: ({}) => (
            <Images.More
              width={32}
              height={32}
              marginTop={12}
              marginBottom={8}
              //fill={focused ? colors.primarycolor : colors.grey}
            />
          ),
        }}
        component={More}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({}) => (
            <Images.Payment
              width={32}
              height={32}
              marginTop={12}
              marginBottom={8}
              //fill={focused ? colors.primarycolor : colors.grey}
            />
          ),
          //tabBarActiveBackgroundColor: '#45014A',
          //tabBarActiveTintColor: 'purple',
        }}
        name="Payment"
        component={Payment}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({}) => (
            <Images.Notification
              width={32}
              height={32}
              marginTop={12}
              marginBottom={8}
              //fill={focused ? colors.primarycolor : colors.grey}
            />
          ),
        }}
        name="Notification"
        component={Notification}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({}) => (
            <Images.Profile
              width={32}
              height={32}
              marginTop={12}
              marginBottom={8}
              //fill={focused ? colors.primarycolor : colors.grey}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default Bottomtab;

// import React, {FC} from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Text, View, KeyboardAvoidingView, Platform} from 'react-native';
// import Home from '../../screens/Home/Home';
// import More from '../../screens/More';
// import Notification from '../../screens/Notification';
// import Payment from '../../screens/Payment/indexs';
// import Profile from '../../screens/Profile';
// import {colors} from '../../utils/colors';
// import styles from './styles';
// import {Images} from '../../assets/Images';
// import LinearGradient from 'react-native-linear-gradient';
// import Animated, {FadeInUp, FadeOutDown, Layout} from 'react-native-reanimated';
//import {bgcolor} from '../../utils/CommonStyles';

// const Tab = createBottomTabNavigator();

// interface TabNavigatorProps {
//   navigation: any;
//   route: any;
// }

// const TabNavigator: FC<TabNavigatorProps> = ({navigation, route}) => {
//   return (
//     // <KeyboardAvoidingView
//     //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//     //   style={{flex: 1}}
//     //   keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -50}>

//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,

//         tabBarActiveTintColor: '#fff',
//         tabBarStyle: {position: 'absolute', height: 70},
//         tabBarShowLabel: false,

//         tabBarBackground: () => (
//           <LinearGradient
//             start={{x: 0.0, y: 0.9}}
//             end={{x: 0.5, y: 9.0}}
//             locations={[0, 0.3, 0.8]}
//             colors={[colors.primarycolor, colors.secondarycolor]}
//             style={{
//               height: 70,
//               borderTopLeftRadius: 20,
//               borderTopRightRadius: 20,
//             }}
//           />
//         ),
//       }}>
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <View
//               style={
//                 focused
//                   ? [styles.tabicon, styles.tabiconselected]
//                   : styles.tabicon
//               }>
//               <Images.Home
//                 width={32}
//                 height={32}
//                 marginTop={12}
//                 marginBottom={8}
//                 //fill={focused ? colors.primarycolor : colors.grey}
//               />
//             </View>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="More"
//         component={More}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <View
//             // style={
//             //   focused
//             //     ? [styles.tabicon, styles.tabiconselected]
//             //     : styles.tabicon
//             // }
//             >
//               <Images.More
//                 width={32}
//                 height={32}
//                 marginTop={12}
//                 marginBottom={8}
//                 fill={focused ? colors.primarycolor : colors.white}
//               />
//             </View>
//           ),
//           unmountOnBlur: true,
//         }}
//       />
//       <Tab.Screen
//         name="Payment"
//         component={Payment}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <View
//             // style={
//             //   focused
//             //     ? [styles.tabicon, styles.tabiconselected]
//             //     : styles.tabicon
//             // }
//             >
//               <Images.Payment
//                 width={32}
//                 height={32}
//                 marginTop={12}
//                 marginBottom={8}
//                 fill={focused ? colors.primarycolor : colors.white}
//               />
//             </View>
//           ),
//           unmountOnBlur: true,
//         }}
//       />
//       <Tab.Screen
//         name="Notification"
//         component={Notification}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <View
//             // style={
//             //   focused
//             //     ? [styles.tabicon, styles.tabiconselected]
//             //     : styles.tabicon
//             // }
//             >
//               <Images.Notification
//                 width={32}
//                 height={32}
//                 marginTop={12}
//                 marginBottom={8}
//                 //fill={colors.white}
//               />
//             </View>
//           ),
//         }}
//         listeners={{
//           tabPress: e => {
//             e.preventDefault(); // <-- this function blocks navigating to screen
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <View
//             // style={
//             //   focused
//             //     ? [styles.tabicon, styles.tabiconselected]
//             //     : styles.tabicon
//             // }
//             >
//               <Images.Profile
//                 width={30}
//                 height={30}
//                 marginTop={12}
//                 marginBottom={8}
//                 fill={focused ? colors.primarycolor : colors.white}
//               />
//             </View>
//           ),
//         }}
//       />
//     </Tab.Navigator>
//     // </KeyboardAvoidingView>
//   );
// };

// export default TabNavigator;
// import React from 'react';
// import {BottomFabBar} from 'rn-wave-bottom-bar';
// import Home from '../../screens/Home/Home';
// import More from '../../screens/More';
// import Notification from '../../screens/Notification';
// import Payment from '../../screens/Payment/indexs';
// import Profile from '../../screens/Profile';
// import {colors} from '../../utils/colors';
// import styles from './styles';
// import {Images} from '../../assets/Images';
// import {
//   createBottomTabNavigator,
//   BottomTabBar,
// } from '@react-navigation/bottom-tabs';
// import {NavigationContainer} from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';
// import {View} from 'react-native';
// const Bottomtab: React.FC = () => {
//   const Tab = createBottomTabNavigator();

//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarBackground: () => (
//           <LinearGradient
//             start={{x: 0.0, y: 0.9}}
//             end={{x: 0.5, y: 9.0}}
//             locations={[0, 0.3, 0.8]}
//             colors={[
//               colors.primarycolor,
//               colors.secondarycolor,
//               colors.secondarycolor,
//             ]}
//             style={{
//               height: 70,
//               borderTopLeftRadius: 20,
//               borderTopRightRadius: 20,
//             }}
//           />
//         ),
//         tabBarStyle: {
//           position: 'absolute',
//           height: 55,
//           //backgroundColor: 'red',
//           borderTopLeftRadius: 15,
//           borderTopRightRadius: 15,
//         },

//         tabBarShowLabel: false,
//         //  tabBarComponent: (props:any) => { return (
//         //    <LinearGradient colors={['#f5f5f5', '#DBDBDB']}
//         //    start={[1, 0]} end={[0, 0]}>
//         //    <BottomTabBar {...props} style={{backgroundColor: 'transparent' }} />
//         //     </LinearGradient> ) },
//         tabBarActiveTintColor: colors.secondarycolor,
//         //tabBarActiveBackgroundColor: colors.primarycolor,
//         // tabBarInactiveBackgroundColor: 'red',
//       }}
//       tabBar={(props: any) => (
//         <BottomFabBar
//           mode={'default'}
//           isRtl={false}
//           // Add Shadow for active tab bar button
//           focusedButtonStyle={{
//             shadowColor: '#000',
//             shadowOffset: {
//               width: 0,
//               height: 7,
//             },
//             shadowOpacity: 0.41,
//             shadowRadius: 9.11,
//             elevation: 14,
//             background: 'linear-gradient(45deg, #FF0000, #0000FF)',
//           }}
//           bottomBarContainerStyle={{
//             position: 'absolute',
//             bottom: 0,
//             left: 0,
//             right: 0,
//             // backgroundColor: 'white',
//             borderTopLeftRadius: 20,
//             borderTopRightRadius: 20,
//           }}
//           {...props}
//         />
//       )}>
//       <Tab.Screen
//         options={{
//           tabBarIcon: ({}) => (
//             <Images.Home
//               width={32}
//               height={32}
//               marginTop={12}
//               marginBottom={8}
//               //fill={focused ? colors.primarycolor : colors.grey}
//             />
//           ),
//         }}
//         name="Home"
//         component={Home}
//       />
//       <Tab.Screen
//         name="More"
//         options={{
//           tabBarIcon: ({}) => (
//             <Images.More
//               width={32}
//               height={32}
//               marginTop={12}
//               marginBottom={8}
//               //fill={focused ? colors.primarycolor : colors.grey}
//             />
//           ),
//         }}
//         component={More}
//       />
//       <Tab.Screen
//         options={{
//           tabBarIcon: ({}) => (
//             <Images.Payment
//               width={32}
//               height={32}
//               marginTop={12}
//               marginBottom={8}
//               //fill={focused ? colors.primarycolor : colors.grey}
//             />
//           ),
//           //tabBarActiveBackgroundColor: '#45014A',
//           //tabBarActiveTintColor: 'purple',
//         }}
//         name="Payment"
//         component={Payment}
//       />
//       <Tab.Screen
//         options={{
//           tabBarIcon: ({}) => (
//             <Images.Notification
//               width={32}
//               height={32}
//               marginTop={12}
//               marginBottom={8}
//               //fill={focused ? colors.primarycolor : colors.grey}
//             />
//           ),
//         }}
//         name="Notification"
//         component={Notification}
//       />
//       <Tab.Screen
//         options={{
//           tabBarIcon: ({}) => (
//             <Images.Profile
//               width={32}
//               height={32}
//               marginTop={12}
//               marginBottom={8}
//               //fill={focused ? colors.primarycolor : colors.grey}
//             />
//           ),
//         }}
//         name="Profile"
//         component={Profile}
//       />
//     </Tab.Navigator>
//   );
// };

// export default Bottomtab;
