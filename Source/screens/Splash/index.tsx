import React, {useEffect} from 'react';
import {View, Text, StatusBar, SafeAreaView} from 'react-native';
import {Images} from '../../assets/Images';
import {colors} from '../../utils/colors';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {screenProps} from '../../utils/types';

const Splash: React.FC<screenProps> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 1000);
  }, []);

  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={colors.primarycolor}
      />
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        locations={[0, 0.3, 0.8]}
        colors={[
          colors.primarycolor,
          colors.secondarycolor,
          colors.primarycolor,
        ]}
        style={styles.wrapper}>
        <View style={styles.centerimage}>
          <Images.Splash />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Splash;
