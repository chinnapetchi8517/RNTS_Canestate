import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Alert,
  TextInput,
  TextStyle,
  PermissionsAndroid,
  Image,
  FlatList,
  Pressable,
  ScrollView,
} from 'react-native';
import {colors} from '../../../utils/colors';
import {screenProps} from '../../../utils/types';
import MapView, {Marker, PROVIDER_GOOGLE, Region} from 'react-native-maps';
import {AppModal} from '../../../components/AppModal';
import {Text} from 'react-native';
import {fonts} from '../../../utils/fonts';
import {Images} from '../../../assets/Images';
import AppButton from '../../../components/AppButton';
import CommonStyles from '../../../utils/CommonStyles';
import Geolocation from '@react-native-community/geolocation';
import styles from './styles';
import TextAreaComponent from '../../../components/TextareaComponent';
import {CustomSelectionControl} from '../../../components/CustomSelectionControl';
const addressData = [
  {id: 1, name: 'Home', Img: <Images.Homeaddress />},
  {id: 2, name: 'Appartment', Img: <Images.Apartments />},
  {id: 3, name: 'Townhouse', Img: <Images.Homeaddress />},
  {id: 4, name: 'Studio', Img: <Images.Homeaddress />},
  {id: 5, name: 'Suite', Img: <Images.Homeaddress />},
  {id: 6, name: 'Commercial', Img: <Images.Homeaddress />},
];
const Confirm_Address: React.FC<screenProps> = ({navigation}) => {
  const [searchText, setsearchText] = useState('');
  const [selectind, setselectInd] = useState(0);
  const [ismodal, setismodal] = useState(false);
  const [value, setValue] = useState('');
  const [address, setadress] = useState('');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [isterms, setisTerms] = useState(false);

  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const handleSelection = (selected: any) => {
    console.log('Selected:', selected);
    // Do something with the selected value(s)
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.imageview}>
            <Image source={Images.Address}></Image>
          </View>
          <View style={CommonStyles.Row}>
            <TextAreaComponent
              maxHeight={50}
              value={value}
              editable={false}
              setInputValue={val => setValue(val)}
              placeholderText={'11'}
              containerStyle={styles.inputcontainerStyle}
            />
            <TextAreaComponent
              editable={false}
              iscolorBlack={true}
              maxHeight={50}
              value={address}
              setInputValue={val => setadress(val)}
              placeholderText={'19940 Airport Road'}
              inputStyle={{color: colors.textbalck}}
              containerStyle={styles.inputcontainerStyle1}
            />
          </View>
          <TextAreaComponent
            editable={false}
            iscolorBlack={true}
            maxHeight={50}
            value={value1}
            setInputValue={val => setValue1(val)}
            placeholderText={'Brampton'}
            inputStyle={{color: colors.textbalck}}
            containerStyle={styles.inputcontainerStyle2}
          />
          <View style={[CommonStyles.Row, {marginHorizontal: 20}]}>
            <TextAreaComponent
              iscolorBlack={true}
              editable={false}
              maxHeight={50}
              value={value2}
              setInputValue={val => setValue2(val)}
              placeholderText={'Ontario'}
              inputStyle={{color: colors.textbalck}}
              containerStyle={styles.inputcontainerStyle3}
            />
            <TextAreaComponent
              editable={false}
              iscolorBlack={true}
              value={value3}
              setInputValue={val => setValue3(val)}
              maxHeight={50}
              placeholderText={'L6S 0C5'}
              inputStyle={{color: colors.textbalck}}
              containerStyle={styles.inputcontainerStyle4}
            />
          </View>
          <>
            <FlatList
              data={addressData}
              numColumns={3}
              contentContainerStyle={{
                marginHorizontal: 20,
                alignItems: 'center',
                justifyContent: 'center',
                //marginTop: 20,

                paddingBottom: 10,
              }}
              renderItem={({item, index}) => {
                return (
                  <View
                    key={index}
                    style={{marginHorizontal: 18, marginTop: 30}}>
                    <Pressable
                      onPress={() => setselectInd(index)}
                      style={[
                        styles.listView,
                        {
                          borderColor:
                            index === selectind
                              ? colors.primarycolor
                              : colors.greyText,
                          borderWidth: index === selectind ? 1 : 0,
                          backgroundColor:
                            index === selectind
                              ? colors.bgprimarycolor
                              : colors.textareaBg,
                        },
                      ]}>
                      {index === 0 ? (
                        <Images.Homeaddress
                          fill={
                            index === selectind
                              ? colors.primarycolor
                              : colors.greyText
                          }
                        />
                      ) : index === 1 ? (
                        <Images.Apartments
                          fill={
                            index === selectind
                              ? colors.primarycolor
                              : colors.greyText
                          }
                        />
                      ) : index === 3 ? (
                        <Images.Townhouse
                          fill={
                            index === selectind
                              ? colors.primarycolor
                              : colors.greyText
                          }
                        />
                      ) : index === 4 ? (
                        <Images.Studio
                          fill={
                            index === selectind
                              ? colors.primarycolor
                              : colors.greyText
                          }
                        />
                      ) : index === 5 ? (
                        <Images.Suite
                          fill={
                            index === selectind
                              ? colors.primarycolor
                              : colors.greyText
                          }
                        />
                      ) : (
                        <Images.Commercial
                          fill={
                            index === selectind
                              ? colors.primarycolor
                              : colors.greyText
                          }
                        />
                      )}

                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: fonts.robotoRegular,
                          fontWeight: '500',
                          color:
                            index === selectind
                              ? colors.primarycolor
                              : colors.greyText,
                          marginTop: 4,
                        }}>
                        {item.name}
                      </Text>
                    </Pressable>
                  </View>
                );
              }}
              keyExtractor={(_, i) => _.id.toString()}></FlatList>
            <View style={{marginHorizontal: 36}}>
              <CustomSelectionControl
                type="checkbox"
                options={['']}
                isMultiSelection={true}
                isCheck={true}
                disabled={false}
                containerStyle={{
                  marginHorizontal: 16,
                  marginBottom: 36,
                }}
                value={isterms}
                isTextright={true}
                rightchildren={
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      //marginHorizontal: 36,
                    }}>
                    <Text style={styles.termsText}>I accept the</Text>
                    <Pressable onPress={() => setismodal(true)}>
                      <Text
                        style={[
                          styles.termsText,
                          {
                            color: colors.terms,
                            borderBottomColor: colors.terms,
                            borderBottomWidth: 0.5,
                          },
                        ]}>
                        terms & conditions
                      </Text>
                    </Pressable>

                    <Text style={styles.termsText}>
                      to add my property to the canestate platform
                    </Text>
                  </View>
                }
                handleOptionPress={() =>
                  setisTerms(!isterms)
                }></CustomSelectionControl>
            </View>
          </>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 26,
              marginHorizontal: 20,
            }}>
            <AppButton
              onPress={() => navigation.navigate('Property_Information')}
              containerStyle={{width: '100%'}}
              bordered={true}
              title={'Accept'}
            />
          </View>
        </View>
        <AppModal
          onDrop={() => setismodal(!ismodal)}
          visible={ismodal}
          maxheight={697}
          iscenter={true}>
          <>
            <View
              style={{
                marginTop: 24,
                marginHorizontal: 24,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: fonts.interBold,
                  fontWeight: '600',
                  color: colors.textbalck,
                }}>
                Terms & Conditions
              </Text>
              <Pressable onPress={() => setismodal(false)}>
                <Images.Close />
              </Pressable>
            </View>
            <View
              style={{
                borderBottomColor: colors.greyText,
                borderBottomWidth: 1,
                marginTop: 25,
              }}
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: fonts.robotoBold,
                fontWeight: '600',
                color: colors.textbalck,
                alignSelf: 'center',
                marginVertical: 16,
              }}>
              In Contract Law, Terms means Terms
            </Text>
            <ScrollView>
              <Text style={styles.tcL}>
                {'\u2022'} In contract law, terms means Terms of a Contract, the
                conditions and warranties agreed upon between parties to the
                contract. Contract terms may be verbal or in writing. Conditions
                are those terms which are so important that one or more of the
                parties would not enter into the contract without them.
              </Text>
              <Text style={styles.tcL}>
                {'\u2022'} the conditions and warranties agreed upon between
                parties to the contract..
              </Text>
              <Text style={styles.tcL}>
                {'\u2022'} Contract terms may be verbal or in writing.
                Conditions are those terms which are so
              </Text>
              <Text style={styles.tcL}>
                {'\u2022'} Important that one or more of the parties would not
                enter into the contract without them.
              </Text>
              <Text style={styles.tcL}>
                {'\u2022'}In Contract Law, Terms means Terms of a Contract, the
                conditions and warranties agreed upon between parties to the
                contract. Contract terms may be verbal or in writing. Conditions
                are those terms which are so important that one or more of the
                parties would not enter into the contract without them
                Conditions are those terms which are so important that one or
                more of the parties would not enter into the contract without
                them..
              </Text>
              <Text style={styles.tcL}>
                {'\u2022'} In Contract Law, Terms means Terms of a Contract, the
                conditions and warranties agreed upon between parties to the
                contract. Contract terms may be verbal or in writing. Conditions
                are those terms which are so important that one or more of the
                parties would not enter into the contract without them
                Conditions are those terms which are so important that one or
                more of the parties would not enter into the contract without
                them..
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                  marginHorizontal: 20,
                }}>
                <AppButton
                  onPress={() => {
                    setismodal(false), setisTerms(true);
                  }}
                  title="Okay"
                  bordered={true}
                />
              </View>
            </ScrollView>
          </>
        </AppModal>
      </SafeAreaView>
    </>
  );
};

export default Confirm_Address;
