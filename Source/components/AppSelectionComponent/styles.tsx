import {StyleSheet, Dimensions} from 'react-native';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    justifyContent: 'center',
  },
  appSelectionContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  labelstyle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
  },
  rightText: {
    fontSize: 12,
    fontFamily: fonts.robotoMedium,
    fontWeight: '400',
    textTransform: 'none',
    color: colors.textbalck,
    marginHorizontal: 12,
  },
  switchText: {
    fontSize: 11,
    fontFamily: fonts.robotoMedium,
    fontWeight: '500',
    textTransform: 'capitalize',
    color: colors.white,
    marginHorizontal: 4,
  },
  switchSubContainer: {
    width: 52,
    //width: Dimensions.get('window').width * 0.11125,
    justifyContent: 'center',
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderWidth: 1,
  },
  radioSubContainer: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderWidth: 1,
  },
  checkSubContainer: {
    height: 20,
    width: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});

export default styles;
