import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../../screens/Splash';
import Onboarding from '../../screens/Onboarding';
import Login from '../../screens/Login';
import Otp from '../../screens/Otp';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import Bottomtab from '../Bottomtab';

interface RootNavigatorProps {}

const RootNavigator: React.FC<RootNavigatorProps> = () => {
  const Root = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Root.Navigator
        screenOptions={{
          headerShown: false,
          headerBackTitleVisible: false,
          gestureEnabled: false,
        }}>
        <Root.Screen name={'Splash'} component={Splash} />
        <Root.Screen name={'Onboarding'} component={Onboarding} />
        <Root.Screen name={'Login'} component={Login} />
        {/* <Root.Screen name={'Bottomtab'} component={Bottomtab} /> */}

        <Root.Screen
          options={{
            headerShown: true,
            title: 'OTP Verification',
            headerStyle: {
              backgroundColor: colors.white,
            },
            headerTintColor: colors.black,
            headerTitleStyle: {
              fontWeight: '700',
              fontFamily: fonts.robotoBold,
              fontSize: 16,
            },
          }}
          name={'Otp'}
          component={Otp}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
