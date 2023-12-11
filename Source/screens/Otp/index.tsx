import React, {useRef, useEffect, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Images} from '../../assets/Images';
import {OtpInput} from 'react-native-otp-entry';
import styles from './styles';
import {colors} from '../../utils/colors';
interface otpView {
  navigation?: any;
}
const Otp: React.FC<otpView> = ({navigation}) => {
  const [counter, setCounter] = useState(50);

  const timer = () => {
    setCounter(20);
  };
  useEffect(() => {
    var interval: string | number | NodeJS.Timeout | undefined;
    if (counter > 0) {
      interval = setInterval(() => {
        if (counter > 0) {
          setCounter(counter - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [counter]);
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <View style={styles.centerimage}>
          <Images.Otpimag></Images.Otpimag>
        </View>
        <Text style={styles.title}>code has been send to 1–604****34.</Text>
        <View>
          <OtpInput
            numberOfDigits={4}
            focusColor={colors.primarycolor}
            //focusStickBlinkingDuration={500}
            onTextChange={(text: any) => console.log(text)}
            onFilled={(text: any) =>
              text.length === 4 && navigation.navigate('Login')
            }
            theme={{
              containerStyle: styles.otpcontainner,
              inputsContainerStyle: styles.inputcontainer,
              pinCodeContainerStyle: styles.pointcontainer,
              pinCodeTextStyle: styles.pinCodeText,
              //focusStickStyle: styles.focusStick,
              focusedPinCodeContainerStyle: styles.activepoint,
            }}
          />
          <Text style={styles.title}>
            Resend code in{' '}
            <Text style={[styles.title, {color: colors.primarycolor}]}>
              {counter}{' '}
            </Text>{' '}
            <Text style={styles.title}>s</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Otp;
