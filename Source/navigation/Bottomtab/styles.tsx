import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {colors} from '../../utils/colors';

interface Styles {
  tabicon: ViewStyle;
  tabiconselected: ViewStyle;
  tabtext: TextStyle;
  tabDisabled: TextStyle;
  tabtextselected: TextStyle;
}

const styles: Styles = StyleSheet.create({
  tabicon: {
    width: 66,
    height: 66,
    alignItems: 'center',
    borderTopWidth: 3,
    // borderRadius: 66 / 2,
    //backgroundColor: 'green',
    borderColor: colors.secondarycolor,
  },
  tabiconselected: {borderTopWidth: 3, borderColor: colors.primarycolor},
  tabtext: {
    fontSize: 13,
    fontWeight: '500',
    //fontFamily: _const.blissRegular,
    color: colors.grey,
  },
  tabDisabled: {
    fontSize: 13,
    fontWeight: '500',
    //fontFamily: _const.blissRegular,
    color: colors.grey,
  },
  tabtextselected: {color: colors.primarycolor, fontWeight: '700'},
});

export default styles;
