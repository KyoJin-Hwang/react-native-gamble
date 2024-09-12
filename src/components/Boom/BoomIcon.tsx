import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';

interface PROPS {
  gameState: number;
  boomCount: number;
  startCount: number;
}

const BoomIcon = (props: PROPS) => {
  const shadowColorAnim = useRef(new Animated.Value(0)).current;
  const percent80 = Math.floor(props.startCount * 0.2);
  const percent40 = Math.floor(props.startCount * 0.6);

  console.log('percent40 : ' + percent40);
  console.log('percent80 : ' + percent80);
  useEffect(() => {
    if (props.boomCount > percent40) {
      Animated.timing(shadowColorAnim, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: false,
      }).start();
    } else if (props.boomCount > percent80 && props.boomCount < percent40) {
      Animated.timing(shadowColorAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(shadowColorAnim, {
        toValue: 2,
        duration: 2000,
        useNativeDriver: false,
      }).start();
    }
  }, [props.boomCount]);
  const shadowColorInterpolation = shadowColorAnim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ['rgb(255, 255, 0)', 'rgb(255, 165, 0)', 'rgb(255, 0, 0)'],
  });

  return (
    <View>
      {props.gameState === 2 ? (
        <Animated.Text
          style={[styles.end, {textShadowColor: shadowColorInterpolation}]}>
          😭
        </Animated.Text>
      ) : (
        <Animated.Text
          style={[
            styles.gameIcon,
            {textShadowColor: shadowColorInterpolation},
          ]}>
          💣
        </Animated.Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  gameIcon: {
    fontSize: 80,
    color: 'black',
    padding: 40,
    textShadowOffset: {width: 0, height: 15},
    textShadowRadius: 1,
  },
  end: {
    fontSize: 80,
    color: 'black',
    padding: 40,
  },
});

export default BoomIcon;
