import React, {FC, useState} from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../utils/colors';
import Styles from './styles';
import {CommonActions} from '@react-navigation/native';
import styles from './styles';
import {Radioprops} from '../../utils/types';

const RadioButton: FC<Radioprops> = ({
  options = [],
  isMultiSelection = false,
  containerStyle = {},
  disabled = false,
  knobSize = 12,
  knobStyle = {},
  label = '',
  labelStyle = {},
  onValueChange = () => {},
  radioContainerStyle = {},
  radioSubContainerStyle = {},
  textContainerStyle = {},
  trackColor = {false: colors.radiooffcolor, true: colors.radioOncolor},
  //value = false,
  isTextright = false,
  rightlabel = '',
  rightTextStyle = {},
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
    <View>
      {options.map(option => (
        <View style={[Styles.container, containerStyle]}>
          {isTextright == true ? null : (
            <View style={[Styles.textContainer, textContainerStyle]}>
              <Text
                style={[
                  {
                    fontSize: 14,
                    fontWeight: '600',
                    textAlign: 'left',
                  },
                  labelStyle,
                ]}>
                {option}
              </Text>
            </View>
          )}
          <View
            key={option}
            style={[Styles.radioContainer, radioContainerStyle]}>
            <TouchableWithoutFeedback
              disabled={disabled}
              onPress={() => {
                // onValueChange();
                handleOptionPress(option);
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={[
                    Styles.radioSubContainer,
                    {
                      borderColor: selectedOption.includes(option)
                        ? trackColor.true
                        : trackColor.false,
                      borderRadius: knobSize,
                    },
                    radioSubContainerStyle,
                  ]}>
                  <>
                    <View
                      style={[
                        {
                          width: selectedOption.includes(option) ? knobSize : 0,
                          height: selectedOption.includes(option)
                            ? knobSize
                            : 0,
                          alignSelf: 'center',
                          borderRadius: selectedOption.includes(option)
                            ? 12 / 2
                            : 0,
                          backgroundColor: selectedOption.includes(option)
                            ? trackColor.true
                            : 'white',
                        },
                        knobStyle,
                      ]}
                    />
                  </>
                </View>
                {isTextright ? (
                  <Text style={[styles.rightText, rightTextStyle]}>
                    {option}
                  </Text>
                ) : null}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      ))}
    </View>
  );
};

export default RadioButton;

/// for sigle radio:
// <View style={[Styles.container, containerStyle]}>
//   {isTextright == true ? null : (
//     <View style={[Styles.textContainer, textContainerStyle]}>
//       <Text
//         style={[
//           {
//             fontSize: 14,
//             fontWeight: '600',
//             textAlign: 'left',
//           },
//           labelStyle,
//         ]}>
//         {label}
//       </Text>
//     </View>
//   )}
//   <View style={[Styles.radioContainer, radioContainerStyle]}>
//     <TouchableWithoutFeedback
//       disabled={disabled}
//       onPress={() => {
//         onValueChange();
//       }}>
//       <View style={{flexDirection: 'row', alignItems: 'center'}}>
//         <View
//           style={[
//             Styles.radioSubContainer,
//             {
//               borderColor: value ? trackColor.true : trackColor.false,
//               borderRadius: knobSize,
//             },
//             radioSubContainerStyle,
//           ]}>
//           {value ? (
//             <View
//               style={[
//                 {
//                   width: knobSize,
//                   height: knobSize,
//                   alignSelf: 'center',
//                   borderRadius: 12 / 2,
//                   backgroundColor: value
//                     ? trackColor.true
//                     : trackColor.false,
//                 },
//                 knobStyle,
//               ]}
//             />
//           ) : null}
//         </View>
//         {isTextright ? (
//           <Text style={[styles.rightText, rightTextStyle]}>
//             {rightlabel}
//           </Text>
//         ) : null}
//       </View>
//     </TouchableWithoutFeedback>
//   </View>
// </View>
