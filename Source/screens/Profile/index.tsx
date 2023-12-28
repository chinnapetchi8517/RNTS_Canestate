import React, {useState, useRef} from 'react';
import {View, Text, Button, StatusBar, TextInput} from 'react-native';
import {colors} from '../../utils/colors';
import {ScreenProps} from 'react-native-screens';

const Profile: React.FC<ScreenProps> = ({navigation}) => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={colors.white}
      />
      <Text>Profile</Text>
    </>
  );
};

export default Profile;
