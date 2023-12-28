import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
  Text,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import {LiquidLike} from 'react-native-animated-pagination-dots';
import {colors} from '../../utils/colors';
import Styles from './styles';
import {Images} from '../../assets/Images';
import AppButton from '../../components/AppButton';
import CommonStyles, {margin} from '../../utils/CommonStyles';

import AppSelectionComponent from '../../components/AppSelectionComponent';
import TextAreaComponent from '../../components/TextareaComponent';
import {AppModal} from '../../components/AppModal';
import CardView from '../../components/CardView';
import {screenProps} from '../../utils/types';

const {width} = Dimensions.get('screen');

const data = [
  {
    image: require('../../assets/pngImage/intro1.png'),
    des: ' Our Ai system is designed to mitigate workloads & improve efficiency.',
  },
  {
    image: require('../../assets/pngImage/intro2.png'),
    des: 'No Need knock any tenants for rent collection',
  },
  {
    image: require('../../assets/pngImage/intro3.png'),
    des: 'Evaluate the tenants with preloaded credit score and background infos.',
  },
  {
    image: require('../../assets/pngImage/intro4.png'),
    des: '',
  },
];

const imageW = width * 0.7;
const imageH = imageW * 1.4;

const Onboarding: React.FC<screenProps> = ({navigation}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  let scrollOffset = React.useRef(new Animated.Value(0)).current;
  const keyExtractor = React.useCallback((_, index) => index.toString(), []);
  //Current item index of flatlist
  const [activeIndex, setActiveIndex] = React.useState(0);
  let flatListRef = React.useRef(null);
  const gotoNextPage = () => {
    console.log('activeIndex:::: ', activeIndex);

    if (activeIndex + 1 < data.length) {
      // @ts-ignore
      flatListRef.current.scrollToIndex({
        index: activeIndex + 1,
        animated: true,
      });
    } else {
      navigation.navigate('Otp');
    }
  };
  // const gotoPrevPage = () => {
  //   if (activeIndex !== 0) {
  //     // @ts-ignore
  //     flatListRef.current.scrollToIndex({
  //       index: activeIndex - 1,
  //       animated: true,
  //     });
  //   }
  // };
  // const skipToStart = () => {
  //   // @ts-ignore
  //   flatListRef.current.scrollToIndex({
  //     index: data.length - 1,
  //     animated: true,
  //   });
  // };
  //Flatlist props that calculates current item index
  const onViewRef = React.useRef(({viewableItems}: any) => {
    console.log('viewableItems::: ', JSON.stringify(viewableItems));
    setActiveIndex(viewableItems[0]?.index);
  });
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});
  const renderItem = React.useCallback(({item, index}) => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.itemContainer, {backgroundColor: 'white'}]}>
          <Animated.Image
            style={{
              width: 300,
              height: index !== 3 ? 400 : 600,
              borderRadius: 20,
              resizeMode: index !== 3 ? 'contain' : 'cover',
              marginTop: index !== 3 ? 40 : 60,
              backgroundColor: 'white',
            }}
            source={item.image}
          />
          {index !== 3 ? (
            <>
              <Text style={Styles.text}>AI Property Management</Text>
              <Text style={[Styles.subtext, {marginTop: 25}]}>{item.des}</Text>
            </>
          ) : (
            <>
              <View style={Styles.inputview}>
                <View style={Styles.row}>
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
                  style={Styles.input}
                  keyboardType="numeric"
                  placeholder="Enter phone number"
                />
              </View>
            </>
          )}
        </View>
      </ScrollView>
    );
  }, []);

  return (
    <View style={[styles.container]}>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={colors.white}
      />
      {/* <View style={[StyleSheet.absoluteFillObject]}>
        {data.map((item, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const colorFade = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });
          return (
            <Animated.View
              key={index}
              style={[
                StyleSheet.absoluteFillObject,
                { backgroundColor: item.backgroundColor, opacity: colorFade },
              ]}
            />
          );
        })}
      </View> */}

      <Animated.FlatList
        ref={flatListRef}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        decelerationRate={'normal'}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
      />
      {/* {console.log('scrollX::: ', scrollX, activeIndex)} */}
      {activeIndex !== 3 ? (
        <LiquidLike
          data={data}
          scrollX={scrollX}
          scrollOffset={scrollX}
          dotSize={8}
          inActiveDotOpacity={0.2}
          activeDotColor={colors.primarycolor}
          inActiveDotColor={colors.secondarycolor}
          containerStyle={{marginBottom: 50}}
        />
      ) : null}

      <AppButton
        onPress={() => {
          gotoNextPage();
          // activeIndex === 3
          //   ? navigation.navigate('Otp')
          //   : swiperRef.current.scrollBy(1);
        }}
        bordered={true}
        size="extralarge"
        title={activeIndex === 3 ? 'GET STARTED' : 'NEXT'}
        containerStyle={styles.button}
      />
      {/* <View style={[styles.buttonContainer]}>
        
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => gotoNextPage()}
        >
          <Text style={[styles.buttonText]}>Next</Text>
        </TouchableOpacity>
        
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  itemContainer: {
    width,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    marginVertical: 20,
    fontWeight: '700',
  },
  buttonText: {
    color: '#fff',
  },
});

export default Onboarding;
