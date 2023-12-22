import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Button,
  StatusBar,
  TextInput,
  Pressable,
} from 'react-native';
import {colors} from '../../../utils/colors';
import {screenProps} from '../../../utils/types';
import styles from './styles';
import AppSelectionComponent from '../../../components/AppSelectionComponent';
import {Images} from '../../../assets/Images';
import CommonStyles, {margin, marginTBRL} from '../../../utils/CommonStyles';
import AppButton from '../../../components/AppButton/index';
import {fonts} from '../../../utils/fonts';
import CardView from '../../../components/CardView';
import {AppModal} from '../../../components/AppModal';
import {BorderRadius} from '../../../utils/CommonStyles';
const Summary: React.FC<screenProps> = ({navigation}) => {
  const [preoid1, setPreoid1] = useState(false);
  const [preoid2, setPreoid2] = useState(false);
  const [preoid3, setPreoid3] = useState(false);
  const [preoid4, setPreoid4] = useState(false);
  const [amenetiescount, setamenetiescount] = useState(0);
  const [liablecount, setliablecount] = useState(0);
  const [isrent, setIsrent] = useState(false);
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={colors.white}
      />
      <View style={styles.wrapper}>
        <View style={styles.rentViewstyle}>
          <Text style={styles.totalrentText}>Total rent</Text>
          <Text style={styles.rentText}>$ 0</Text>
        </View>

        <AppSelectionComponent
          options={['Availability']}
          isMultiSelection={true}
          isCheck={false}
          disabled={false}
          containerStyle={styles.availabkeView}
          textContainerStyle={{marginHorizontal: 24}}
          isTextright={false}
          // onValueChange={handleSelection}
        ></AppSelectionComponent>
        <View
          style={[
            styles.availabkeView,
            {flexDirection: 'row', justifyContent: 'space-between', height: 50},
          ]}>
          <Text
            style={[styles.totalrentText, {color: '#B8B6B6', marginTop: 0}]}>
            move in date
          </Text>
          <Images.Calendar />
        </View>
        <View style={[styles.availabkeView]}>
          <View style={[CommonStyles.Row, marginTBRL(10, 0, 0, 0)]}>
            <Text style={styles.text}>Contract Type</Text>
            <AppSelectionComponent
              options={['Fixed', 'Monthly']}
              isCheck={false}
              isRadio={true}
              disabled={false}
              //containerStyle={styles.availabkeView}
              containerStyle={margin(10, 0)}
              isTextright={true}
              // onValueChange={handleSelection}
            ></AppSelectionComponent>
          </View>
          <Text style={[styles.text]}>Period</Text>
          <View
            style={[
              CommonStyles.Spacebetween,
              {marginTop: 16, marginHorizontal: 24},
            ]}>
            <AppButton
              onPress={() => {
                setPreoid1(true),
                  setPreoid2(false),
                  setPreoid3(false),
                  setPreoid4(false);
              }}
              containerStyle={[
                BorderRadius(25),
                {
                  borderColor: preoid1 ? colors.primarycolor : colors.border,
                  height: 40,
                },
              ]}
              textStyle={[
                styles.selectText,
                {
                  color: preoid1 ? colors.primarycolor : colors.borderText,
                },
              ]}
              size="medium"
              bordered={true}
              mode={'light'}
              title={'Nothing'}
            />
            <AppButton
              onPress={() => {
                setPreoid1(false),
                  setPreoid2(true),
                  setPreoid3(false),
                  setPreoid4(false);
              }}
              containerStyle={[
                BorderRadius(25),
                {
                  borderColor: preoid2 ? colors.primarycolor : colors.border,
                  height: 40,
                },
              ]}
              textStyle={[
                styles.selectText,
                {
                  color: preoid2 ? colors.primarycolor : colors.borderText,
                },
              ]}
              size="medium"
              bordered={true}
              mode={'light'}
              title={'04 months'}
            />
          </View>
          <View
            style={[
              CommonStyles.Spacebetween,
              {marginTop: 16, marginHorizontal: 24},
            ]}>
            <AppButton
              onPress={() => {
                setPreoid1(false),
                  setPreoid2(false),
                  setPreoid3(true),
                  setPreoid4(false);
              }}
              containerStyle={[
                BorderRadius(25),
                {
                  borderColor: preoid3 ? colors.primarycolor : colors.border,
                  height: 40,
                },
              ]}
              textStyle={[
                styles.selectText,
                {
                  color: preoid3 ? colors.primarycolor : colors.borderText,
                },
              ]}
              size="medium"
              bordered={true}
              mode={'light'}
              title={'08 months'}
            />
            <AppButton
              onPress={() => {
                setPreoid1(false),
                  setPreoid2(false),
                  setPreoid3(false),
                  setPreoid4(true);
              }}
              containerStyle={[
                BorderRadius(25),
                {
                  borderColor: preoid4 ? colors.primarycolor : colors.border,
                  height: 40,
                },
              ]}
              textStyle={[
                styles.selectText,
                {
                  color: preoid4 ? colors.primarycolor : colors.borderText,
                },
              ]}
              size="medium"
              bordered={true}
              mode={'light'}
              title={'12 months'}
            />
          </View>
          <View style={[CommonStyles.Row, margin(24, 24)]}>
            <Images.Alert />
            <Text style={styles.text}>
              Fixed contract with 4 months closed period.
            </Text>
          </View>
        </View>
        <View style={styles.CardView}>
          <View style={[styles.availabkeView, styles.card]}>
            <Pressable onPress={() => setIsrent(true)}>
              <Text style={styles.card2header}>Monthly Rent</Text>
              <Text style={styles.subText}>{amenetiescount} selected</Text>
            </Pressable>
          </View>
          <View style={[styles.availabkeView, styles.card]}>
            <Pressable>
              <Text style={styles.card2header}>Utilities</Text>
              <Text style={styles.subText}>0 selected</Text>
            </Pressable>
          </View>
          <View style={[styles.availabkeView, styles.card]}>
            <Pressable>
              <Text style={styles.card2header}>Deposit</Text>
              <Text style={styles.subText}>{liablecount} selected</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.buttonView}>
          <View style={styles.line} />
          <View style={styles.button}>
            <AppButton
              mode="light"
              containerStyle={{
                width: 157,
              }}
              title="Cancel"
              bordered={true}
              size={'medium'}
            />
            <AppButton
              containerStyle={{
                width: 157,
              }}
              title="Finalize"
              bordered={true}
              size={'medium'}
            />
          </View>
        </View>
        <AppModal
          iscenter={false}
          maxheight={317}
          visible={isrent}
          onDrop={() => setIsrent(false)}>
          <>
            <View style={styles.modal}>
              <Text style={styles.modalheader}>{'Rent Summary'}</Text>
            </View>

            <View>
              <View
                style={[
                  CommonStyles.Spacebetween,
                  {marginHorizontal: 16, marginTop: 16},
                ]}>
                <Text style={styles.modalText}>Monthly Rent</Text>
                <Text style={styles.modalText2}>$ 2000</Text>
              </View>
              <View
                style={[
                  CommonStyles.Spacebetween,
                  {marginHorizontal: 16, marginTop: 16},
                ]}>
                <Text style={styles.modalText}>Deposit</Text>
                <Text style={styles.modalText2}>$ 2000</Text>
              </View>
              <View
                style={[
                  CommonStyles.Spacebetween,
                  {marginHorizontal: 16, marginTop: 16},
                ]}>
                <Text style={styles.modalText}>Utilities</Text>
                <Text style={styles.modalText2}>$ 2000</Text>
              </View>
              <View
                style={[
                  CommonStyles.Spacebetween,
                  {marginHorizontal: 16, marginTop: 16},
                ]}>
                <Text style={styles.modalText2}>First Month Pay</Text>
                <Text style={styles.modalText2}>$ 2000</Text>
              </View>
              <View
                style={[
                  CommonStyles.Spacebetween,
                  {marginHorizontal: 16, marginTop: 16},
                ]}>
                <Text style={styles.modalText2}>Second Month Onwards</Text>
                <Text style={styles.modalText2}>$ 2000</Text>
              </View>
            </View>

            <View style={[styles.buttonView, marginTBRL(10, 0, 0, 0)]}>
              <View style={styles.line} />
              <View style={styles.button}>
                <AppButton
                  onPress={() => setIsrent(false)}
                  mode="light"
                  containerStyle={{
                    width: 157,
                  }}
                  title="Cancel"
                  bordered={true}
                  size={'medium'}
                />
                <AppButton
                  containerStyle={{
                    width: 157,
                  }}
                  onPress={() => setIsrent(false)}
                  title="SUBMIT"
                  bordered={true}
                  size={'medium'}
                />
              </View>
            </View>
          </>
        </AppModal>
      </View>
    </>
  );
};

export default Summary;
