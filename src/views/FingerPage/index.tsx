import TouchAnimation from '../../components/TouchAnimation';
import SelectHand from '../../containers/Finger/SelectHand';
import TimingCatch from '../../containers/Finger/Timer';
import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

interface HANDT {
  idx: number;
  x: number;
  y: number;
}

const FingerPage = () => {
  const [handArray, setHandArray] = useState<HANDT[]>([]);
  const [isCount, setIsCount] = useState(0);
  const [isFinal, setIsFinal] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const restartButton = () => {
    setIsFinal(false);
    setHandArray([]);
  };

  useEffect(() => {
    TimingCatch({
      handArray: handArray,
      timeoutRef: timeoutRef,
      isCount: isCount,
      setIsFinal: setIsFinal,
      setHandArray: setHandArray,
    });

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
      onTouchStart={e =>
        SelectHand({event: e, setData: setHandArray, isFinal: isFinal})
      }
      onTouchEnd={e =>
        SelectHand({event: e, setData: setHandArray, isFinal: isFinal})
      }
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

export default FingerPage;
