import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
  },
  inputcontainerStyle: {
    marginTop: 24,
    backgroundColor: 'white',
    marginHorizontal: 24,
    borderRadius: 10,
    color: colors.textbalck,
  },
  cardheader: {
    fontFamily: fonts.robotoBold,
    fontSize: 14,
    color: colors.cardtext,
    fontWeight: '700',
    marginHorizontal: 20,
    marginTop: 20,
  },
  counterText: {
    fontFamily: fonts.robotoBold,
    fontSize: 14,
    color: colors.cardtext,
    fontWeight: '700',
    marginHorizontal: 20,
  },
  card2header: {
    fontFamily: fonts.robotoBold,
    fontSize: 14,
    color: colors.textbalck,
    fontWeight: '600',
    marginHorizontal: 20,
    marginTop: 10,
  },
  subText: {
    fontFamily: fonts.robotoMedium,
    fontSize: 12,
    color: colors.greyText,
    fontWeight: '600',
    marginHorizontal: 20,
    marginTop: 5,
  },
  notes: {
    marginTop: 5,
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderRadius: 10,
    color: colors.textbalck,
  },
});
export default styles;
