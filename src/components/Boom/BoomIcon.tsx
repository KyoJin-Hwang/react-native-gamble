import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface PROPS {
  gameState: number;
}

const BoomIcon = (props: PROPS) => {
  return (
    <View>
      {props.gameState === 2 ? (
        <Text style={styles.boomIcon}>😭</Text>
      ) : (
        <Text style={styles.boomIcon}>💣</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  boomIcon: {
    fontSize: 120,
    color: 'black',
    padding: 16,
  },
});

export default BoomIcon;
