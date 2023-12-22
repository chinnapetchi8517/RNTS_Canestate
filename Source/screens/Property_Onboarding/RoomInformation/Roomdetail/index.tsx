import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StatusBar,
  TextInput,
  Image,
  ImageBackground,
  FlatList,
  ScrollView,
  Pressable,
} from 'react-native';
import {colors} from '../../../../utils/colors';
import {screenProps} from '../../../../utils/types';
import styles from '../styles';
import Swiper from 'react-native-swiper';
import CommonStyles, {BorderRadius} from '../../../../utils/CommonStyles';
import {Images} from '../../../../assets/Images';
import CardView from '../../../../components/CardView';
import {useRoute} from '@react-navigation/native';
import AppButton from '../../../../components/AppButton';
import TextAreaComponent from '../../../../components/TextareaComponent';
import AppSelectionComponent from '../../../../components/AppSelectionComponent';
import {AppModal} from '../../../../components/AppModal';
import {fonts} from '../../../../utils/fonts';
const roomsdata = [
  {id: 1, room: 'Room 1'},
  {id: 2, room: 'Room 2'},
  {id: 3, room: 'Room 3'},
  {id: 4, room: 'Room 4'},
];
const furnished = ['single Bed', 'Double Bed'];
const furnished2 = ['Fan', 'Light', 'Ac', 'Chair', 'Table'];
const Addons = ['Shared', 'street Parking', 'Private'];
const RoomDetail: React.FC<screenProps> = ({navigation}) => {
  const route = useRoute();
  const Id = route?.params?.id;
  const [roomno, setRoomno] = useState('');
  const [roomname, setRoomname] = useState('');
  const [ismodalvisible, setmodalVisible] = useState(false);
  const [selectValue, setselectValue] = useState();

  console.log(Id, 'IdIdId');

  useEffect(() => {
    navigation.setOptions({
      title: `Room ${Id}`,
    });
  }, []);
  const handleSelection = (selected: any, index: any) => {
    console.log('Selected:', index, selected);
    setselectValue(index);
    if (index === 1 || index === 2) {
      setmodalVisible(true);
    }
    // Do something with the selected value(s)
  };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={colors.white}
      />

      <View style={{width: '100%'}}>
        <ImageBackground
          style={{height: 218}}
          source={require('../../../../assets/pngImage/property_info.png')}>
          <View style={{top: 165, right: 10, position: 'absolute'}}>
            <AppButton
              //   onPress={() => openImagePicker()}
              containerStyle={[BorderRadius(6), {height: 38}]}
              textStyle={{textTransform: 'none'}}
              size="medium"
              title="Upload Photo"
            />
          </View>
        </ImageBackground>
      </View>
      <View style={[styles.wrapper, {backgroundColor: 'white'}]}>
        <View style={CommonStyles.Row}>
          <TextAreaComponent
            maxHeight={50}
            value={roomno}
            editable={false}
            setInputValue={val => setRoomno(val)}
            placeholderText={'Room no'}
            inputStyle={{paddingRight: 30}}
            containerStyle={styles.inputcontainerStyle}
          />
          <TextAreaComponent
            editable={false}
            maxHeight={50}
            value={roomname}
            setInputValue={val => setRoomname(val)}
            placeholderText={'Room name'}
            inputStyle={{color: colors.textbalck}}
            containerStyle={styles.inputcontainerStyle1}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 16,
            marginTop: 12,
            backgroundColor: 'white',
            borderRadius: 15,
            shadowColor: 'black',
            elevation: 0.4,
          }}>
          {/* <AppSelectionComponent
            options={options}
            onSelect={handleOptionSelect}
          /> */}

          <AppSelectionComponent
            options={['Small', 'Medium', 'Large']}
            isMultiSelection={false}
            isRadio={true}
            isTextright={true}
            disabled={false}
            value={selectValue}
            containerStyle={{
              marginHorizontal: 16,
              paddingHorizontal: 10,
              paddingVertical: 18,

              //paddingBottom: 18,
            }}
            onValueChange={handleSelection}
          />
        </View>
        <Pressable
          //   onPress={() => setmodalVisible(true)}
          style={{
            // flexDirection: 'row',
            // justifyContent: 'space-between',
            marginHorizontal: 16,
            marginTop: 12,
            backgroundColor: 'white',
            borderRadius: 15,
          }}>
          <AppSelectionComponent
            options={['Private', 'Furnished', 'Add-ons']}
            isMultiSelection={false}
            isRadio={false}
            isCheck={false}
            isTextright={false}
            disabled={false}
            containerStyle={{
              marginHorizontal: 16,
              paddingHorizontal: 10,
              paddingVertical: 18,
              height: 84,
              marginTop: 16,
              backgroundColor: 'white',
              borderRadius: 15,
              shadowColor: 'black',
              elevation: 0.4,
              //paddingBottom: 18,
            }}
            labelStyle={{color: colors.textbalck}}
            onValueChange={handleSelection}
          />
        </Pressable>
        <View
          style={{
            marginHorizontal: 20,
            justifyContent: 'center',
            marginTop: 40,
            bottom: 0,
          }}>
          <AppButton
            containerStyle={{width: '100'}}
            title="Next"
            bordered={true}
          />
        </View>
      </View>
      <AppModal
        iscenter={false}
        maxheight={selectValue === 2 ? 280 : 450}
        visible={ismodalvisible}
        // isSubmitbutton={true}
        // buttonText="Submit"
        onDrop={() => setmodalVisible(false)}>
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
              {selectValue === 2 ? 'Add-ons' : 'Furnished'}
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
            {selectValue != 2 ? (
              <AppSelectionComponent
                options={furnished}
                isMultiSelection={false}
                isRadio={true}
                disabled={false}
                containerStyle={{
                  marginHorizontal: 24,
                  marginVertical: 11,
                }}
                // isTextright={true}
                //   onValueChange={handleSelection}
              ></AppSelectionComponent>
            ) : null}
            <AppSelectionComponent
              options={selectValue != 2 ? furnished2 : Addons}
              isMultiSelection={true}
              isCheck={true}
              disabled={false}
              containerStyle={{
                marginHorizontal: 12,
                marginVertical: 11,
              }}
              textContainerStyle={{marginLeft: 15}}
              // isTextright={true}
              //   onValueChange={handleSelection}
            ></AppSelectionComponent>
          </ScrollView>
          <View
            style={{
              borderBottomColor: colors.greyText,
              borderBottomWidth: 1,
              marginTop: 5,
              marginBottom: 5,
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
              onPress={() => setmodalVisible(false)}
              containerStyle={{width: '100%'}}
              bordered={true}
            />
          </View>
        </>
      </AppModal>
    </>
  );
};

export default RoomDetail;
function indexOf(selected: any): any {
  throw new Error('Function not implemented.');
}
