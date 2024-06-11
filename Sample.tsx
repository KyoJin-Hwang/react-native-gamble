import React from 'react';
import {StyleSheet, View} from 'react-native';

function Sample(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', gap: 20}}>
        <View style={{display: 'flex', gap: 20}}>
          <View style={{width: 20, height: 20, backgroundColor: 'red'}}></View>
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: 'orange',
            }}></View>
        </View>
        <View style={{display: 'flex', gap: 20}}>
          <View style={{width: 20, height: 20, backgroundColor: 'blue'}}></View>
          <View
            style={{width: 20, height: 20, backgroundColor: 'skyblue'}}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Sample;
