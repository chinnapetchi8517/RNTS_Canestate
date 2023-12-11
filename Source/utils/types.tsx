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
  icon?: boolean;
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

export interface TextareaComponentprops {
  isInputFocus?: boolean;
  setIsInputFocus?: any;
  value?: string;
  setInputValue?: any;
  editable?: boolean;
  inputStyle?: ViewStyle;
  placeholderText?: string;
  containerStyle?: ViewStyle;
  maxHeight?: number;
}
export interface Appmodalprops {
  onDrop?: () => void;
  visible?: boolean;
  children?: any;
  title?: string;
  iscenter?: boolean;
  maxheight?: number;
  modalcontainerStyle?: ViewStyle;
  isSubmitbutton?: boolean;
  buttonText?: string;
  btnSize?: string;
  isheader?: boolean;
  headericon?: boolean;
}
export interface Cardviewprops {
  maxHeight?: number;
  children?: any;
  containerStyle?: ViewStyle;
  isCardsquare?: false;
  carviewStyles?: ViewStyle;
  ismulticolor?: boolean;
  customRightcornerStyle?: ViewStyle;
}
