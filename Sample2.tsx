import {View, StyleSheet, GestureResponderEvent} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import TouchAnimation from './src/components/TouchAnimation';
interface HANDT {
  x: number;
  y: number;
}

const Sample2 = () => {
  const [selectX, setSelectX] = useState(0);
  const [selectY, setSelectY] = useState(0);
  const [hand, setHand] = useState(1);
  const [handArray, setHandArray] = useState<HANDT[]>([]);
  const numberOfTouches = useRef(0);
  const handlePress = (event: GestureResponderEvent) => {
    const {locationX, locationY, pageX, pageY} = event.nativeEvent;

    setSelectX(Math.floor(pageX - 50));
    setSelectY(Math.floor(pageY - 50));
  };
  const selectHand = (event: GestureResponderEvent) => {
    const {pageX, pageY} = event.nativeEvent;

    setHand(hand + 1);
    let arr = Array.from(Array(hand)).map((result, i) => {
      return {x: Math.floor(pageX), y: Math.floor(pageY), idx: i};
    });
    console.log(arr);
  };
  const unSelectHand = () => {
    setHand(hand - 1);
  };
  useEffect(() => {
    console.log(hand);
  }, [hand]);

  return (
    <View
      style={styles.container}
      //   onTouchMove={handlePress}
      onTouchStart={selectHand}
      onTouchEnd={unSelectHand}
      onStartShouldSetResponder={() => true}>
      {Array.from(Array(1)).map((el, idx) => {
        return <TouchAnimation key={idx} x={selectY} y={selectX} />;
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    gap: 50,
  },
});
export default Sample2;
