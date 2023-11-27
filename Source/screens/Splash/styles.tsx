import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface Styles {
  wrapper: ViewStyle;
  centerimage: ViewStyle;
}

const styles: Styles = StyleSheet.create({
  wrapper: {height: '100%', width: '100%'},
  centerimage: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 290,
  },
});

export default styles;
