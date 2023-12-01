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
  radioContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  radioSubContainer: {
    width: 20,
    height: 20,
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
  rightText: {
    fontSize: 12,
    fontFamily: fonts.robotoMedium,
    fontWeight: '400',
    textTransform: 'capitalize',
    color: colors.textbalck,
    marginHorizontal: 12,
  },
});

export default styles;
