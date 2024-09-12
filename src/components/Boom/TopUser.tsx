import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface PROPS {
  setBoomGet: React.Dispatch<React.SetStateAction<number>>;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  gameState: number;
  timer: number;
  boomGet: number;
}

const TopUser = (props: PROPS) => {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={styles.buttonTop}
        onPress={() => {
          if (
            (props.boomGet === 0 || props.boomGet === 1) &&
            props.gameState !== 2 &&
            props.timer === 0
          ) {
            props.setBoomGet(2);
            props.setTimer(2);
          }
        }}>
        {props.boomGet === 1 ? (
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
        <Text style={styles.buttonText}>👇</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopUser;

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 40,
    color: 'black',
  },
  buttonTop: {
    backgroundColor: '#0064FF',
    height: 80,
    padding: 8,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
});
