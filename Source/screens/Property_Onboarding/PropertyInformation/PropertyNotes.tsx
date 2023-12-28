import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Button,
  StatusBar,
  TextInput,
  ImageBackground,
  Pressable,
  ScrollView,
} from 'react-native';
import {colors} from '../../../utils/colors';
import {screenProps} from '../../../utils/types';
import {Images} from '../../../assets/Images';
import styles from './styles';
import {BorderRadius, padding} from '../../../utils/CommonStyles';
import AppButton from '../../../components/AppButton';
import TextAreaComponent from '../../../components/TextareaComponent';
import CardView from '../../../components/CardView';
import {AppModal} from '../../../components/AppModal';
import {fonts} from '../../../utils/fonts';

const PropertyNotes: React.FC<screenProps> = ({navigation}) => {
  const [notes, setNotes] = useState('');
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={colors.white}
      />
      <View style={styles.wrapper}>
        <TextAreaComponent
          //iscolorBlack={true}
          maxHeight={670}
          value={notes}
          setInputValue={val => setNotes(val)}
          placeholderText={'Property Notes'}
          inputStyle={{
            color: colors.textbalck,
            fontSize: 14,
            backgroundColor: 'white',
          }}
          containerStyle={styles.notes}
        />
        <View
          style={{
            borderBottomColor: colors.greyText,
            borderBottomWidth: 0.5,
            marginTop: 25,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 16,
            // bottom: 20,
            // position: 'absolute',
            // marginHorizontal: 20,
          }}>
          <AppButton
            onPress={() => navigation.navigate('Property_Information')}
            mode="light"
            title="Cancel"
            bordered={true}
            size={'medium'}
          />
          <AppButton
            onPress={() => navigation.navigate('Property_Information')}
            title="Update"
            bordered={true}
            size={'medium'}
          />
        </View>
      </View>
    </>
  );
};

export default PropertyNotes;
