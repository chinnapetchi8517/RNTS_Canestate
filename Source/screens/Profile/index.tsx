import React, {useState, useRef} from 'react';
import {View, Text, Button, StatusBar, TextInput} from 'react-native';
import {colors} from '../../utils/colors';

interface ProfileProps {
  navigation: any;
}

const Profile: React.FC<ProfileProps> = ({navigation}) => {
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
