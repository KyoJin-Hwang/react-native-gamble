import {AREA} from '@/types/Finger/finger-type';
import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function TouchAnimation(props: AREA) {
  const rotateValue = useRef(new Animated.Value(0)).current;
  const [touchEvent, setTouchEvent] = React.useState(false);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotateValue, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ]),
    ).start();
  }, []);
  useEffect(() => {
    if (props.final) {
      setTouchEvent(true);
    }
  }, [props]);

  return (
    <View
      style={[
        touchEvent
          ? {...styles.pointBackgroundActivate, top: props.x, left: props.y}
          : {...styles.pointBackgroundDeactivate, top: props.x, left: props.y},
      ]}>
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [
              {
                rotate: rotateValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
            opacity: touchEvent
              ? 1
              : rotateValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.5, 1],
                }),
          },
        ]}>
        {!touchEvent ? null : (
          <TouchableOpacity onPress={props.restartFunc}>
            <Text style={styles.restartText}>재시작</Text>
          </TouchableOpacity>
        )}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    borderWidth: 8,
    borderTopColor: '#0064FF',
    borderRightColor: 'black',
    borderBottomColor: '#0064FF',
    borderLeftColor: 'black',
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  // circle: {
  //   backgroundColor: 'yellow',
  //   borderRadius: 80,
  //   width: 100,
  //   height: 100,
  //   borderWidth: 8,
  //   borderStyle: 'solid',
  //   borderTopColor: 'red',
  //   borderRightColor: 'blue',
  //   position: 'relative',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  restartText: {
    fontSize: 22,
    fontFamily: 'Pretendard-Bold',
    color: 'black',
  },
  pointBackgroundActivate: {
    padding: 8,
    borderRadius: 100,
    borderStyle: 'solid',
    borderColor: '#0064FF',
    borderWidth: 4,
    maxWidth: 140,
    position: 'absolute',
  },
  pointBackgroundDeactivate: {
    position: 'absolute',
  },
});

export default TouchAnimation;
