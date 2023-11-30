import React, {useState, useRef} from 'react';
import {View, Text, Button, StatusBar, TextInput} from 'react-native';
import {colors} from '../../utils/colors';

interface HomeProps {
  navigation: any;
}

const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={colors.white}
      />
      <Text>Home</Text>
    </>
  );
};

export default Home;
