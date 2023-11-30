import React, {FC} from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {CurvedBottomBarExpo} from 'react-native-curved-bottom-bar';
import {Images} from '../../assets/Images';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../../screens/Home/Home';
import More from '../../screens/More';

interface ScreenProps {
  name: string;
  position: string;
  component: FC;
}

const Bottomtab: FC = () => {
  const _renderIcon = (routeName: string, selectedTab: string) => {
    let icon = '';

    switch (routeName) {
      case 'title1':
        icon = 'ios-home-outline';
        break;
      case 'title2':
        icon = 'settings-outline';
        break;
    }

    return (
      <Images.Home fillcolor={routeName === selectedTab ? 'black' : 'gray'} />
    );
  };

  const renderTabBar = ({routeName, selectedTab, navigate}: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <NavigationContainer>
      <CurvedBottomBarExpo.Navigator
        type="DOWN"
        style={styles.bottomBar}
        shadowStyle={styles.shawdow}
        height={55}
        circleWidth={50}
        bgColor="white"
        initialRouteName="title1"
        borderTopLeftRight
        renderCircle={({selectedTab, navigate}: any) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert('Click Action')}>
              <Images.Home fillcolor="gray" />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}>
        <CurvedBottomBarExpo.Screen
          name="title1"
          position="LEFT"
          component={() => <Home navigation={undefined} />}
        />
        <CurvedBottomBarExpo.Screen
          name="title2"
          component={() => <More navigation={undefined} />}
          position="RIGHT"
        />
      </CurvedBottomBarExpo.Navigator>
    </NavigationContainer>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    bottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
});

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
