import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Alert,
  TextInput,
  TextStyle,
  PermissionsAndroid,
} from 'react-native';
import {colors} from '../../utils/colors';
import {screenProps} from '../../utils/types';
import MapView, {Marker, PROVIDER_GOOGLE, Region} from 'react-native-maps';
import {AppModal} from '../../components/AppModal';
import {Text} from 'react-native';
import {fonts} from '../../utils/fonts';
import {Images} from '../../assets/Images';
import AppButton from '../../components/AppButton';
import CommonStyles from '../../utils/CommonStyles';
import Geolocation from '@react-native-community/geolocation';
import styles from './styles';
const Property_Onboarding: React.FC<screenProps> = ({navigation}) => {
  const [searchText, setsearchText] = useState('');
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message:
            'This app needs access to your location for the map functionality.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setPermissionGranted(true);
        getCurrentLocation();
      } else {
        setPermissionGranted(false);
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;

        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      error => {
        console.error('Error getting current location:', error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };
  const handleSearch = async () => {
    try {
      // Use a geocoding service to get the coordinates of the searched location
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          searchText,
        )}&key=AIzaSyBmYH2rttkMAlflfa9YbINe0Ks-sCfI2x0`,
      );

      const data = await response.json();
      console.log(data, 'dataaaaaaaaaa');
      if (data.results.length > 0) {
        const location = data.results[0].geometry.location;

        // Update the region to the searched location
        // setRegion({
        //   latitude: location.lat,
        //   longitude: location.lng,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // });
      }
    } catch (error) {
      console.error('Error searching for the location:', error);
    }
  };

  const handleRegionChange = (
    newRegion: React.SetStateAction<{
      latitude: number;
      longitude: number;
      latitudeDelta: number;
      longitudeDelta: number;
    }>,
  ) => {
    // Update the region whenever the map region changes
    //setRegion(newRegion);
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <MapView
            style={styles.mapStyle}
            provider={PROVIDER_GOOGLE}
            region={region}
            onRegionChange={handleRegionChange}>
            <Marker
              coordinate={{
                latitude: region.latitude,
                longitude: region.longitude,
              }}
            />
          </MapView>

          <View style={styles.modalstyle}>
            <Text style={styles.mapheader}>Property Address</Text>
            <View style={styles.inputview}>
              <View style={styles.row}>
                <Images.Red_dot
                  marginLeft={16}
                  marginTop={16}
                  marginBottom={16}
                />
                <TextInput
                  style={styles.input}
                  value={searchText}
                  onChangeText={value => setsearchText(value)}
                  keyboardType="default"
                  placeholder="Enter Property Address"
                  onSubmitEditing={handleSearch}
                />
              </View>

              <View style={styles.row}>
                <Images.CurrentLocation
                  marginLeft={16}
                  marginTop={16}
                  marginBottom={16}
                />
              </View>
            </View>
            <View style={[CommonStyles.CenterAlign, {marginTop: 24}]}>
              <AppButton
                onPress={() => navigation.navigate('Confirm_Address')}
                bordered={true}
                title={'Let’s begin'}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Property_Onboarding;
