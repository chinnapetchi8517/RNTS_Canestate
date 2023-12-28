import {StyleSheet, Dimensions} from 'react-native';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    marginTop: 5,
    backgroundColor: colors.white,
    padding: 10,
  },
  headerSubContainer: {
    flex: 0.25,
    alignItems: 'center',
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    borderRadius: 50,
  },
  headerTextStyle: {
    fontWeight: '600',
    fontSize: 14,
  },
});
export default styles;
