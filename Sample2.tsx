import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  GestureResponderEvent,
  Text,
  TouchableOpacity,
} from 'react-native';
import TouchAnimation from './src/components/TouchAnimation';

interface HANDT {
  idx: number;
  x: number;
  y: number;
}

const Sample2 = () => {
  const [handArray, setHandArray] = useState<HANDT[]>([]);
  const [isCount, setIsCount] = useState(0);
  const [isFinal, setIsFinal] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const selectHand = (event: GestureResponderEvent) => {
    const {touches} = event.nativeEvent;

    const touchList = touches.map(data => ({
      idx: +data.identifier,
      x: data.pageX - 50,
      y: data.pageY - 50,
    }));

    if (!isFinal) {
      setHandArray(touchList);
    }
  };

  const restartButton = () => {
    setIsFinal(false);
    setHandArray([]);
  };

  useEffect(() => {
    if (handArray.length !== isCount && handArray.length >= 2) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        const endPoint = handArray.filter((data, idx) => {
          if (data.idx === Math.floor(Math.random() * idx)) {
            setIsFinal(true);
            return true;
          } else {
            return false;
          }
        });
        setHandArray(endPoint);
      }, 3000);
    }
    setIsCount(handArray.length);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handArray]);

  return (
    <View
      style={styles.container}
      onTouchStart={selectHand}
      onTouchEnd={selectHand}
      onStartShouldSetResponder={() => true}>
      {!isFinal ? (
        handArray.length >= 1 ? null : (
          <View style={styles.textBox}>
            <Text style={styles.text}>손가락을 3초동안 누르면</Text>
            <Text style={styles.text}>시작됩니다.</Text>
          </View>
        )
      ) : (
        <View style={styles.textBox}>
          <TouchableOpacity onPress={restartButton}>
            <Text style={styles.text2}>재시작</Text>
          </TouchableOpacity>
        </View>
      )}
      {handArray.map(el => (
        <TouchAnimation key={el.idx} final={isFinal} x={el.y} y={el.x} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    gap: 50,
  },
  textBox: {
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    padding: 16,
    backgroundColor: 'rgba(9, 130, 170, 1)',
  },
});

export default Sample2;
