import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Button,
  StatusBar,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {colors} from '../../utils/colors';
import {screenProps} from '../../utils/types';
import styles from './styles';
import {Images} from '../../assets/Images';
import {Image} from 'react-native';
import AppButton from '../../components/AppButton';
import swiperstyles from '../Onboarding/styles';
import CommonStyles from '../../utils/CommonStyles';
import CardView from '../../components/CardView';
import LinearGradient from 'react-native-linear-gradient';
import {fonts} from '../../utils/fonts';
const properties = [
  {
    id: 1,
    name: 'Listed properties',
    count: '10',
    src: require('../../assets/pngImage/properties.png'),
  },
  {
    id: 2,
    name: 'Active Tenants',
    count: '10',
    src: require('../../assets/pngImage/active_tenants.png'),
  },
  {
    id: 3,
    name: 'Tenant Enquires',
    count: '10',
    src: require('../../assets/pngImage/tenant_enquires.png'),
  },
  {
    id: 4,
    name: 'Pending Dues',
    count: '10',
    src: require('../../assets/pngImage/pending_dues.png'),
  },
];
const Home: React.FC<screenProps> = ({navigation}) => {
  const [isProperty, setisProperty] = useState(false);

  const renderProperties = ({item, index}) => {
    return (
      <View>
        <CardView
          isCardsquare={true}
          maxHeight={197}
          containerStyle={{marginHorizontal: 15}}
          // maxHeight={
          //   item.id === 2 ? 157 : item.id === 1 || item.id % 2 === 0 ? 197 : 157
          // }
          carviewStyles={{backgroundColor: '#E3F6F4', padding: 14}}>
          <Image
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 43,
              marginTop: 20,
              marginBottom: 8,
            }}
            source={item.src}></Image>
          <Text style={styles.listText}>{item.name}</Text>
          <Text
            style={[
              styles.subtextheader,
              {
                marginHorizontal: 16,
                marginTop: 10,
                fontWeight: 'bold',
                fontSize: 24,
              },
            ]}>
            {item.count}
          </Text>
        </CardView>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" translucent={true} />
      <View style={styles.wrapper}>
        <View style={[CommonStyles.Spacebetween, styles.header]}>
          <View>
            <Text style={styles.usernameStyles}>Hello Alex </Text>
            <Text style={styles.subtextheader}>Good Morning </Text>
          </View>

          <TouchableOpacity style={styles.addbuttonStyle}>
            <Text
              style={[
                styles.subtextheader,
                {color: colors.white, fontSize: 15, marginHorizontal: 4},
              ]}>
              + Add
            </Text>
          </TouchableOpacity>
        </View>
        <>
          {isProperty ? (
            <>
              <CardView
                maxHeight={149}
                containerStyle={{
                  marginHorizontal: 28,
                  marginTop: 24,
                }}>
                <LinearGradient
                  start={{x: 0.2, y: 0.25}}
                  end={{x: 0.8, y: 1.0}}
                  locations={[0, 0.9]}
                  colors={[colors.darkgradient, colors.lightgradient]}
                  style={[{height: 149, borderRadius: 20}]}>
                  <View style={CommonStyles.Row}>
                    <View>
                      <Image source={Images.Homedollar} style={{margin: 12}} />
                      <Text
                        style={[
                          styles.subtextheader,
                          {
                            color: colors.white,
                            marginHorizontal: 47,
                            marginBottom: 12,
                            fontWeight: 'bold',
                          },
                        ]}>
                        July{' '}
                      </Text>
                    </View>
                    <View style={styles.verticleLine}></View>
                    <View>
                      <View style={{marginVertical: 8}}>
                        <Text
                          style={[
                            styles.subtextheader,
                            {
                              color: colors.white,
                              marginHorizontal: 47,
                              fontWeight: 'bold',
                            },
                          ]}>
                          Income{' '}
                        </Text>
                        <Text
                          style={[
                            styles.subtextheader,
                            {
                              color: colors.white,
                              fontSize: 15,
                              marginHorizontal: 47,
                              marginTop: 0,
                            },
                          ]}>
                          $ 22,000
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={[
                            styles.subtextheader,
                            {
                              color: colors.white,
                              marginHorizontal: 47,
                              fontWeight: 'bold',
                            },
                          ]}>
                          Expenses{' '}
                        </Text>
                        <Text
                          style={[
                            styles.subtextheader,
                            {
                              color: colors.white,
                              fontSize: 15,
                              marginHorizontal: 47,
                              marginTop: 0,
                            },
                          ]}>
                          $ 5,000
                        </Text>
                      </View>
                    </View>
                  </View>
                </LinearGradient>
              </CardView>
              <FlatList
                data={properties}
                contentContainerStyle={{paddingHorizontal: 20}}
                renderItem={renderProperties}
                numColumns={2}
                keyExtractor={(_, i) => _.id.toString()}
              />
            </>
          ) : (
            <>
              <View style={styles.slider1}>
                <Image source={Images.HomeImg} style={styles.pngstyle} />

                <Text style={[styles.subtext, {marginTop: 36}]}>
                  Connect your property with us & Make life easier
                </Text>
              </View>
              <View style={CommonStyles.CenterAlign}>
                <AppButton
                  onPress={() => {
                    setisProperty(true);
                  }}
                  bordered={true}
                  title={'list your property'}
                  containerStyle={{marginTop: 40}}
                />
              </View>
            </>
          )}
        </>
      </View>
    </SafeAreaView>
  );
};

export default Home;
