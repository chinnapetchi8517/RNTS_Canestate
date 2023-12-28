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
import Home from '../../screens/Home/Home';
import {StyleSheet} from 'react-native';
import Property_Onboarding from '../../screens/Property_Onboarding';
import Confirm_Address from '../../screens/Property_Onboarding/ConfirmAddress';
import Property_Information from '../../screens/Property_Onboarding/PropertyInformation';
import PropertyNotes from '../../screens/Property_Onboarding/PropertyInformation/PropertyNotes';
import Properties from '../../screens/Properties';

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
        <Root.Screen
          name={'Properties'}
          options={{
            headerShown: true,
            title: 'Properties',
            headerStyle: styles.header,
            headerTintColor: colors.black,
            headerTitleStyle: styles.headertitle,
          }}
          component={Properties}
        />
        <Root.Screen name={'Onboarding'} component={Onboarding} />
        <Root.Screen
          options={{
            headerShown: true,
            title: 'My Account',
            headerStyle: styles.header,
            headerTintColor: colors.black,
            headerTitleStyle: styles.headertitle,
          }}
          name={'Login'}
          component={Login}
        />
        <Root.Screen name={'Bottomtab'} component={Bottomtab} />

        <Root.Screen
          options={{
            headerShown: true,
            title: 'OTP Verification',
            headerStyle: styles.header,
            headerTintColor: colors.black,
            headerTitleStyle: styles.headertitle,
          }}
          name={'Otp'}
          component={Otp}
        />
        <Root.Screen
          options={{
            headerShown: true,
            title: 'Property Onboarding',
            headerStyle: styles.header,
            headerTintColor: colors.black,
            headerTitleStyle: styles.headertitle,
          }}
          name={'Property_Onboarding'}
          component={Property_Onboarding}
        />
        <Root.Screen
          options={{
            headerShown: true,
            title: 'Confirm Address',
            headerStyle: styles.header,
            headerTintColor: colors.black,
            headerTitleStyle: styles.headertitle,
          }}
          name={'Confirm_Address'}
          component={Confirm_Address}
        />
        <Root.Screen
          options={{
            headerShown: true,
            title: 'Property Information',
            headerStyle: styles.header,
            headerTintColor: colors.black,
            headerTitleStyle: styles.headertitle,
          }}
          name={'Property_Information'}
          component={Property_Information}
        />
        <Root.Screen
          options={{
            headerShown: true,
            title: 'Property Rules & Guidelines',
            headerStyle: styles.header,
            headerTintColor: colors.black,
            headerTitleStyle: styles.headertitle,
          }}
          name={'PropertyNotes'}
          component={PropertyNotes}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
  },
  headertitle: {
    fontWeight: '700',
    fontFamily: fonts.robotoBold,
    fontSize: 16,
  },
});
