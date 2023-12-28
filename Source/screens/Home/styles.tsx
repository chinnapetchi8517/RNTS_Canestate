import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
const styles = StyleSheet.create({
  wrapper: {height: '100%', width: '100%', backgroundColor: colors.white},
  header: {
    marginHorizontal: 24,
    alignItems: 'center',
    marginTop: 70,
  },
  usernameStyles: {
    fontSize: 24,
    fontFamily: fonts.interBold,
    fontWeight: 'bold',
    color: colors.black,
  },
  slider1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pngstyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 130,
  },

  text: {
    color: colors.black,
    fontSize: 24,
    marginTop: 75,
    fontWeight: 'bold',
    marginHorizontal: 35,
    // fontFamily: fonts.interBold,
  },
  addbuttonStyle: {
    width: 53,
    height: 41,
    backgroundColor: colors.blue,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  subtext: {
    color: colors.textbalck,
    fontSize: 15,
    marginTop: 24,
    fontWeight: 'normal',
    lineHeight: 27,
    textAlign: 'center',
    marginHorizontal: 95,
    fontFamily: fonts.robotoRegular,
  },
  verticleLine: {
    height: '70%',
    width: 1,
    backgroundColor: colors.white,
    marginVertical: 30,
  },
  listText: {
    fontSize: 12,
    fontFamily: fonts.interMedium,
    fontWeight: '500',
    color: colors.black,
    marginHorizontal: 16,
  },
  subtextheader: {
    color: colors.textbalck,
    fontSize: 16,

    fontWeight: 'normal',
    lineHeight: 27,

    fontFamily: fonts.robotoRegular,
  },
});
export default styles;
