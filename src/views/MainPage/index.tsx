import MenuButton from '@/components/Main/MenuButton';
import {MainButtonT} from '@/types/Main/main';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const BUTTON_TYPE: MainButtonT[] = [
  {idx: 1, title: '핑거 초이스 👇'},
  {idx: 2, title: '개발 준비중 🚥'},
  {idx: 3, title: '개발 준비중 🚥'},
  {idx: 4, title: '개발 준비중 🚥'},
  {idx: 5, title: '개발 준비중 🚥'},
];
function MainPage() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View
      style={styles.container}
      onTouchEnd={() => {
        navigation.push('Finger', {state: 1});
      }}>
      <Text style={styles.textHeader}>Main</Text>
      {BUTTON_TYPE.map(item => (
        <MenuButton key={item.idx} text={item.title} />
      ))}
      {/* <Text style={styles.textFooter}>제작자 : Owen , kokong1231</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  textHeader: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 64,
  },
  textFooter: {
    color: 'black',
    fontSize: 34,
  },
});

export default MainPage;
