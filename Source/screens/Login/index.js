import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Button,
  StatusBar,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {colors} from '../../utils/colors';
import styles from './styles';
import {Images} from '../../assets/Images';
import AppButton from '../../components/AppButton';

const Login = () => {
  const [ind, setind] = useState(0);
  const swiperRef = useRef();
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={colors.white}></StatusBar>

      <View style={styles.slider1}>
        <Images.Intro4 width={326} height={581} marginTop={76}></Images.Intro4>
        {/* <Text style={styles.text}>AI Property Management</Text> */}

        <AppButton
          onPress={() => swiperRef.current.scrollBy(1)}
          bordered={true}
          size="extralarge"
          text={'GET STARTED'}
          buttonstyle={styles.button}></AppButton>
        <View style={{marginTop: 10}}></View>
      </View>
    </>
  );
};
export default Login;
