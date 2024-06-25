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
      <Text style={styles.textHeader}>내기의 기운 💣</Text>
      {BUTTON_TYPE.map(item => (
        <MenuButton key={item.idx} text={item.title} />
      ))}
      <View style={styles.textFooterContainer}>
        <Text style={styles.textFooter}>GitHub</Text>
        <View style={styles.footerBox}>
          <Text style={styles.textFooter}>Owen</Text>
          <Text style={styles.textFooter}>kokong1231</Text>
        </View>
      </View>
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
    textAlign: 'center',
    fontSize: 47,
    fontFamily: 'Pretendard-Bold',
  },
  textFooterContainer: {
    flex: 1,
    position: 'absolute',
    left: 20,
    bottom: 20,
    gap: 10,
  },
  textFooter: {
    color: 'black',
    fontSize: 24,
  },
  footerBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default MainPage;
