import React, {useState, useRef} from 'react';
import {View, Text, Button, StatusBar, TextInput} from 'react-native';
import {colors} from '../../utils/colors';

interface PaymentProps {
  navigation: any;
}

const Payment: React.FC<PaymentProps> = ({navigation}) => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={colors.white}
      />
      <Text>Payment</Text>
    </>
  );
};

export default Payment;
