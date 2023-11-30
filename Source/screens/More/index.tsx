import React, {useState, useRef} from 'react';
import {View, Text, Button, StatusBar, TextInput} from 'react-native';
import {colors} from '../../utils/colors';

interface MoreProps {
  navigation: any;
}

const More: React.FC<MoreProps> = ({navigation}) => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={colors.white}
      />
      <Text>More</Text>
    </>
  );
};

export default More;
