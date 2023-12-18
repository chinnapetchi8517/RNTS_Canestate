import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Button,
  StatusBar,
  SafeAreaView,
  Pressable,
  ScrollView,
} from 'react-native';
import {colors} from '../../utils/colors';
import styles from './styles';
import {Images} from '../../assets/Images';
import AppButton from '../../components/AppButton';
import CardView from '../../components/CardView';
import TextAreaComponent from '../../components/TextareaComponent';
import AppSelectionComponent from '../../components/AppSelectionComponent';
import {margin} from '../../utils/CommonStyles';
import {screenProps} from '../../utils/types';
const Login: React.FC<screenProps> = ({navigation}) => {
  const handleSelection = (selected: any) => {
    console.log('Selected:', selected);
    // Do something with the selected value(s)
  };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={colors.white}
      />
      <ScrollView contentContainerStyle={{paddingBottom: 30}}>
        <View style={styles.wrapper}>
          <CardView
            ismulticolor={false}
            maxHeight={187}
            containerStyle={styles.profilecontainer}
            carviewStyles={styles.card}>
            <View style={styles.centerStyle}>
              <View style={styles.profileborderStyle}>
                <Images.LoginProfile />
                <View style={styles.Editprofile}>
                  <Images.ProfileEdit />
                </View>
              </View>
            </View>
          </CardView>
          <CardView
            ismulticolor={false}
            maxHeight={'100%'}
            containerStyle={styles.profilecontainer}
            carviewStyles={styles.card}>
            <View style={styles.viewStyle}>
              <TextAreaComponent
                maxHeight={50}
                placeholderText={'Full Name'}
                containerStyle={styles.inputcontainerStyle}
              />
              <TextAreaComponent
                maxHeight={50}
                placeholderText={'Email'}
                containerStyle={styles.inputcontainerStyle}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 24,
                }}>
                <AppSelectionComponent
                  options={['Male', 'Female', 'Others']}
                  isMultiSelection={false}
                  isRadio={true}
                  isTextright={true}
                  disabled={false}
                  containerStyle={{
                    marginHorizontal: 16,
                    paddingTop: 18,
                    //paddingBottom: 18,
                  }}
                  onValueChange={handleSelection}
                />
              </View>
              <View
                style={{
                  marginTop: 70,
                }}>
                <AppSelectionComponent
                  options={[
                    'I agree to the Terms & conditions',
                    'Receive news & product updated',
                  ]}
                  isMultiSelection={true}
                  isCheck={true}
                  disabled={false}
                  containerStyle={{
                    marginHorizontal: 16,
                    paddingTop: 18,
                    paddingBottom: 10,
                  }}
                  isTextright={true}
                  onValueChange={handleSelection}
                />
              </View>
              <AppButton
                onPress={() => {
                  navigation.navigate('Bottomtab');
                }}
                bordered={true}
                title={'CREATE ACCOUNT'}
                containerStyle={{marginTop: 47, width: '100%'}}
              />
              <AppButton
                icon={true}
                mode="light"
                onPress={() => {}}
                bordered={true}
                title={'SIGN UP WITH GOOGLE'}
                containerStyle={{
                  marginTop: 16,
                  width: '100%',
                  borderColor: '#C6C6C6',
                }}
                textStyle={{color: '#666666', marginHorizontal: 24}}
              />
            </View>
          </CardView>
        </View>
      </ScrollView>
    </>
  );
};

export default Login;
