import {FingerRunLevelComponents} from '@/components/Finger/SwitchComponents';
import SelectHand from '@/containers/Finger/SelectHand';
import TimingCatch from '@/containers/Finger/Timer';
import {HANDT} from '@/types/Finger/finger-type';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';

const FingerPage = () => {
  const [handArray, setHandArray] = useState<HANDT[]>([]);
  const [isCount, setIsCount] = useState(0);
  const [isFinal, setIsFinal] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

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
      onTouchStart={e =>
        SelectHand({event: e, setData: setHandArray, isFinal: isFinal})
      }
      onTouchEnd={e =>
        SelectHand({event: e, setData: setHandArray, isFinal: isFinal})
      }
      // onTouchMove={() => {
      //   navigation.replace('MainPage', {state: 2});
      // }}
      onStartShouldSetResponder={() => true}>
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
