import {StyleSheet, Dimensions} from 'react-native';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';

const styles = StyleSheet.create({
  textAreaContainer: {
    marginTop: 12,
  },
  textInput: {
    borderRadius: 10,
    backgroundColor: colors.textareaBg,
    height: 98,
    paddingHorizontal: 12,
    paddingVertical: 16,
    fontSize: 12,
    fontFamily: fonts.robotoRegular,
    fontWeight: '400',
    lineHeight: 24,
    color: colors.inputcolor,
    textTransform: 'capitalize',
  },
});
export default styles;
