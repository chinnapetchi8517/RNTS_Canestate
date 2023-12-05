import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

const styles = StyleSheet.create({
  modalstyle: {
    margin: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalviewstyle: {
    backgroundColor: 'white',
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  closebtn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    right: 50,
    position: 'absolute',
  },
  centerModalContent: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 18,
  },
  headerText: {
    fontFamily: fonts.interMedium,
    fontSize: 18,
    fontWeight: '600',
    color: colors.black,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginVertical: 25,
  },
});

export default styles;
