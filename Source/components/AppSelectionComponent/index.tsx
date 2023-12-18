///App component fro switch,checkbox and Radiobutton
import React, {FC, useState} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {colors} from '../../utils/colors';
import Styles from './styles';
import styles from './styles';
import {AppSelectionComponentprops} from '../../utils/types';
import {margin} from '../../utils/CommonStyles';
import {Images} from '../../assets/Images';

const AppSelectionComponent: FC<AppSelectionComponentprops> = ({
  options = [],
  isMultiSelection = false,
  containerStyle = {},
  disabled = false,
  knobSize = 16,
  knobStyle = {},
  label = '',
  labelStyle = {},
  onValueChange = () => {},
  appSelectionContainerStyle = {},
  appSelectionSubContainerStyle = {},
  textContainerStyle = {},
  value = false,
  isTextright = false,
  rightlabel = '',
  rightTextStyle = {},
  isCheck = false,
  isRadio = false,
  thumbColor = {
    false: isCheck || isRadio ? colors.white : colors.switchoffcolor,
    true: isCheck || isRadio ? colors.radioOncolor : colors.switchoncolor,
  },
  trackColor = {
    false: isCheck || isRadio ? colors.radiooffcolor : colors.switchoffcolor,
    true: isCheck || isRadio ? colors.radioOncolor : colors.switchoncolor,
  },
  children,
}) => {
  const [selectedOption, setSelectedOption] = useState([]);

  const knobsize = isRadio ? 12 : knobSize;

  const handleOptionPress = (option: never) => {
    if (isMultiSelection) {
      //  multi-selection
      const newSelection = selectedOption.includes(option)
        ? selectedOption.filter(item => item !== option)
        : [...selectedOption, option];
      setSelectedOption(newSelection);
      onValueChange(newSelection);
    } else {
      // Single-selection
      console.log(option, 'option');

      setSelectedOption([option]);
      onValueChange(option);
    }
  };
  return (
    <>
      {options.length != 0 ? (
        <>
          {options.map((option, index) => (
            <View key={index} style={[Styles.container, containerStyle]}>
              {isTextright ? null : (
                <View style={[Styles.textContainer, textContainerStyle]}>
                  <Text style={[styles.labelstyle, labelStyle]}>{option}</Text>
                </View>
              )}
              <View
                style={[
                  Styles.appSelectionContainer,
                  appSelectionContainerStyle,
                ]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TouchableWithoutFeedback
                    disabled={disabled}
                    onPress={() => {
                      handleOptionPress(option);
                    }}>
                    <View
                      style={[
                        isCheck
                          ? Styles.checkSubContainer
                          : isRadio
                          ? Styles.radioSubContainer
                          : Styles.switchSubContainer,
                        {
                          borderColor: selectedOption.includes(option)
                            ? trackColor.true
                            : trackColor.false,
                          borderRadius: isCheck ? 4 : knobsize,
                        },
                        isRadio === false && {
                          backgroundColor: selectedOption.includes(option)
                            ? thumbColor.true
                            : thumbColor.false,
                        },
                        appSelectionSubContainerStyle,
                      ]}>
                      {selectedOption.includes(option) && isCheck ? (
                        <Images.Tick></Images.Tick>
                      ) : selectedOption.includes(option) && isRadio ? (
                        <View
                          style={[
                            {
                              width: knobsize,
                              height: knobsize,
                              alignSelf: 'center',
                              borderRadius: 12 / 2,
                              backgroundColor: selectedOption.includes(option)
                                ? trackColor.true
                                : trackColor.false,
                            },
                            knobStyle,
                          ]}
                        />
                      ) : (
                        isCheck === false &&
                        isRadio === false && (
                          <View style={{flexDirection: 'row'}}>
                            {selectedOption.includes(option) && (
                              <Text style={styles.switchText}>{'Yes'}</Text>
                            )}
                            <>{console.log(selectedOption.includes(option))}</>
                            <View
                              style={[
                                {
                                  width: knobsize,
                                  height: knobsize,
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
                              <Text style={[styles.switchText, margin(8, 0)]}>
                                {'No'}
                              </Text>
                            )}
                          </View>
                        )
                      )}
                    </View>
                  </TouchableWithoutFeedback>
                  {isTextright ? (
                    <Text style={[styles.rightText, rightTextStyle]}>
                      {option}
                    </Text>
                  ) : null}
                </View>
              </View>
            </View>
          ))}
        </>
      ) : (
        <View style={[Styles.container, containerStyle]}>
          {isTextright ? null : (
            <View style={[Styles.textContainer, textContainerStyle]}>
              <>
                <>{children}</>
              </>
            </View>
          )}
          <View
            style={[Styles.appSelectionContainer, appSelectionContainerStyle]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableWithoutFeedback
                disabled={disabled}
                onPress={() => {
                  onValueChange();
                  // handleOptionPress(option);
                }}>
                <View
                  style={[
                    isCheck
                      ? Styles.checkSubContainer
                      : isRadio
                      ? Styles.radioSubContainer
                      : Styles.switchSubContainer,
                    {
                      borderColor: value ? trackColor.true : trackColor.false,
                      borderRadius: isCheck ? 4 : knobsize,
                    },
                    isRadio === false && {
                      backgroundColor: value
                        ? thumbColor.true
                        : thumbColor.false,
                    },
                    appSelectionSubContainerStyle,
                  ]}>
                  {value && isCheck ? (
                    <Images.Tick></Images.Tick>
                  ) : value && isRadio ? (
                    <View
                      style={[
                        {
                          width: knobsize,
                          height: knobsize,
                          alignSelf: 'center',
                          borderRadius: 12 / 2,
                          backgroundColor: value
                            ? trackColor.true
                            : trackColor.false,
                        },
                        knobStyle,
                      ]}
                    />
                  ) : (
                    isCheck === false &&
                    isRadio === false && (
                      <View style={{flexDirection: 'row'}}>
                        {value && (
                          <Text style={styles.switchText}>{'Yes'}</Text>
                        )}

                        <View
                          style={[
                            {
                              width: knobsize,
                              height: knobsize,
                              alignSelf: value ? 'flex-end' : 'flex-start',
                              borderRadius: 18 / 2,
                              backgroundColor: colors.white,
                            },
                            knobStyle,
                          ]}
                        />
                        {value == false && (
                          <Text style={[styles.switchText, margin(8, 0)]}>
                            {'No'}
                          </Text>
                        )}
                      </View>
                    )
                  )}
                </View>
              </TouchableWithoutFeedback>

              {isTextright ? <>{children}</> : null}
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default AppSelectionComponent;

/// for single radio:
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

// <View style={[Styles.container, containerStyle]}>

// {isTextright ? null : (
//   <View style={[Styles.textContainer, textContainerStyle]}>
//     <>
//       {options.length === 0 ? (
//         <>{children}</>
//       ) : (
//         options.map((option, index) => (
//           <Text key={index} style={[styles.labelstyle, labelStyle]}>
//             {option}
//           </Text>
//         ))
//       )}
//     </>
//   </View>
// )}
// {options.length === 0 ? (
//   <View
//     style={[Styles.appSelectionContainer, appSelectionContainerStyle]}>
//     <View style={{flexDirection: 'row', alignItems: 'center'}}>
//       <TouchableWithoutFeedback
//         disabled={disabled}
//         onPress={() => {
//           onValueChange();
//           // handleOptionPress(option);
//         }}>
//         <View
//           style={[
//             isCheck
//               ? Styles.checkSubContainer
//               : isRadio
//               ? Styles.radioSubContainer
//               : Styles.switchSubContainer,
//             {
//               borderColor: value ? trackColor.true : trackColor.false,
//               borderRadius: isCheck ? 4 : knobsize,
//             },
//             isRadio === false && {
//               backgroundColor: value
//                 ? thumbColor.true
//                 : thumbColor.false,
//             },
//             appSelectionSubContainerStyle,
//           ]}>
//           {value && isCheck ? (
//             <Images.Tick></Images.Tick>
//           ) : value && isRadio ? (
//             <View
//               style={[
//                 {
//                   width: knobsize,
//                   height: knobsize,
//                   alignSelf: 'center',
//                   borderRadius: 12 / 2,
//                   backgroundColor: value
//                     ? trackColor.true
//                     : trackColor.false,
//                 },
//                 knobStyle,
//               ]}
//             />
//           ) : (
//             isCheck === false &&
//             isRadio === false && (
//               <View style={{flexDirection: 'row'}}>
//                 {value && (
//                   <Text style={styles.switchText}>{'Yes'}</Text>
//                 )}

//                 <View
//                   style={[
//                     {
//                       width: knobsize,
//                       height: knobsize,
//                       alignSelf: value ? 'flex-end' : 'flex-start',
//                       borderRadius: 18 / 2,
//                       backgroundColor: colors.white,
//                     },
//                     knobStyle,
//                   ]}
//                 />
//                 {value == false && (
//                   <Text style={[styles.switchText, margin(8, 0)]}>
//                     {'No'}
//                   </Text>
//                 )}
//               </View>
//             )
//           )}
//         </View>
//       </TouchableWithoutFeedback>

//       {isTextright ? <>{children}</> : null}
//     </View>
//   </View>
// ) : (
//   options.map((option, index) => (
//     <View key={index} style={[Styles.container, containerStyle]}>

//       <View
//         style={[
//           Styles.appSelectionContainer,
//           appSelectionContainerStyle,
//         ]}>
//         <View style={{flexDirection: 'row', alignItems: 'center'}}>
//           <TouchableWithoutFeedback
//             disabled={disabled}
//             onPress={() => {
//               handleOptionPress(option);
//             }}>
//             <View
//               style={[
//                 isCheck
//                   ? Styles.checkSubContainer
//                   : isRadio
//                   ? Styles.radioSubContainer
//                   : Styles.switchSubContainer,
//                 {
//                   borderColor: selectedOption.includes(option)
//                     ? trackColor.true
//                     : trackColor.false,
//                   borderRadius: isCheck ? 4 : knobsize,
//                 },
//                 isRadio === false && {
//                   backgroundColor: selectedOption.includes(option)
//                     ? thumbColor.true
//                     : thumbColor.false,
//                 },
//                 appSelectionSubContainerStyle,
//               ]}>
//               {selectedOption.includes(option) && isCheck ? (
//                 <Images.Tick></Images.Tick>
//               ) : selectedOption.includes(option) && isRadio ? (
//                 <View
//                   style={[
//                     {
//                       width: knobsize,
//                       height: knobsize,
//                       alignSelf: 'center',
//                       borderRadius: 12 / 2,
//                       backgroundColor: selectedOption.includes(option)
//                         ? trackColor.true
//                         : trackColor.false,
//                     },
//                     knobStyle,
//                   ]}
//                 />
//               ) : (
//                 isCheck === false &&
//                 isRadio === false && (
//                   <View style={{flexDirection: 'row'}}>
//                     {selectedOption.includes(option) && (
//                       <Text style={styles.switchText}>{'Yes'}</Text>
//                     )}
//                     <View
//                       style={[
//                         {
//                           width: knobsize,
//                           height: knobsize,
//                           alignSelf: selectedOption.includes(option)
//                             ? 'flex-end'
//                             : 'flex-start',
//                           borderRadius: 18 / 2,
//                           backgroundColor: colors.white,
//                         },
//                         knobStyle,
//                       ]}
//                     />
//                     {selectedOption.includes(option) == false && (
//                       <Text style={[styles.switchText, margin(8, 0)]}>
//                         {'No'}
//                       </Text>
//                     )}
//                   </View>
//                 )
//               )}
//             </View>
//           </TouchableWithoutFeedback>
//           {isTextright ? (
//             <Text style={[styles.rightText, rightTextStyle]}>
//               {option}
//             </Text>
//           ) : null}
//         </View>
//       </View>
//     </View>
//   ))
// )}
// </View>
