import React, {useState, useRef} from 'react';
import {View, Text, Button, StatusBar, TextInput} from 'react-native';
import {colors} from '../../utils/colors';

interface NotificationProps {
  navigation: any;
}

const Notification: React.FC<NotificationProps> = ({navigation}) => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={colors.white}
      />
      <Text>Notification</Text>
    </>
  );
};

export default Notification;
