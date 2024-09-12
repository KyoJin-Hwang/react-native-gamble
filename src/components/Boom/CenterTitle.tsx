import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BoomIcon from './BoomIcon';

interface PROPS {
  boomGet: number;
  gameState: number;
  boomCount: number;
  startCount: number;
}

const CenterTitle = (props: PROPS) => {
  return (
    <View style={styles.container}>
      {props.boomGet === 0 ? (
        <View style={styles.gameTable}>
          <BoomIcon
            gameState={props.gameState}
            boomCount={props.boomCount}
            startCount={props.startCount}
          />
          <View style={{display: 'flex', alignItems: 'center'}}>
            <Text
              style={{
                color: 'blue',
                fontFamily: 'Pretendard-ExtraBold',
                fontSize: 20,
              }}>
              제한시간내에
            </Text>
            <Text
              style={{
                color: 'red',
                fontFamily: 'Pretendard-ExtraBold',
                fontSize: 20,
              }}>
              상대방에게 폭탄을 보내세요!
            </Text>
          </View>
          <Text
            style={{
              color: '#ffce09',
              fontFamily: 'Pretendard-ExtraBold',
              fontSize: 20,
            }}>
            손가락버튼을 누르면 게임이 시작됩니다!
          </Text>
        </View>
      ) : (
        <View style={styles.gameTable} />
      )}
    </View>
  );
};

export default CenterTitle;

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  gameTable: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
