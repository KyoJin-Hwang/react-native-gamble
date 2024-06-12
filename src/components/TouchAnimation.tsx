import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';

interface AREA {
  x: number;
  y: number;
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

  return (
    <View
      onTouchStart={() => setTouchEvent(!touchEvent)}
      onTouchEnd={() => setTouchEvent(!touchEvent)}
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
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: 'aqua',
    borderRadius: 80,
    width: 80,
    height: 80,
    padding: 16,
    borderWidth: 8,
    borderStyle: 'solid',
    borderEndColor: 'black',
    borderBlockColor: 'red',
    opacity: 0.5,
    position: 'relative',
  },
  pointBackgroundActivate: {
    padding: 8,
    borderRadius: 88,
    borderStyle: 'solid',
    borderColor: 'rgba(255,0,0,0.3)',
    borderWidth: 4,
    maxWidth: 104,
  },
  pointBackgroundDeactivate: {
    padding: 8,
    borderRadius: 88,
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 4,
  },
});

export default TouchAnimation;
