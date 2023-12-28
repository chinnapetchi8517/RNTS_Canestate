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
  Pressable,
} from 'react-native';
import {colors} from '../../../utils/colors';
import {screenProps} from '../../../utils/types';
import styles from './styles';
import Swiper from 'react-native-swiper';
import swiperstyle from '../../Onboarding/styles';
import CommonStyles from '../../../utils/CommonStyles';
import {Images} from '../../../assets/Images';
import CardView from '../../../components/CardView';
const roomsdata = [
  {id: 1, room: 'Room 1'},
  {id: 2, room: 'Room 2'},
  {id: 3, room: 'Room 3'},
  {id: 4, room: 'Room 4'},
];
const Room_Information: React.FC<screenProps> = ({navigation}) => {
  const renderRoomData = ({item, index}) => {
    return (
      <CardView
        maxHeight={80}
        carviewStyles={{
          width: 358,
          borderTopLeftRadius: 23,
          borderBottomLeftRadius: 23,
        }}
        containerStyle={{
          marginHorizontal: 20,
          borderTopLeftRadius: 23,
          borderBottomLeftRadius: 23,
        }}
        customRightcornerStyle={{backgroundColor: colors.green}}
        ismulticolor={true}>
        <Pressable
          onPress={() => navigation.navigate('RoomDetail', {id: index + 1})}
          style={{marginVertical: 16}}>
          <View style={CommonStyles.Spacebetween}>
            <View style={CommonStyles.Row}>
              <Image
                style={{width: 48, height: 48, marginLeft: 24}}
                source={require('../../../assets/pngImage/room.png')}
              />
              <View>
                <Text
                  style={[styles.subheaderText, {fontSize: 18, marginTop: 0}]}>
                  {item.room}
                </Text>
                <Text style={styles.VacantText}>Vacant</Text>
              </View>
            </View>
            <View style={{marginHorizontal: 20}}>
              <Images.Share />
            </View>
          </View>
        </Pressable>
      </CardView>
    );
  };
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={colors.white}
      />
      {/* <Swiper>
        <ImageBackground
          style={{height: 258}}
          source={require('../../../assets/pngImage/property_info.png')}></ImageBackground>
      </Swiper> */}

      <Swiper
        loop={false}
        bounces={true}
        dot={<View style={styles.dotstyle} />}
        activeDot={<View style={styles.activedot} />}
        showsButtons={false}>
        <ImageBackground
          style={{height: 258}}
          source={require('../../../assets/pngImage/property_info.png')}></ImageBackground>
        <ImageBackground
          style={{height: 258}}
          source={require('../../../assets/pngImage/property_info.png')}></ImageBackground>
        <ImageBackground
          style={{height: 258}}
          source={require('../../../assets/pngImage/property_info.png')}></ImageBackground>
        <ImageBackground
          style={{height: 258}}
          source={require('../../../assets/pngImage/property_info.png')}></ImageBackground>
      </Swiper>
      <View style={styles.wrapper}>
        <View>
          <View style={{flexDirection: 'row', height: 140}}>
            <View style={{width: '93%'}}>
              <View style={{backgroundColor: colors.white}}>
                <Text style={styles.subheaderText}>1055 N Smiderle Loop</Text>
                <View style={[CommonStyles.Spacebetween]}>
                  <View style={CommonStyles.Row}>
                    <Text style={styles.bgText}>lower sack-vile</Text>
                    <Text style={styles.bgText}>full unit</Text>
                  </View>
                  <View style={{marginHorizontal: 16}}>
                    <Images.ProfileEdit />
                  </View>
                </View>
                <View style={[CommonStyles.Row, {padding: 16}]}>
                  <View style={CommonStyles.Row}>
                    <Images.Bed />
                    <Text style={styles.countText}>3</Text>
                  </View>
                  <View style={[CommonStyles.Row, {marginHorizontal: 16}]}>
                    <Images.Bath />
                    <Text style={styles.countText}>1</Text>
                  </View>
                  <View style={CommonStyles.Row}>
                    <Images.Car />
                    <Text style={styles.countText}>3</Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{backgroundColor: '#60D7AF', justifyContent: 'center'}}>
              <Text style={styles.ActiveText}>Active</Text>
            </View>
          </View>
        </View>
        <FlatList renderItem={renderRoomData} data={roomsdata}></FlatList>
      </View>
    </>
  );
};

export default Room_Information;
