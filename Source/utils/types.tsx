import {ReactElement} from 'react';
import {
  ButtonProps,
  StyleProp,
  TextInputProps,
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

export interface TopTabHeaderProps {
  containerStyle?: null | StyleProp<ViewStyle>;
  dataOptions?: Array<Object>;
  headerSubContainerStyle?: null | StyleProp<ViewStyle>;
  onValueChange?: any;
  value?: number;
}

export interface SubTopTabProps {
  containerStyle?: null | StyleProp<ViewStyle>;
  dataOptions?: Array<Object>;
  headerSubContainerStyle?: null | StyleProp<ViewStyle>;
  onValueChange?: any;
  value?: number;
}

export interface CustomSelectionControlprops {
  type?: string;
  containerStyle?: ViewStyle;
  disabled?: boolean;
  knobSize?: number;
  knobStyle?: ViewStyle;
  label?: string;
  labelStyle?: TextStyle;
  handleOptionPress?: any;
  appSelectionContainerStyle?: ViewStyle;
  appSelectionSubContainerStyle?: ViewStyle;
  textContainerStyle?: TextStyle;
  thumbColor?: {false: string; true: string};
  trackColor?: {false: string; true: string};
  value?: any;
  isTextright?: boolean;
  rightlabel?: String;
  rightTextStyle?: TextStyle;
  options?: [];
  isMultiSelection?: boolean;
  isCheck?: boolean;
  isRadio?: boolean;
  mainCointainerstyle?: ViewStyle;
  children?: any;
  rightchildren?: any;
}

export interface TextareaComponentprops {
  isInputFocus?: boolean;
  setIsInputFocus?: any;
  value?: string;
  setInputValue?: any;
  editable?: boolean;
  inputStyle?: TextStyle;
  placeholderText?: string;
  containerStyle?: ViewStyle;
  maxHeight?: number;
  iscolorBlack?: boolean;
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
  maxHeight?: any;
  children?: any;
  containerStyle?: ViewStyle;
  isCardsquare?: boolean;
  carviewStyles?: ViewStyle;
  ismulticolor?: boolean;
  customRightcornerStyle?: ViewStyle;
  onPress?: any;
}
export interface screenProps {
  navigation: any;
  props: any;
}
