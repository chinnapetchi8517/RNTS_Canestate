import React, {useState, useRef} from 'react';
import {View, Text, Button, StatusBar, TextInput} from 'react-native';
import {colors} from '../../utils/colors';
import Swiper from 'react-native-swiper';
import styles from './styles';
import {Images} from '../../assets/Images';
import AppButton from '../../components/AppButton';
import CommonStyles, {margin} from '../../utils/CommonStyles';

import AppSelectionComponent from '../../components/AppSelectionComponent';
import TextAreaComponent from '../../components/TextareaComponent';
import {AppModal} from '../../components/AppModal';
import CardView from '../../components/CardView';
interface OnboardingProps {
  navigation: any;
}

const Onboarding: React.FC<OnboardingProps> = ({navigation}) => {
  const [ind, setind] = useState<number>(0);
  const [ispagination, setispagination] = useState<boolean>(false);
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const swiperRef = useRef<any>();

  const indexChanged = (index: number) => {
    console.log(index);
    if (index === 3) {
      setispagination(false);
    } else {
      setispagination(true);
    }
  };
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
      <Swiper
        loop={false}
        ref={swiperRef}
        showsPagination={ispagination}
        bounces={true}
        onIndexChanged={(index: number) => indexChanged(index)}
        paginationStyle={{bottom: 15}}
        dot={<View style={styles.dotstyle} />}
        activeDot={<View style={styles.activedot} />}
        //style={styles.wrapper}
        showsButtons={false}>
        <View style={styles.slider1}>
          <Images.Intro1 width={307} height={359} marginTop={76} />
          <Text style={styles.text}>AI Property Management</Text>
          <Text style={styles.subtext}>
            Our Ai system is designed to mitigate workloads & improve
            efficiency.
          </Text>
          <AppButton
            onPress={() => swiperRef.current.scrollBy(1)}
            bordered={true}
            size="extralarge"
            title={'NEXT'}
            containerStyle={styles.button}
          />
        </View>
        <View style={styles.slider1}>
          <Images.Intro2 width={307} height={359} marginTop={76} />
          <Text style={styles.text}>Auto Rent collection</Text>
          <Text style={styles.subtext}>
            No Need knock any tenants for rent {'\n'}collection
          </Text>
          <AppButton
            onPress={() => swiperRef.current.scrollBy(1)}
            bordered={true}
            title={'NEXT'}
            containerStyle={styles.button}
          />
        </View>
        <View style={styles.slider1}>
          <Images.Intro3 width={307} height={359} marginTop={76} />
          <Text style={styles.text}>Tenant Evaluation System</Text>
          <Text style={styles.subtext}>
            Evaluate the tenants with preloaded credit score and background
            info's.
          </Text>
          <AppButton
            onPress={() => swiperRef.current.scrollBy(1)}
            bordered={true}
            title={'NEXT'}
            containerStyle={styles.button}
          />
        </View>
        <View style={styles.slider4}>
          <Images.Intro4 width={326} height={581} marginTop={35} />

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

          <AppButton
            onPress={() => navigation.navigate('Otp')}
            bordered={true}
            title={'GET STARTED'}
            containerStyle={{
              ...styles.button,
              ...{marginTop: 42},
            }}
          />
        </View>
      </Swiper>
      {/* <View style={{marginTop: 50, marginHorizontal: 20}}> */}

      {/* <AppSelectionComponent
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
    </>
  );
};

export default Onboarding;
