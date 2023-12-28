import {StyleSheet, Dimensions} from 'react-native';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomColor: '#ccc',
  },
  headerSubContainer: {
    flex: 1,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
  },
  headerTextStyle: {
    fontWeight: '600',
    fontSize: 14,
  },
});
export default styles;
