import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function MainPage() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View
      style={styles.container}
      onTouchEnd={() => {
        navigation.push('Finger', {state: 1});
      }}>
      <Text style={styles.fontTest}>Main2</Text>
      <Text style={styles.fontTest2}>Main2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    gap: 50,
  },
  fontTest: {
    fontFamily: 'Pretendard-Black',
    fontSize: 52,
  },
  fontTest2: {
    fontFamily: 'Pretendard-Thin',
    fontSize: 52,
  },
});

export default MainPage;
