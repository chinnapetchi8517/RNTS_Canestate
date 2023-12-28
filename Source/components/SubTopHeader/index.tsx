import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../utils/colors';
import styles from '../SubTopHeader/styles';
import { SubTopTabProps } from '../../utils/types';

export const SubTopTabHeader: FC<SubTopTabProps> = ({
  containerStyle = null,
  dataOptions = [],
  onValueChange = () => {},
  headerSubContainerStyle = null,
  value,
}) => {
  return (
    <>
      <View style={[styles.headerContainer,containerStyle]}>
        {dataOptions.map((tab, index) => (
          <TouchableOpacity
            onPress={() => {
              onValueChange(tab, index);
            }}
            key={index}
            style={[
              styles.headerSubContainer,headerSubContainerStyle,
              {
                borderColor: value == index ? colors.radioOncolor : colors.grey,
              },
            ]}>
            <Text
              style={[
                styles.headerTextStyle,
                {
                  color: value == index ? colors.radioOncolor : colors.grey,
                  fontWeight: '600',
                  fontSize: 14,
                },
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};
