import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface PROPS {
  restartButton: () => void;
}

function Button(props: PROPS) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.restartButton}>
        <Text style={styles.button}>재시작</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    padding: 16,
    backgroundColor: 'rgba(9, 130, 170, 1)',
  },
});

export default Button;
