import React, {FC} from 'react';
import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  TextInput,
  ViewStyle,
} from 'react-native';
import styles from './styles';
import {colors} from '../../utils/colors';
import {TextareaComponentprops} from '../../utils/types';

const TextAreaComponent: FC<TextareaComponentprops> = ({
  isInputFocus = false,
  setIsInputFocus,
  value = '',
  setInputValue,
  editable,
  inputStyle = {},
  placeholderText = '',
  containerStyle = {},
  maxHeight,
  iscolorBlack = false,
}) => {
  return (
    <View style={[styles.textAreaContainer, containerStyle]}>
      <TextInput
        editable={editable}
        multiline={true}
        style={[styles.textInput, {height: maxHeight}, inputStyle]}
        textAlignVertical="top"
        value={value}
        onChangeText={text => setInputValue(text)}
        // onFocus={() => setIsInputFocus(true)}
        // onBlur={() => setIsInputFocus(false)}

        maxLength={250}
        placeholderTextColor={
          iscolorBlack ? colors.textbalck : colors.placeholder
        }
        placeholder={placeholderText}
      />
    </View>
  );
};
export default TextAreaComponent;
