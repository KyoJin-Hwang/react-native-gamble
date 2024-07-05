import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';

interface PROPS {
  gameState: number;
  timer: number;
}

const BoomIcon = (props: PROPS) => {
  const shadowColorAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (props.timer < 1) {
      Animated.timing(shadowColorAnim, {
        toValue: 2, // 최종 값을 2로 설정하여 3단계 애니메이션을 만듦
        duration: 4000,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(shadowColorAnim, {
        toValue: 0,
        duration: 4000,
        useNativeDriver: false,
      }).start();
    }
  }, [props.timer]);

  const shadowColorInterpolation = shadowColorAnim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ['rgb(255, 255, 0)', 'rgb(255, 165, 0)', 'rgb(255, 0, 0)'],
  });

  return (
    <View>
      {props.gameState === 2 ? (
        <Animated.Text
          style={[styles.icon, {textShadowColor: shadowColorInterpolation}]}>
          😭
        </Animated.Text>
      ) : (
        <Animated.Text
          style={[styles.icon, {textShadowColor: shadowColorInterpolation}]}>
          💣
        </Animated.Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 80,
    color: 'black',
    padding: 16,
    textShadowOffset: {width: 0, height: 20},
    textShadowRadius: 5,
  },
});

export default BoomIcon;
