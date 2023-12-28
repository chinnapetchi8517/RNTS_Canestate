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
import {CustomSelectionControl} from '../../components/CustomSelectionControl';
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
                <CustomSelectionControl
                  type="radio"
                  options={[
                    {label: 'Male', value: 'Male'},
                    {label: 'Female', value: 'Female'},
                    {label: 'Others', value: 'Others'},
                  ]}
                  isTextright={true}
                  disabled={false}
                  containerStyle={{
                    marginHorizontal: 16,
                    paddingTop: 18,

                    //paddingBottom: 18,
                  }}
                  mainCointainerstyle={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                  handleOptionPress={handleSelection}
                />
              </View>
              <View
                style={{
                  marginTop: 30,
                }}>
                <CustomSelectionControl
                  type="checkbox"
                  options={[
                    {
                      label: 'I agree to the Terms & conditions',
                      value: 'I agree to the Terms & conditions',
                    },
                    {
                      label: 'Receive news & product updated',
                      value: 'Receive news & product updated',
                    },
                  ]}
                  disabled={false}
                  containerStyle={{
                    ///marginHorizontal: 16,
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                  appSelectionContainerStyle={{
                    marginHorizondal: 0,
                    marginTop: 0,
                  }}
                  mainCointainerstyle={{
                    margin: 0,
                  }}
                  rightTextStyle={{
                    fontSize: 14,
                    marginHorizondal: 0,
                    marginRight: 60,
                  }}
                  isTextright={true}
                  handleOptionPress={handleSelection}
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
