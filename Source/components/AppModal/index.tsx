import React, {FC} from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Modal from 'react-native-modal';
import {Images} from '../../assets/Images';
import styles from './styles';
import AppButton from '../AppButton';
import {Appmodalprops} from '../../utils/types';

export const AppModal: FC<Appmodalprops> = ({
  onDrop,
  visible,
  children,
  title,
  iscenter = false,
  maxheight,
  isSubmitbutton = false,
  buttonText = '',
  modalcontainerStyle,
  btnSize = '',
}) => {
  return (
    <Modal
      style={[
        styles.modalstyle,
        {justifyContent: iscenter ? 'center' : 'flex-end'},
      ]}
      isVisible={visible}
      hasBackdrop={true}
      onBackdropPress={onDrop}
      onBackButtonPress={onDrop}
      backdropColor={'transparent'}
      statusBarTranslucent
      useNativeDriverForBackdrop={true}
      backdropOpacity={0.4}
      avoidKeyboard={true}
      animationInTiming={30}
      animationOutTiming={1}
      animationOut={'fadeOut'}>
      <View
        style={[
          iscenter ? styles.centerModalContent : styles.modalviewstyle,
          {
            height: maxheight,
          },
          modalcontainerStyle,
        ]}>
        {children}
        {isSubmitbutton ? (
          <View style={styles.bottomButtonContainer}>
            <AppButton
              size={btnSize}
              bordered={true}
              title={buttonText}></AppButton>
          </View>
        ) : null}
      </View>
    </Modal>
  );
};
