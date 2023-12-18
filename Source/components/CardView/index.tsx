import React, {FC} from 'react';
import {Pressable, Text, View, ViewStyle} from 'react-native';
import styles from './styles';
import {Cardviewprops} from '../../utils/types';

const CardView: FC<Cardviewprops> = ({
  maxHeight = 120,
  children,
  containerStyle,
  isCardsquare = false,
  carviewStyles,
  ismulticolor = false,
  customRightcornerStyle,
  onPress,
}) => {
  return (
    <>
      <Pressable
        onPress={onPress}
        style={[styles.CardViewcontainer, containerStyle]}>
        {ismulticolor ? (
          <View style={{flexDirection: 'row'}}>
            <View
              style={[
                styles.CardViewwith_colorborder,
                {height: maxHeight},
                carviewStyles,
              ]}>
              {children}
            </View>
            <View
              style={[
                styles.rightcornerStyle,
                {height: maxHeight},
                customRightcornerStyle,
              ]}></View>
          </View>
        ) : (
          <View
            style={[
              isCardsquare ? styles.CardViewsquare : styles.CardViewretangular,
              {height: maxHeight},
              carviewStyles,
            ]}>
            {children}
          </View>
        )}
      </Pressable>
    </>
  );
};
export default CardView;
