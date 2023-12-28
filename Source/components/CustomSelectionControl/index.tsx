///App component fro switch,checkbox and Radiobutton
import React, {FC, useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import Styles from './styles';
import {Images} from '../../assets/Images';
import {margin} from '../../utils/CommonStyles';
import {colors} from '../../utils/colors';
import {CustomSelectionControlprops} from '../../utils/types';
export const CustomSelectionControl: FC<CustomSelectionControlprops> = ({
  type,
  options,
  disabled,
  value,
  handleOptionPress,
  knobSize = type === 'radio' ? 12 : 16,
  knobStyle = {},
  isTextright,
  labelStyle,
  thumbColor = {
    false:
      type === 'radio' || type === 'checkbox'
        ? colors.white
        : colors.switchoffcolor,
    true:
      type === 'radio' || type === 'checkbox'
        ? colors.radioOncolor
        : colors.switchoncolor,
  },
  trackColor = {
    false:
      type === 'radio' || type === 'checkbox'
        ? colors.radiooffcolor
        : colors.switchoffcolor,
    true:
      type === 'radio' || type === 'checkbox'
        ? colors.radioOncolor
        : colors.switchoncolor,
  },
  appSelectionContainerStyle,
  appSelectionSubContainerStyle,
  textContainerStyle,
  containerStyle,
  rightTextStyle,
  mainCointainerstyle,
  children,
  rightchildren,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (value: any, index: undefined) => {
    switch (type) {
      case 'radio':
        setSelectedOptions([value]);
        handleOptionPress(value, index);
        break;
      case 'checkbox':
        if (selectedOptions.includes(value)) {
          setSelectedOptions(
            selectedOptions.filter(option => option !== value),
          );
        } else {
          setSelectedOptions([...selectedOptions, value]);
        }
        handleOptionPress(value, index);
        break;
      case 'switch':
        if (selectedOptions.includes(value)) {
          setSelectedOptions(
            selectedOptions.filter(option => option !== value),
          );
        } else {
          setSelectedOptions([...selectedOptions, value]);
        }
        handleOptionPress(value, index);
        break;
      default:
        break;
    }
  };

  const renderOptions = () => {
    return options.map((option: {value: any; label: any}, index: any) => (
      <Pressable
        key={index}
        disabled={disabled}
        onPress={() => handleSelect(option.value, index)}
        style={[Styles.container, containerStyle]}>
        {children === undefined && isTextright === false ? (
          <View style={[Styles.textContainer, textContainerStyle]}>
            <Text style={[Styles.labelstyle, labelStyle]}>{option.label}</Text>
          </View>
        ) : null}
        {children}
        {type === 'switch' && (
          <View
            style={[Styles.appSelectionContainer, appSelectionContainerStyle]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <View
                  style={[
                    Styles.switchSubContainer,
                    {
                      borderColor: selectedOptions.includes(option.value)
                        ? trackColor.true
                        : trackColor.false,
                      borderRadius: knobSize,
                      backgroundColor: selectedOptions.includes(option.value)
                        ? trackColor.true
                        : trackColor.false,
                    },

                    appSelectionSubContainerStyle,
                  ]}>
                  <View style={{flexDirection: 'row'}}>
                    {selectedOptions.includes(option.value) && (
                      <Text style={Styles.switchText}>{'Yes'}</Text>
                    )}
                    <View
                      style={[
                        {
                          width: knobSize,
                          height: knobSize,
                          alignSelf: selectedOptions.includes(option.value)
                            ? 'flex-end'
                            : 'flex-start',
                          borderRadius: 18 / 2,
                          backgroundColor: colors.white,
                        },
                        knobStyle,
                      ]}
                    />
                    {selectedOptions.includes(option.value) == false && (
                      <Text style={[Styles.switchText, margin(8, 0)]}>
                        {'No'}
                      </Text>
                    )}
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
        {type === 'checkbox' && (
          <View
            style={[Styles.appSelectionContainer, appSelectionContainerStyle]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <View
                  style={[
                    Styles.checkSubContainer,
                    {
                      borderColor: selectedOptions.includes(option.value)
                        ? trackColor.true
                        : trackColor.false,
                      borderRadius: 4,
                      backgroundColor: selectedOptions.includes(option.value)
                        ? thumbColor.true
                        : thumbColor.false,
                    },

                    appSelectionSubContainerStyle,
                  ]}>
                  <View style={{flexDirection: 'row'}}>
                    {selectedOptions.includes(option.value) && (
                      <Images.Tick></Images.Tick>
                    )}
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
        {type === 'radio' && (
          <View
            style={[Styles.appSelectionContainer, appSelectionContainerStyle]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <View
                  style={[
                    Styles.radioSubContainer,
                    {
                      borderColor: selectedOptions.includes(option.value)
                        ? trackColor.true
                        : trackColor.false,
                      borderRadius: knobSize,
                    },

                    appSelectionSubContainerStyle,
                  ]}>
                  {selectedOptions.includes(option.value) && (
                    <View
                      style={[
                        {
                          width: knobSize,
                          height: knobSize,
                          alignSelf: 'center',
                          borderRadius: knobSize / 2,
                          backgroundColor: selectedOptions.includes(
                            option.value,
                          )
                            ? trackColor.true
                            : trackColor.false,
                        },
                        knobStyle,
                      ]}
                    />
                  )}
                </View>
              </View>
            </View>
          </View>
        )}
        {isTextright ? (
          <Text style={[Styles.rightText, rightTextStyle]}>{option.label}</Text>
        ) : null}
        {rightchildren}
      </Pressable>
    ));
  };

  return (
    <View style={[Styles.rendercontainer, mainCointainerstyle]}>
      {renderOptions()}
    </View>
  );
};
