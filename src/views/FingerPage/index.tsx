import Button from '@/components/Finger/Button';
import Descruption from '@/components/Finger/Descruption';
import FingerRunLevelComponents from '@/components/Finger/SwitchComponents';
import SelectHand from '@/containers/Finger/SelectHand';
import TimingCatch from '@/containers/Finger/Timer';
import {HANDT} from '@/types/Finger/finger-type';
import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';

const FingerPage = () => {
  const [handArray, setHandArray] = useState<HANDT[]>([]);
  const [isCount, setIsCount] = useState(0);
  const [isFinal, setIsFinal] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const restartButton = () => {
    setIsFinal(false);
    setHandArray([]);
  };

  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={() => true}
      onTouchStart={e =>
        SelectHand({event: e, setData: setHandArray, isFinal: isFinal})
      }
      onTouchEnd={e =>
        SelectHand({event: e, setData: setHandArray, isFinal: isFinal})
      }>
      <FingerRunLevelComponents
        isFinal={isFinal}
        handArray={handArray}
        restartFunc={restartButton}
      />
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

export default FingerPage;
