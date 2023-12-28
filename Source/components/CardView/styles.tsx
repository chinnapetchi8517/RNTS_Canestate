import {StyleSheet, Dimensions} from 'react-native';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';
import CardView from './index';

const styles = StyleSheet.create({
  CardViewcontainer: {
    marginTop: 13,
    marginBottom: 12,

    backgroundColor: colors.white,
  },
  CardViewretangular: {
    borderRadius: 15,
    height: 120,
    shadowColor: 'rgba(160, 160, 160, 0.08)',
  },
  CardViewsquare: {
    width: 157,
    height: 157,
    borderRadius: 15,
    backgroundColor: colors.white,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
  },
  CardViewwith_colorborder: {
    width: 338,
    backgroundColor: colors.white,
    shadowColor: 'rgba(160, 160, 160, 0.08)',
    borderTopLeftRadius: 23,
    borderBottomLeftRadius: 23,
  },
  rightcornerStyle: {
    width: 20,
    height: 157,
    backgroundColor: 'red',
    borderTopRightRadius: 23,
    borderBottomRightRadius: 23,
  },
});
export default styles;
