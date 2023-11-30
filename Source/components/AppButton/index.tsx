import React, {FC, ReactElement} from 'react';
import {
  ActivityIndicator,
  Keyboard,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {ButtonInterface} from '../../utils/types';
import {colors} from '../../utils/colors';
import styles from './styles';
import CommonStyles, {flex} from '../../utils/CommonStyles';

const AppButton: FC<ButtonInterface> = ({
  containerStyle = null,
  disabled = false,
  title = '',
  loading = false,
  mode = 'solid',
  onPress,
  bordered,
  size = '',
  textStyle = null,
}) => {
  // Button Variables

  // Other Variables
  let customContainerStyle: StyleProp<ViewStyle>,
    customTextStyle: StyleProp<TextStyle>;
  const small: number = 88;
  const medium: number = 157;
  const large: number = 244;
  const extralarge: number = 312;

  const largeheight: number = 54;
  const smallheight: number = 28;
  const mediumheight: number = 50;

  //button width
  const btnwidth: number =
    size === 'large'
      ? large
      : size === 'medium'
      ? medium
      : size === 'small'
      ? small
      : extralarge;

  //button height
  const btnheight: number =
    size === 'large'
      ? large
      : size === 'medium'
      ? mediumheight
      : size === 'small'
      ? smallheight
      : largeheight;

  switch (mode) {
    case 'light':
      customContainerStyle = {
        backgroundColor: colors.white,
        borderColor: colors.secondarycolor,
        borderRadius: bordered ? 27 : 5,
        borderWidth: 1,
        width: btnwidth,
        height: btnheight,
      };

      customTextStyle = {color: colors.primarycolor, bottom: 0};
      break;

    case 'solid':
    default:
      customContainerStyle = {
        backgroundColor: colors.secondarycolor,
        borderColor: colors.secondarycolor,
        borderRadius: bordered ? 27 : 5,
        borderWidth: 0.5,
        width: btnwidth,
        height: btnheight,
      };

      customTextStyle = {color: colors.white, bottom: 0};
      break;
  }

  function renderButton(): ReactElement {
    return (
      <View style={[CommonStyles.CenterAlign]}>
        <View style={CommonStyles.CenterAlign}>
          {loading ? (
            <ActivityIndicator size="small" color={colors.white} />
          ) : (
            <View style={[CommonStyles.CenterAlign, CommonStyles.Row]}>
              <Text style={[styles.textStyles, customTextStyle, textStyle]}>
                {title}
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  }

  return (
    <TouchableOpacity
      disabled={disabled || loading}
      style={[
        styles.buttonContainer,
        customContainerStyle,
        containerStyle,
        // loading && HelperStyles.justView('backgroundColor', Colors.primary),
      ]}
      onPressIn={() => {
        Keyboard.dismiss();
      }}
      onPress={onPress}>
      {renderButton()}
    </TouchableOpacity>
  );
};

export default AppButton;
