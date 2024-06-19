import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Descruption() {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>손가락을 3초동안 누르면</Text>
      <Text style={styles.description}>시작됩니다.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  description: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Descruption;
