import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
  },
  imageview: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  inputcontainerStyle: {
    marginTop: 24,
    marginHorizontal: 24,
    borderRadius: 10,
    width: 50,
    alignItems: 'center',
  },
  inputcontainerStyle1: {
    marginTop: 24,
    marginRight: 20,
    //marginHorizontal: 20,
    borderRadius: 10,
    color: colors.textbalck,
    width: '70%',
  },
  inputcontainerStyle2: {
    marginTop: 24,
    marginHorizontal: 24,
    borderRadius: 10,
    color: colors.textbalck,
  },
  inputcontainerStyle3: {
    marginTop: 24,
    //marginHorizontal: 24,
    borderRadius: 10,
    width: 159,
    color: colors.textbalck,
  },
  inputcontainerStyle4: {
    marginTop: 24,
    marginLeft: 24,
    borderRadius: 10,
    width: 182,
    color: colors.textbalck,
  },
  listView: {
    width: 74,
    height: 74,
    backgroundColor: colors.textareaBg,
    borderRadius: 16.4,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputview: {
    width: 342,
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.lightgrey,
    marginTop: 20,
    marginHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    fontFamily: fonts.robotoRegular,
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'capitalize',
    marginHorizontal: 10,
    color: colors.textbalck,
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  modalstyle: {
    margin: 0,
    width: '100%',
    backgroundColor: colors.white,
    //justifyContent: 'flex-end',
    height: 214,
    borderRadius: 10,
  },
  tcL: {
    fontFamily: fonts.robotoMedium,
    fontSize: 14,
    color: '#4D4D4E',
    marginHorizontal: 24,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: '400',
  },
  termsText: {
    fontFamily: fonts.robotoMedium,
    fontSize: 12,
    color: colors.black,
    fontWeight: '400',
    marginLeft: 5,
  },
});
export default styles;
