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
