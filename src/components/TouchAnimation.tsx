import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';

interface AREA {
  x: number;
  y: number;
  final: boolean;
}

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
            opacity: !touchEvent
              ? 1
              : rotateValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.3, 1],
                }),
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: 'black',
    borderRadius: 80,
    width: 80,
    height: 80,
    padding: 16,
    borderWidth: 8,
    borderStyle: 'solid',
    borderEndColor: 'rgba(9, 130, 170, 1)',
    borderBlockColor: 'rgba(40, 40, 40, 1)',
    position: 'relative',
  },
  pointBackgroundActivate: {
    padding: 8,
    borderRadius: 88,
    borderStyle: 'solid',
    borderColor: 'rgba(10, 130, 170, 0.5)',
    borderWidth: 4,
    maxWidth: 104,
    position: 'absolute',
  },
  pointBackgroundDeactivate: {
    padding: 8,
    borderRadius: 88,
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 4,
    position: 'absolute',
  },
});

export default TouchAnimation;
