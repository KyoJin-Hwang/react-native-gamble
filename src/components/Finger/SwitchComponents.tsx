import React from 'react';
import {View} from 'react-native';
import Button from './Button';
import Descruption from './Descruption';
import TouchAnimation from './TouchAnimation';
import {HANDT} from '@/types/Finger/finger-type';

interface RUN_LEVEL_PROPS {
  isFinal: boolean;
  handArray: HANDT[];
  restartFunc: () => void;
}

export const FingerRunLevelComponents = (props: RUN_LEVEL_PROPS) => {
  return (
    <View>
      {!props.isFinal ? (
        props.handArray.length >= 1 ? null : (
          <Descruption />
        )
      ) : (
        <Button restartButton={props.restartFunc} />
      )}
      {props.handArray.map(el => (
        <TouchAnimation key={el.idx} final={props.isFinal} x={el.y} y={el.x} />
      ))}
    </View>
  );
};
