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
      <Text>Main</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    gap: 50,
  },
});

export default MainPage;
