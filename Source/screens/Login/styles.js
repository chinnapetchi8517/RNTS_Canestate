import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
const styles = StyleSheet.create({
  wrapper: {height: '100%', width: '100%'},
  profilecontainer: {
    marginTop: 4,
    marginHorizontal: 0,
    borderRadius: 0,
    marginVertical: 0,
    marginBottom: 0,
  },
  card: {
    borderRadius: 0,
  },
  profileborderStyle: {
    width: 139,
    height: 139,
    borderRadius: 139 / 2,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Editprofile: {position: 'absolute', right: 0, bottom: 0},
  centerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  inputcontainerStyle: {
    marginTop: 24,
    borderRadius: 10,
  },
  viewStyle: {marginHorizontal: 24},
});
export default styles;
