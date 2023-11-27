import React, {useRef} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Images} from '../../assets/Images';
import OTPTextView from 'react-native-otp-textinput';
import styles from './styles';
import {colors} from 'react-native-swiper-flatlist/src/themes';

const Otp: React.FC = () => {

 
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <View style={styles.centerimage}>
          <Images.Otpimag></Images.Otpimag>
        </View>
        <Text style={styles.title}>code has been send to 1–604****34.</Text>
        {/* <OTPTextView
          containerStyle={{
            width: 71,
            height: 56,
            borderRadius: 11,
            borderWidth: 1,
            borderColor: '#EEE',
          }}
          ref={e => (otpInput = e)}></OTPTextView> */}
      </View>
    </SafeAreaView>
  );
};

export default Otp;
