import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '70%',

    //backgroundColor: colors.white,
  },
  dotstyle: {
    backgroundColor: 'white',
    width: 5.38,
    height: 5.38,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    // marginBottom: 50,
  },
  activedot: {
    backgroundColor: colors.primarycolor,
    width: 5.38,
    height: 5.38,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  subheaderText: {
    fontSize: 20,
    fontFamily: fonts.robotoMedium,
    fontWeight: '700',
    color: colors.textbalck,
    marginTop: 16,
    marginHorizontal: 16,
  },
  bgText: {
    fontSize: 12,
    fontFamily: fonts.robotoMedium,
    fontWeight: '400',
    color: colors.bgtextclr,
    marginTop: 12,
    marginHorizontal: 16,
    padding: 8,
    backgroundColor: colors.bgcolorText,
    textTransform: 'capitalize',
    borderRadius: 5,
  },
  countText: {
    fontSize: 14,
    marginHorizontal: 8,
    fontFamily: fonts.robotoBold,
    fontWeight: '700',
    color: colors.textbalck,
  },
  ActiveText: {
    fontSize: 14,

    fontFamily: fonts.robotoBold,
    fontWeight: '700',
    color: colors.white,
    right: 5,
    textAlign: 'center',
    transform: [{rotate: '-90deg'}],
  },
  VacantText: {
    fontSize: 12,
    fontFamily: fonts.robotoMedium,
    fontWeight: '400',
    color: colors.bgtextclr,
    marginTop: 5,
    marginHorizontal: 16,
  },
  inputcontainerStyle: {
    marginTop: 24,
    marginHorizontal: 10,
    borderRadius: 10,
    //width: 144,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  inputcontainerStyle1: {
    marginTop: 24,
    marginRight: 20,
    //marginHorizontal: 20,
    borderRadius: 10,
    //color: colors.,
    width: '65%',
  },
});

export default styles;
