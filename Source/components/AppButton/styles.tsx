import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

interface Styles {
  buttonContainer: ViewStyle;
  textStyles: TextStyle;
}

const styles: Styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyles: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: fonts.robotoBold,
    color: colors.white,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default styles;
