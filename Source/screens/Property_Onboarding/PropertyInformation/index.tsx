import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Button,
  StatusBar,
  TextInput,
  ImageBackground,
  Pressable,
  ScrollView,
} from 'react-native';
import {colors} from '../../../utils/colors';
import {screenProps} from '../../../utils/types';
import {Images} from '../../../assets/Images';
import styles from './styles';
import {BorderRadius, padding} from '../../../utils/CommonStyles';
import AppButton from '../../../components/AppButton';
import TextAreaComponent from '../../../components/TextareaComponent';
import CardView from '../../../components/CardView';
import AppSelectionComponent from '../../../components/AppSelectionComponent';
import {AppModal} from '../../../components/AppModal';
import {fonts} from '../../../utils/fonts';
import {launchImageLibrary} from 'react-native-image-picker';
const ameneties = [
  'On site security',
  'Elevator',
  'Swimming pool',
  'Cctv',
  'Bbq Area',
  'Bike Racks',
  'Bike Room',
  'Buzzer Entry',
  'Fitness Area',
  'Garage',
  'Garage',
  'Garage',
  'Garage',
  'Garage',
];

const liable = ['Heat', 'Hydro', 'Water', 'Snow Removal', 'Lawn Maintenance'];
const Property_Information: React.FC<screenProps> = ({navigation}) => {
  const [roomsCounter, setRoomscounter] = useState(0);
  const [bathroomsCounter, setBathroomscounter] = useState(0);
  const [carparking, setCarparking] = useState(0);
  const [isanemeties, setisanemeties] = useState(false);
  const [amenetiescount, setamenetiescount] = useState(0);
  const [liablecount, setliablecount] = useState(0);
  const [isswitch, setisSwitch] = useState(false);

  const [selectedOption, setSelectedOption] = useState([]);
  const [isliable, setisLiable] = useState(false);

  const handleSelection = (selected: any) => {
    isliable
      ? setliablecount(selected.length)
      : setamenetiescount(selected.length);
  };
  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={colors.white}
      />
      <View style={styles.wrapper}>
        <>
          <View style={{width: '100%'}}>
            <ImageBackground
              style={{height: 218}}
              source={require('../../../assets/pngImage/property_info.png')}>
              <View style={{top: 165, right: 10, position: 'absolute'}}>
                <AppButton
                  onPress={() => openImagePicker()}
                  containerStyle={[BorderRadius(6), {height: 38}]}
                  textStyle={{textTransform: 'none'}}
                  size="medium"
                  title="Upload Photo"
                />
              </View>
            </ImageBackground>
          </View>

          <TextAreaComponent
            iscolorBlack={true}
            maxHeight={50}
            placeholderText={'Property name'}
            inputStyle={{color: colors.textbalck}}
            containerStyle={styles.inputcontainerStyle}
          />
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 25,
              justifyContent: 'space-around',
            }}>
            <CardView
              maxHeight={106}
              //containerStyle={{marginHorizontal: 20}}
              carviewStyles={{
                width: 163,
                borderRadius: 14,
              }}
              isCardsquare={true}>
              <Text style={styles.cardheader}>Rooms</Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 20,
                  marginRight: 12,
                }}>
                <Pressable
                  onPress={() => {
                    roomsCounter > 0 ? setRoomscounter(roomsCounter - 1) : 0;
                  }}>
                  <Images.Counter_minus />
                </Pressable>
                <Text style={styles.counterText}>{roomsCounter}</Text>
                <Pressable
                  onPress={() => {
                    setRoomscounter(roomsCounter + 1);
                  }}>
                  <Images.Counter_plus />
                </Pressable>
              </View>
            </CardView>
            <CardView
              maxHeight={106}
              carviewStyles={{
                width: 163,
                borderRadius: 14,
              }}
              isCardsquare={true}>
              <Text style={styles.cardheader}>BathRooms</Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  marginTop: 20,
                  marginRight: 12,
                  marginHorizontal: 20,
                }}>
                <Pressable
                  onPress={() => {
                    bathroomsCounter > 0
                      ? setBathroomscounter(bathroomsCounter - 1)
                      : 0;
                  }}>
                  <Images.Counter_minus />
                </Pressable>
                <Text style={styles.counterText}>{bathroomsCounter}</Text>
                <Pressable
                  onPress={() => {
                    setBathroomscounter(bathroomsCounter + 1);
                  }}>
                  <Images.Counter_plus />
                </Pressable>
              </View>
            </CardView>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 25,
              justifyContent: 'space-around',
            }}>
            <CardView
              maxHeight={106}
              carviewStyles={{
                width: 163,
                borderRadius: 14,
              }}
              isCardsquare={true}>
              <Text style={styles.cardheader}>Car parking slots</Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 20,
                  marginRight: 12,
                }}>
                <Pressable
                  onPress={() => {
                    carparking > 0 ? setCarparking(carparking - 1) : 0;
                  }}>
                  <Images.Counter_minus />
                </Pressable>
                <Text style={styles.counterText}>{carparking}</Text>
                <Pressable
                  onPress={() => {
                    setCarparking(carparking + 1);
                  }}>
                  <Images.Counter_plus />
                </Pressable>
              </View>
            </CardView>
            <CardView
              maxHeight={106}
              carviewStyles={{
                width: 163,
                borderRadius: 14,
              }}
              isCardsquare={true}>
              <Text style={styles.cardheader}>Pets Allowed</Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  //   justifyContent: 'center',
                  marginTop: 20,
                  marginHorizontal: 20,
                }}>
                <AppSelectionComponent
                  isMultiSelection={false}
                  options={['']}
                  isCheck={false}
                  isRadio={false}
                  value={isswitch}
                  onValueChange={() => setisSwitch(!isswitch)}
                />
              </View>
            </CardView>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 25,
              justifyContent: 'space-around',
              //marginTop: 16,
            }}>
            <CardView
              maxHeight={70}
              carviewStyles={{
                width: 103,
                borderRadius: 14,
              }}
              isCardsquare={true}>
              <Pressable onPress={() => setisanemeties(true)}>
                <Text style={styles.card2header}>Amenities</Text>
                <Text style={styles.subText}>{amenetiescount} selected</Text>
              </Pressable>
            </CardView>

            <CardView
              maxHeight={70}
              carviewStyles={{
                width: 103,
                borderRadius: 14,
              }}
              isCardsquare={true}>
              <Pressable onPress={() => navigation.navigate('PropertyNotes')}>
                <Text style={styles.card2header}>Notes</Text>
                <Text style={styles.subText}>0 selected</Text>
              </Pressable>
            </CardView>
            <CardView
              maxHeight={70}
              carviewStyles={{
                width: 103,
                borderRadius: 14,
              }}
              isCardsquare={true}>
              <Pressable onPress={() => setisLiable(true)}>
                <Text style={styles.card2header}>Liable</Text>
                <Text style={styles.subText}>{liablecount} selected</Text>
              </Pressable>
            </CardView>
          </View>

          <AppSelectionComponent
            options={[
              'I accept the terms & conditions  to add my property to the canestate platform ',
            ]}
            isMultiSelection={true}
            isCheck={true}
            disabled={false}
            containerStyle={{
              marginHorizontal: 36,
              marginVertical: 15,
            }}
            isTextright={true}
            onValueChange={handleSelection}></AppSelectionComponent>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 26,
              marginHorizontal: 24,
            }}>
            <AppButton
              onPress={() => navigation.navigate('Property_Information')}
              containerStyle={{width: '100%'}}
              bordered={true}
              title={'submit'}
            />
          </View>
        </>
      </View>
      <AppModal
        iscenter={false}
        maxheight={isliable ? 380 : 581}
        visible={isliable ? isliable : isanemeties}
        // isSubmitbutton={true}
        // buttonText="Submit"
        onDrop={() => (isliable ? setisLiable(false) : setisanemeties(false))}>
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
                fontSize: 16,
                fontFamily: fonts.robotoBold,
                fontWeight: '700',
                color: colors.textbalck,
              }}>
              {isliable ? 'Tenant Liability' : 'Amenities'}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: fonts.robotoBold,
                fontWeight: '600',
                color: colors.primarycolor,
              }}>
              Select all
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: colors.greyText,
              borderBottomWidth: 1,
              marginTop: 25,
            }}
          />
          <ScrollView style={{height: 51}}>
            <AppSelectionComponent
              options={isliable ? liable : ameneties}
              isMultiSelection={true}
              isCheck={true}
              disabled={false}
              containerStyle={{
                marginHorizontal: 24,
                marginVertical: 11,
              }}
              // isTextright={true}
              onValueChange={handleSelection}></AppSelectionComponent>
          </ScrollView>
          <View
            style={{
              borderBottomColor: colors.greyText,
              borderBottomWidth: 1,
              marginTop: 5,
              marginBottom: 10,
            }}
          />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 15,
              marginHorizontal: 20,
            }}>
            <AppButton
              title="Update"
              onPress={() =>
                isliable ? setisLiable(false) : setisanemeties(false)
              }
              containerStyle={{width: '100%'}}
              bordered={true}
            />
          </View>
        </>
      </AppModal>
    </>
  );
};

export default Property_Information;
