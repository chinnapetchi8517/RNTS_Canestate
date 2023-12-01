import React, {FC, useState} from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Styles from './styles';
import {colors} from '../../utils/colors';
import styles from './styles';

import {SwitchProps} from '../../utils/types';

const Switch: FC<SwitchProps> = ({
  options = [],
  containerStyle = {},
  disabled = false,
  knobSize = 18,
  knobStyle = {},
  label = '',
  labelStyle = {},
  onValueChange = () => {},
  switchContainerStyle = {},
  switchSubContainerStyle = {},
  textContainerStyle = {},
  thumbColor = {false: colors.switchoffcolor, true: colors.switchoncolor},
  trackColor = {false: colors.switchoffcolor, true: colors.switchoncolor},
  value = false,
  isMultiSelection = false,
}) => {
  const [selectedOption, setSelectedOption] = useState([]);
  const handleOptionPress = (option?: String[] = []) => {
    if (isMultiSelection) {
      //  multi-selection
      const newSelection = selectedOption.includes(option)
        ? selectedOption.filter(item => item !== option)
        : [...selectedOption, option];
      setSelectedOption(newSelection);
      onValueChange(newSelection);
    } else {
      // Single-selection
      setSelectedOption([option]);
      onValueChange(option);
    }
  };
  return (
    <>
      {options.map(option => (
        <View style={[Styles.container, containerStyle]}>
          <View style={[Styles.textContainer, textContainerStyle]}>
            <Text style={[styles.labelstyle, labelStyle]}>{label}</Text>
          </View>
          <View style={[Styles.switchContainer, switchContainerStyle]}>
            <TouchableWithoutFeedback
              disabled={disabled}
              onPress={() => {
                handleOptionPress(option);
              }}>
              <View
                style={[
                  Styles.switchSubContainer,
                  {
                    borderColor: selectedOption.includes(option)
                      ? trackColor.true
                      : trackColor.false,
                    borderRadius: knobSize,
                    backgroundColor: selectedOption.includes(option)
                      ? colors.switchoncolor
                      : colors.switchoffcolor,
                  },
                  switchSubContainerStyle,
                ]}>
                <View style={{flexDirection: 'row'}}>
                  {selectedOption.includes(option) && (
                    <Text style={styles.switchText}>{'Yes'}</Text>
                  )}
                  <View
                    style={[
                      {
                        width: knobSize,
                        height: knobSize,
                        alignSelf: selectedOption.includes(option)
                          ? 'flex-end'
                          : 'flex-start',
                        borderRadius: 18 / 2,
                        backgroundColor: colors.white,
                      },
                      knobStyle,
                    ]}
                  />
                  {selectedOption.includes(option) == false && (
                    <Text style={styles.switchText}>{'No'}</Text>
                  )}
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      ))}
    </>
  );
};

export default Switch;
