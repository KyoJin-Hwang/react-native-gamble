import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from './Button';
import Descruption from './Descruption';
import TouchAnimation from './TouchAnimation';
import {HANDT} from '@/types/Finger/finger-type';

interface RUN_LEVEL_PROPS {
  isFinal: boolean;
  handArray: HANDT[];
  restartFunc: () => void;
}

const FingerRunLevelComponents = (props: RUN_LEVEL_PROPS) => {
  return (
    <View style={styles.container}>
      {!props.isFinal ? (
        props.handArray.length >= 1 ? null : (
          <Descruption />
        )
      ) : null}
      {props.handArray.map(el => (
        <TouchAnimation
          key={el.idx}
          final={props.isFinal}
          x={el.y}
          y={el.x}
          restartFunc={props.restartFunc}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
export default FingerRunLevelComponents;
