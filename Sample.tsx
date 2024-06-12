import React, {useEffect, useReducer, useRef, useState} from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function Sample(): React.JSX.Element {
  const [toggle, setToggle] = useReducer(state => {
    return !state;
  }, false);
  const [randomNumber, setRandomNumber] = useState(0);
  const [time, setTime] = useState(5);
  const returnAni = useRef(new Animated.Value(0)).current;

  const touchStart = () => {
    Animated.timing(returnAni, {
      toValue: 20,
      duration: 4000,
      useNativeDriver: true,
    }).start(() => {
      console.log('first');
    });
  };
  const restStart = () => {
    Animated.timing(returnAni, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      console.log('reset');
    });
  };
  console.log(returnAni);
  const gameFuc = () => {
    if (time === 0 || time === 5) {
      setToggle();
      restStart();
      if (time === 0) {
        setTime(5);
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time !== 0 && toggle) {
        setTime(el => el - 1);
      }
      if (time === -1) return () => clearTimeout(timer);
    }, 100);
  }, [time, toggle]);
  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 9) + 1);
  }, [toggle]);
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        {toggle ? (
          time === 0 ? (
            <Text>ㅅ</Text>
          ) : (
            <Text style={{...styles.textStyle}}>{time}</Text>
          )
        ) : (
          <Text>test</Text>
        )}
      </View>
      <View style={{...styles.buttonContainer}}>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            backgroundColor: 'white',
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={gameFuc}>
          <Text
            style={{
              height: 36,
              display: 'flex',
              flexDirection: 'row',
              color: 'black',
              fontWeight: 600,
              letterSpacing: 10,
              fontSize: 24,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {toggle ? '초기화' : '시작'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    position: 'relative',
  },
  boxContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  ball: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  textStyle: {
    fontSize: 54,
    color: 'black',
  },
  buttonContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    maxHeight: 62,
  },
});

export default Sample;
