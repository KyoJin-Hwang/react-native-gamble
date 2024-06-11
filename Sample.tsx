import React, {useEffect, useReducer, useRef} from 'react';
import {Animated, Button, StyleSheet, Text, View} from 'react-native';
interface BOXVIEWT {
  bg: string;
}

const BoxView = (props: BOXVIEWT) => {
  return (
    <View
      style={{
        ...styles.box,
        backgroundColor: props.bg,
      }}
    />
  );
};

function Sample(): React.JSX.Element {
  const [toggle, setToggle] = useReducer(state => {
    return !state;
  }, false);
  const returnAni = useRef(new Animated.Value(0)).current;
  const returnAni2 = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(returnAni, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {});
    Animated.timing(returnAni2, {
      toValue: 5,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {});
  };
  const fadeOut = () => {
    Animated.timing(returnAni, {
      toValue: 0.8,
      duration: 8000,
      useNativeDriver: true,
    }).start();
    Animated.timing(returnAni2, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {});
  };
  useEffect(() => {
    if (toggle) return fadeIn();
    else return fadeOut();
  }, [toggle]);
  return (
    <View style={styles.container}>
      <View>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              marginBottom: 0,
              opacity: returnAni,
              transform: [
                {
                  translateX: returnAni2.interpolate({
                    // Value의 값이 0일때는 0, 1일때는 150
                    inputRange: [0, 5],
                    outputRange: [-270, 270],
                  }),
                },
                {
                  rotate: returnAni2.interpolate({
                    // Value의 값이 0일때는 0, 1일때는 150
                    inputRange: [0, 5],
                    outputRange: [`0deg`, `360deg`],
                  }),
                },
              ],
            },
          ]}></Animated.View>
        <Animated.View
          style={[
            styles.fadingContainer2,
            {
              opacity: returnAni,
              transform: [
                {
                  translateX: returnAni2.interpolate({
                    // Value의 값이 0일때는 0, 1일때는 150
                    inputRange: [0, 5],
                    outputRange: [270, -270],
                  }),
                },
                {
                  rotate: returnAni2.interpolate({
                    // Value의 값이 0일때는 0, 1일때는 150
                    inputRange: [0, 5],
                    outputRange: [`0deg`, `360deg`],
                  }),
                },
              ],
            },
          ]}></Animated.View>
        <Animated.View
          style={[
            styles.fadingContainer3,
            {
              opacity: returnAni,
              transform: [
                {
                  translateX: returnAni2.interpolate({
                    // Value의 값이 0일때는 0, 1일때는 150
                    inputRange: [0, 5],
                    outputRange: [-270, 270],
                  }),
                },
                {
                  rotate: returnAni2.interpolate({
                    // Value의 값이 0일때는 0, 1일때는 150
                    inputRange: [0, 5],
                    outputRange: [`0deg`, `360deg`],
                  }),
                },
              ],
            },
          ]}></Animated.View>
      </View>
      <View style={styles.buttonRow}>
        <Button title="미끄럼틀 버튼 갈겨!" onPress={setToggle} />
      </View>

      <View style={{flexDirection: 'row', gap: 40}}>
        <View style={{display: 'flex', gap: 40}}>
          <BoxView bg="red" />
          <BoxView bg="orange" />
        </View>
        <View style={{display: 'flex', gap: 40}}>
          <BoxView bg="blue" />
          <BoxView bg="skyblue" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 80,
    height: 80,
    borderRadius: 16,
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'black',
    borderRadius: 50,
  },
  fadingContainer2: {
    padding: 20,
    backgroundColor: 'red',
    borderRadius: 50,
  },
  fadingContainer3: {
    padding: 20,
    backgroundColor: 'blue',
    borderRadius: 50,
  },

  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});

export default Sample;
