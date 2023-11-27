import React, { FC } from 'react';
import { Text, View, TouchableOpacity, Pressable } from 'react-native';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';

interface AppButtonProps {
  text: string;
  isicon?: boolean;
  onPress: () => void;
  fontFamily?: string;
  type?: string;
  bordered?: boolean;
  bgcolor?: string;
  borderedColor?: string;
  size?: string;
  buttonstyle?: object;
  textstyle?: object;
}

const AppButton: FC<AppButtonProps> = ({
  text,
  isicon = false,
  onPress,
  fontFamily,
  type = 'filled',
  bordered = false,
  bgcolor = colors.secondarycolor,
  borderedColor = (bgcolor = colors.secondarycolor),
  size = 'medium',
  buttonstyle,
  textstyle,
}) => {
  const small: number = 88;
  const medium: number = 157;
  const large: number = 244;
  const extralarge: number = 312;

  const largeheight: number = 54;
  const smallheight: number = 28;
  const mediumheight: number = 50;
  const btnwidth: number =
    size === 'large'
      ? large
      : size === 'medium'
      ? medium
      : size === 'extralarge'
      ? extralarge
      : small;
  const btnheight: number =
    size === 'large' || size === 'extralarge'
      ? largeheight
      : size === 'medium'
      ? mediumheight
      : smallheight;
  // const btnBgColor = type === "filled" ? Colors.green : Colors.light_green;
  const btnTextColor: string =
    type === 'filled' ? colors.white : colors.secondarycolor;
  const btnBorderRadius: number = bordered ? 27 : 5;
  const textsize: number = 14;
  onPress = onPress;
  const containerCommonStyle: object = {
    backgroundColor: bgcolor,
    justifyContent: 'center',
    width: btnwidth,
    height: btnheight,
    borderRadius: btnBorderRadius,
  };
  const textCommonStyle: object = {
    color: btnTextColor,
    fontSize: textsize,
    fontFamily: fonts.robotoBold,
    textAlign: 'center',
    fontWeight: '700',
    lineHeight: 27,
    textTransform: 'uppercase',
  };

  const border: object  = {
    //type === 'outlined' 
    borderColor: borderedColor,
    borderWidth: 1,
    backgroundColor: colors.lightwhite,
  };
  return (
    <Pressable onPress={onPress} >
      <View style={[containerCommonStyle, border, buttonstyle]}>
        <Text style={[textCommonStyle, textstyle]}>
          {' '}
          {text}{' '}
          {isicon ? <Text style={[textCommonStyle, textstyle]}>▸ </Text> : null}{' '}
        </Text>
      </View>
    </Pressable>
  );
};

export default AppButton;