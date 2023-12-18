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
import {screenProps} from '../../utils/types';

const Onboarding: React.FC<screenProps> = ({navigation}) => {
  const [ind, setind] = useState<number>(0);
  const [ispagination, setispagination] = useState<boolean>(false);
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const swiperRef = useRef<any>();

  const indexChanged = (index: number) => {
    console.log(index);
    setind(index);
    index != 3 ? setispagination(true) : setispagination(false);
  };

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
        dot={<View style={styles.dotstyle} />}
        activeDot={<View style={styles.activedot} />}
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
    </View>
  );
};

export default Onboarding;
