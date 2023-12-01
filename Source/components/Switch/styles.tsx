import {StyleSheet, Dimensions} from 'react-native';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 0.8,
    justifyContent: 'center',
  },
  switchContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  switchSubContainer: {
    width: 52,
    //width: Dimensions.get('window').width * 0.11125,
    justifyContent: 'center',
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderWidth: 1,
  },
  labelstyle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
  },
  switchText: {
    fontSize: 11,
    fontFamily: fonts.robotoMedium,
    fontWeight: '500',
    textTransform: 'capitalize',
    color: colors.white,
    marginHorizontal: 4,
  },
});

export default styles;
