import React, {FC, useState} from 'react';

import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {TopTabHeaderProps} from '../../utils/types';
import {colors} from '../../utils/colors';
import styles from './styles';

export const TopTabHeader: FC<TopTabHeaderProps> = ({
  containerStyle = null,
  dataOptions = [],
  onValueChange=()=>{},
  headerSubContainerStyle=null,
  value
}) => {
//   const [selectedTab, setSelectedTab] = useState(dataOptions[0]);

//   const handleTabPress = tab => {
//     setSelectedTab(tab);
//   };
  return (
    <View>
      <View style={[styles.headerContainer, containerStyle]}>
        {dataOptions.map((tab, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onValueChange(tab,index)}
            style={[
              styles.headerSubContainer,headerSubContainerStyle,
              {
                borderBottomColor:
                value === index ? colors.radioOncolor : colors.white,
                borderBottomWidth: value === index ? 2 : 0,
              },
            ]}>
            <Text
              style={[
                styles.headerTextStyle,
                {
                  color:
                  value === index ? colors.radioOncolor : colors.black,
                },
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      
    </View>
  );
};
