import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, Button, StatusBar, TouchableOpacity} from 'react-native';
import {colors} from '../../utils/colors';
import {screenProps} from '../../utils/types';
import {TopTabHeader} from '../../components/TopHeader';
import {SubTopTabHeader} from '../../components/SubTopHeader';
const Properties: React.FC<screenProps> = ({navigation}) => {

  const tabs = ['Properties', 'Rooms', 'History'];
  const propertiesTabs = ['Active', 'Inactive', 'Maintenance'];
  const historyTabs = ['This Month', 'This Year', 'This Time'];
  const roomsTabs = ['occupied', 'Available', 'Coming up'];

  //parent header state variable
  const [selected, setSelected] = useState(0);
  const onValueChange = (tab: any, index: any) => {
    console.log('TAB', index);
    setSelected(index);
  };

  //child header state variable
  const [subSelected, setSubSelected] = useState(0);
  const onValueChangeSub = (tab: any, index: any) => {
    setSubSelected(index);
  };

  const arrayData =
    selected == 0 ? propertiesTabs : selected == 2 ? historyTabs : roomsTabs;

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={colors.white}
      />
      <TopTabHeader
        dataOptions={tabs}
        onValueChange={onValueChange}
        value={selected}
        containerStyle={{backgroundColor: colors.white, marginTop: 3}}
      />
      <SubTopTabHeader
        dataOptions={arrayData}
        onValueChange={onValueChangeSub}
        value={subSelected}
        containerStyle={{backgroundColor: colors.white, marginTop: 5}}
      />
    </>
  );
};

export default Properties;
