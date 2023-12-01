import {ReactElement} from 'react';
import {
  ButtonProps,
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

export interface ButtonInterface
  extends Omit<ButtonProps, 'disabled' | 'onPress'>,
    Omit<TouchableOpacityProps, 'disabled' | 'style'> {
  containerStyle?: null | StyleProp<ViewStyle>;
  disabled?: boolean;
  loading?: boolean;
  mode?: String;
  size?: String;
  textStyle?: null | StyleProp<TextStyle>;
  touchable?: boolean;
  bordered?: boolean;
}

export interface AppSelectionComponentprops {
  containerStyle?: ViewStyle;
  disabled?: boolean;
  knobSize?: number;
  knobStyle?: ViewStyle;
  label?: string;
  labelStyle?: TextStyle;
  onValueChange?: any;
  appSelectionContainerStyle?: ViewStyle;
  appSelectionSubContainerStyle?: ViewStyle;
  textContainerStyle?: ViewStyle;
  thumbColor?: {false: string; true: string};
  trackColor?: {false: string; true: string};
  value?: boolean;
  isTextright?: boolean;
  rightlabel?: String;
  rightTextStyle?: TextStyle;
  options?: [];
  isMultiSelection?: boolean;
  isCheck?: boolean;
  isRadio?: boolean;
}
