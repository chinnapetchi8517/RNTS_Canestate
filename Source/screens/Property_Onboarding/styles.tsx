import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  mapheader: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: fonts.robotoMedium,
    color: colors.textbalck,
    marginTop: 24,
    marginHorizontal: 24,
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
});
export default styles;
