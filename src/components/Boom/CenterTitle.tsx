import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BoomIcon from './BoomIcon';

interface PROPS {
  boomGet: number;
  gameState: number;
}

const CenterTitle = (props: PROPS) => {
  return (
    <View style={styles.container}>
      {props.boomGet === 0 ? (
        <View style={styles.gameTable}>
          <BoomIcon gameState={props.gameState} />
          <Text>버튼을 누르면 게임이 시작됩니다!</Text>
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
    flex: 1,
  },
  gameTable: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
