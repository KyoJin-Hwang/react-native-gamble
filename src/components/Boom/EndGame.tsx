import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface PROPS {
  boomGet: number;
  gameState: number;
  setBoomGet: React.Dispatch<React.SetStateAction<number>>;
  setGameState: React.Dispatch<React.SetStateAction<number>>;
  setBoomCount: React.Dispatch<React.SetStateAction<number>>;
}

const EndGame = (props: PROPS) => {
  return (
    <View style={styles.container}>
      {props.gameState === 2 ? (
        props.boomGet === 1 ? (
          <View>
            <Restart {...props} />
            <Text style={styles.redWinnerText}>빨강 승</Text>
          </View>
        ) : (
          <View>
            <Restart {...props} />
            <Text style={styles.blueWinnerText}>파랑 승</Text>
          </View>
        )
      ) : null}
    </View>
  );
};
const Restart = (props: PROPS) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => {
        if (props.gameState === 2) {
          props.setBoomGet(0);
          props.setGameState(0);
          props.setBoomCount(Math.floor(Math.random() * 5) + 25);
        }
      }}>
      <Text style={styles.buttonText}>다시하기</Text>
    </TouchableOpacity>
  );
};

export default EndGame;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  redWinnerText: {
    fontSize: 48,
    fontWeight: '600',
    color: 'red',
  },
  blueWinnerText: {
    fontSize: 48,
    fontWeight: '600',
    color: 'blue',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'black',
    padding: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
  },
});
