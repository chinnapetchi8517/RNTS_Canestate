import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

interface Styles {
  wrapper: ViewStyle;
  centerimage: ViewStyle;
  title: TextStyle;
}

const styles: Styles = StyleSheet.create({
  wrapper: {height: '100%', width: '100%', backgroundColor: colors.white},
  centerimage: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  title: {
    fontFamily: fonts.robotoMedium,
    fontSize: 16,
    fontWeight: '500',
    color: colors.textbalck,
    textAlign: 'center',
    marginTop: 42,
  },
});

export default styles;
