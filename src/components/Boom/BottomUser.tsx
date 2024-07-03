import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface PROPS {
  setBoomGet: React.Dispatch<React.SetStateAction<number>>;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  gameState: number;
  timer: number;
  boomGet: number;
}

const BottomUser = (props: PROPS) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.buttonBottom}
        onPress={() => {
          if (props.gameState !== 2 && props.timer === 0) {
            props.setBoomGet(1);
            props.setTimer(2);
          }
        }}>
        <Text style={styles.buttonText}>👆</Text>
        {props.boomGet === 2 ? (
          <View>
            {props.timer === 0 ? (
              <Text>가능</Text>
            ) : (
              <Text>{Math.floor(props.timer)} 초</Text>
            )}
          </View>
        ) : (
          <Text>대기</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default BottomUser;

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 40,
    color: 'black',
  },
  buttonBottom: {
    backgroundColor: 'red',
    height: 80,
    padding: 8,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
});
