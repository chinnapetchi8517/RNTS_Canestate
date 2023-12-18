import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
const styles = StyleSheet.create({
  wrapper: {height: '100%', width: '100%', backgroundColor: colors.white},
  header: {
    marginHorizontal: 32,

    marginTop: 70,
  },
  usernameStyles: {
    fontSize: 24,
    fontFamily: fonts.interBold,
    fontWeight: 'bold',
    color: colors.black,
  },
  listText: {
    fontSize: 12,
    fontFamily: fonts.interMedium,
    fontWeight: '500',
    color: colors.black,
    marginHorizontal: 10,
  },
  subtextheader: {
    color: colors.textbalck,
    fontSize: 16,

    fontWeight: 'bold',
    lineHeight: 27,
    marginHorizontal: 16,
    fontFamily: fonts.robotoRegular,
  },
});
export default styles;
