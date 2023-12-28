import React, {useState, useRef} from 'react';
import {View, Text, Button, StatusBar, FlatList, Image} from 'react-native';
import {colors} from '../../utils/colors';
import {screenProps} from '../../utils/types';
import styles from './styles';
import CommonStyles from '../../utils/CommonStyles';
import CardView from '../../components/CardView';
import {Images} from '../../assets/Images';
import Geolocation from '@react-native-community/geolocation';

const properties = [
  {
    id: 1,
    name: 'Properties',
    text1: '2 Active',
    text2: '1 Maintenance',
    count: '10',
    src: require('../../assets/pngImage/properties.png'),
  },
  {
    id: 2,
    name: 'Tenants',
    text1: '7 Individuals',
    text2: '10 Family',
    count: '10',
    src: require('../../assets/pngImage/active_tenants.png'),
  },
  {
    id: 3,
    name: 'Agreement',
    text1: '7 Active',
    text2: '2 Expiring',
    count: '10',
    src: require('../../assets/pngImage/tenant_enquires.png'),
  },
  {
    id: 4,
    name: 'Open Houses',
    text1: '1 Active',
    text2: '10 Scheduled',
    count: '10',
    src: require('../../assets/pngImage/pending_dues.png'),
  },
  {
    id: 5,
    name: 'Maintenance',
    count: '10',
    text1: '7 New',
    text2: '10 Progressing',
    src: require('../../assets/pngImage/pending_dues.png'),
  },
  {
    id: 6,
    name: 'Messages',
    count: '10',
    text1: '0 Enquires',
    text2: '10 Tenant',
    src: require('../../assets/pngImage/pending_dues.png'),
  },
];
const More: React.FC<screenProps> = ({navigation}) => {
  const renderProperties = ({item,index}) => {
    return (
      <View>
        <CardView
          onPress={() => index===0? navigation.navigate('Properties') :  navigation.navigate('Property_Onboarding')}
          isCardsquare={true}
          maxHeight={197}
          containerStyle={{marginHorizontal: 15}}
          // maxHeight={
          //   item.id === 2 ? 157 : item.id === 1 || item.id % 2 === 0 ? 197 : 157
          // }
          carviewStyles={{backgroundColor: '#E3F6F4'}}>
          <Image
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 43,
              marginTop: 20,
              marginBottom: 8,
            }}
            source={item.src}></Image>
          <Text style={styles.subtextheader}>{item.name}</Text>
          <View
            style={[CommonStyles.Row, {marginHorizontal: 16, marginTop: 5}]}>
            <Images.Blue_dot />
            <Text style={[styles.listText]}>{item.text1}</Text>
          </View>
          <View
            style={[CommonStyles.Row, {marginHorizontal: 16, marginTop: 5}]}>
            <Images.Red_dot />
            <Text style={[styles.listText]}>{item.text2}</Text>
          </View>
        </CardView>
      </View>
    );
  };
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={colors.white}
      />
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.usernameStyles}>Dashboard </Text>
        </View>
        <FlatList
          data={properties}
          contentContainerStyle={{marginHorizontal: 20, marginTop: 15}}
          renderItem={renderProperties}
          numColumns={2}
          keyExtractor={(_, i) => _.id.toString()}
        />
      </View>
    </>
  );
};

export default More;
