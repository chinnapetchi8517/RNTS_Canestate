import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    //backgroundColor: colors.white,
  },
  totalrentText: {
    fontSize: 12,
    fontFamily: fonts.robotoRegular,
    color: colors.textbalck,
    fontWeight: '500',
    marginTop: 10,
    marginHorizontal: 18,
  },
  rentText: {
    fontSize: 32,
    fontFamily: fonts.robotoBold,
    color: colors.black,
    fontWeight: '500',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 23,
  },
  rentViewstyle: {
    borderRadius: 10,
    height: 86,
    marginTop: 16,
    marginHorizontal: 24,
    backgroundColor: '#F8F8F8',
    borderWidth: 1,
    borderColor: '#D9DADC',
  },
  availabkeView: {
    marginHorizontal: 24,
    marginVertical: 8,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 15,
    shadowColor: 'rgba(160, 160, 160, 0.08)',
    // elevation: 13,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.robotoMedium,
    color: colors.black,
    fontWeight: '500',
    marginHorizontal: 24,
    marginTop: 10,
  },
  card2header: {
    fontFamily: fonts.robotoBold,
    fontSize: 14,
    color: colors.textbalck,
    fontWeight: '600',
    //marginHorizontal: 20,
    marginTop: 5,
  },
  subText: {
    fontFamily: fonts.robotoMedium,
    fontSize: 12,
    color: colors.greyText,
    fontWeight: '600',
    //marginHorizontal: 20,
    marginTop: 5,
  },
  modalText: {
    fontSize: 14,
    color: '#6A6A6A',
    fontFamily: fonts.robotoMedium,
    fontWeight: '400',
  },
  modalText2: {
    fontSize: 14,
    color: colors.black,
    fontWeight: '600',
    fontFamily: fonts.robotoBold,
  },
  selectText: {
    textTransform: 'none',

    fontFamily: fonts.robotoMedium,
    fontWeight: '400',
  },
  CardView: {
    flexDirection: 'row',
    marginHorizontal: 25,
    justifyContent: 'space-around',
    //backgroundColor: 'white',
    marginTop: 16,
    borderRadius: 8,
  },
  card: {
    width: 110,
    borderRadius: 14,
    height: 70,
  },
  buttonView: {height: 110, marginTop: 30, backgroundColor: 'white'},
  line: {
    borderBottomColor: colors.greyText,
    borderBottomWidth: 1,
    marginTop: 2,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    // position: 'absolute',
    marginHorizontal: 24,
  },
  modal: {
    marginVertical: 12,
    marginHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalheader: {
    fontSize: 20,
    fontFamily: fonts.robotoBold,
    fontWeight: '700',
    color: colors.textbalck,
  },
});

export default styles;
