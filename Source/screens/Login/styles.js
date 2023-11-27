import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
const styles = StyleSheet.create({
  wrapper: {height: '100%', width: '100%', backgroundColor: colors.white},
  slider1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.black,
    fontSize: 24,
    marginTop: 75,
    fontWeight: 'bold',
    marginHorizontal: 35,
    fontWeight: '600',
  },
  subtext: {
    // width: 320,
    // height: 38,
    color: colors.grey,
    fontSize: 16,
    marginTop: 24,
    fontWeight: 'normal',
    lineHeight: 27,
    textAlign: 'center',
    marginHorizontal: 35,
    fontFamily: fonts.robotoRegular,
  },
  button: {
    width: 312,
    height: 46,
    borderRadius: 27,
    backgroundColor: colors.secondarycolor,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 159,
    marginBottom: 40,
  },
  buttonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 27,
  },
  dotstyle: {
    backgroundColor: colors.secondarycolor2,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 118,
  },
  activedot: {
    backgroundColor: colors.primarycolor,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 118,
  },
});
export default styles;
