import React from 'react';
// import {BottomFabBar} from 'rn-wave-bottom-bar';
import FabTabBar from './CustomAnimationTab/CustomTab';
import Home from '../../screens/Home/Home';
import More from '../../screens/More';
import Notification from '../../screens/Notification';
import Payment from '../../screens/Payment/indexs';
import Profile from '../../screens/Profile';
import {colors} from '../../utils/colors';
import {Images} from '../../assets/Images';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Bottomtab: React.FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
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
        // tabBarStyle: {
        //   // backgroundColor: '#00bcd4',

        //   //backgroundColor: 'red',
        //   borderTopWidth: 0,
        //   position: 'absolute',
        //   elevation: 0,
        // },

        // tabBarStyle: {
        //   position: 'absolute',
        //   height: 70,
        //   //backgroundColor: 'red',
        //   borderTopLeftRadius: 15,
        //   borderTopRightRadius: 15,
        // },
        // tabBarActiveBackgroundColor: colors.primarycolor,
        //'linear-gradient(14deg, rgb(226, 88, 45) 34.23%, rgb(236, 158, 47) 104.35%, rgba(217, 217, 217, 0.00) 104.35%)',
        // tabBarActiveBackgroundColor: 'transparent',
        // tabBarInactiveBackgroundColor: 'transparent',
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primarycolor,

        headerShown: false,
      }}
      tabBar={(props: any) => (
        <>
          <FabTabBar
            isRtl={false}
            focusedButtonStyle={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.41,
              shadowRadius: 9.11,
              elevation: 14,
            }}
            bottomBarContainerStyle={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
            {...props}
          />
        </>
      )}>
      <Tab.Screen
        options={{
          tabBarIcon: ({}) => (
            <Images.Home
              width={32}
              height={32}
              marginTop={12}
              marginBottom={8}
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
            />
          ),
        }}
        component={More}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Images.Payment
              width={32}
              height={32}
              marginTop={12}
              marginBottom={8}
            />
          ),
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
