import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Button,
  StatusBar,
  TextInput,
  //Animated,
  Dimensions,
} from 'react-native';
import {colors} from '../../utils/colors';
import Swiper from 'react-native-swiper';
import styles from './styles';
import {Images} from '../../assets/Images';
import AppButton from '../../components/AppButton';
import CommonStyles, {margin} from '../../utils/CommonStyles';

import {CustomSelectionControl} from '../../components/CustomSelectionControl';

import TextAreaComponent from '../../components/TextareaComponent';
import {AppModal} from '../../components/AppModal';
import CardView from '../../components/CardView';
import {screenProps} from '../../utils/types';
import Animated, {
  interpolate,
  ExtrapolationType,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];
const Onboarding: React.FC<screenProps> = ({navigation}) => {
  const [ind, setind] = useState<number>(0);
  const [ispagination, setispagination] = useState<boolean>(false);
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const swiperRef = useRef<any>();
  //const scrollX = useRef(new Animated.Value(0)).current;
  const activeDotIndex = useSharedValue(0);

  const indexChanged = (index: number) => {
    console.log(index);
    activeDotIndex.value = index;
    setind(index);
    index != 3 ? setispagination(true) : setispagination(false);
  };
  const {width} = Dimensions.get('screen');
  var inputRange: any;
  data.map(
    (item, index) =>
      (inputRange = [(index - 1) * width, index * width, (index + 1) * width]),
  );
  console.log(inputRange, 'indexvindex');

  // const dotWidth =interpolate({
  //   inputRange,
  //   outputRange: [12, 30, 12],
  //   extrapolate: 'clamp',
  // });

  // const interpolatedOpacity = interpolate(activeDotIndex.value, {
  //   inputRange: [0, 1],
  //   outputRange: [0.5, 1],

  //   extrapolate: Extrapolation.CLAMP,
  // });
  //  interpolate(activeDotIndex.value, {
  //   inputRange,
  //   outputRange: [12, 30, 12],
  //   extrapolate: Extrapolate.CLAMP,
  // });
  // const opacity = scrollX.interpolate({
  //   inputRange: [0, 100],
  //   outputRange: ['0deg', '360deg'],
  //   extrapolate: 'clamp',
  // });

  // const backgroundColor = scrollX.interpolate({
  //   inputRange: [0, 100],
  //   outputRange: ['0deg', '360deg'],
  //   extrapolate: 'clamp',
  // });

  const dotStyle1 = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(activeDotIndex.value * 10), // Adjust the translation distance as needed
        },
      ],
    };
  });
  return (
    <View
      style={[
        styles.wrapper,

        {backgroundColor: ind === 3 ? colors.white : ''},
      ]}>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={colors.white}
      />
      <Swiper
        loop={false}
        ref={swiperRef}
        index={ind}
        showsPagination={ind === 3 ? false : true}
        bounces={true}
        onIndexChanged={(index: number) => indexChanged(index)}
        paginationStyle={{bottom: 15}}
        dot={
          <Animated.View
            style={[
              styles.dotstyle,
              dotStyle1,
              // {width: dotWidth},
              // idx === index && styles.dotActive,
            ]}
          />
        }
        activeDot={
          <Animated.View
            style={[
              styles.activedot,
              {width: 20},
              dotStyle1,
              // idx === index && styles.dotActive,
            ]}
          />
        }
        showsButtons={false}>
        <View style={styles.slider1}>
          <Images.Intro1 width={307} height={359} marginTop={76} />
          <Text style={styles.text}>AI Property Management</Text>
          <Text style={styles.subtext}>
            Our Ai system is designed to mitigate workloads & improve
            efficiency.
          </Text>
        </View>
        <View style={styles.slider1}>
          <Images.Intro2 width={307} height={359} marginTop={76} />
          <Text style={styles.text}>Auto Rent collection</Text>
          <Text style={styles.subtext}>
            No Need knock any tenants for rent {'\n'}collection
          </Text>
        </View>
        <View style={styles.slider1}>
          <Images.Intro3 width={307} height={359} marginTop={76} />
          <Text style={styles.text}>Tenant Evaluation System</Text>
          <Text style={styles.subtext}>
            Evaluate the tenants with preloaded credit score and background
            info's.
          </Text>
        </View>
        <View style={styles.slider4}>
          <Images.Intro4 width={326} height={581} marginTop={35} />
        </View>
      </Swiper>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        {ind === 3 ? (
          <View style={styles.inputview}>
            <View style={styles.row}>
              <Images.Countrypicker
                width={27}
                height={20}
                marginLeft={16}
                marginTop={16}
                marginBottom={16}
              />
              <Images.Downicon marginLeft={6} />
            </View>

            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Enter phone number"
            />
          </View>
        ) : null}
        <AppButton
          onPress={() => {
            ind === 3
              ? navigation.navigate('Otp')
              : swiperRef.current.scrollBy(1);
          }}
          bordered={true}
          size="extralarge"
          title={ind === 3 ? 'GET STARTED' : 'NEXT'}
          containerStyle={styles.button}
        />
      </View>
      {/* <View style={{marginTop: 50, marginHorizontal: 20}}> */}

      {/* <CustomSelectionControl
          options={['Option 1', 'Option 2', 'Option 3']}
          isMultiSelection={false}
          rightlabel={'Fixed'}
          isCheck={true}
          //isRadio={true}
          isTextright={true}
          disabled={false}
          containerStyle={margin(30, 8)}
          label={'ON'}
          onValueChange={handleSelection}
        /> */}
      {/* <TextAreaComponent
          isInputFocus={isInputFocus}
          setIsInputFocus={setIsInputFocus}
          value={inputValue}
          setInputValue={setInputValue}
        /> */}
      {/* <Button
          title={'button'}
          onPress={() => setispagination(!ispagination)}></Button>
        <AppModal
          isSubmitbutton={true}
          iscenter={false}
          maxheight={530}
          onDrop={() => setispagination(!ispagination)}
          visible={ispagination}></AppModal> */}
      {/* <CardView></CardView> */}
      {/* </View> */}
    </View>
  );
};

export default Onboarding;
