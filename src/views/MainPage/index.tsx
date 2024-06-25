import MenuButton from '@/components/Main/MenuButton';
import {MainButtonT} from '@/types/Main/main';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, Easing, StyleSheet, Text, View} from 'react-native';

const BUTTON_TYPE: MainButtonT[] = [
  {idx: 1, title: '핑거 초이스 👇'},
  {idx: 2, title: '개발 준비중 🚥'},
  {idx: 3, title: '개발 준비중 🚥'},
  {idx: 4, title: '개발 준비중 🚥'},
  {idx: 5, title: '개발 준비중 🚥'},
];

const EMOJIS = ['💣', '🧨', '🔥', '⚡', '🎉', '🧋', '🍺', '🍹', '💊', '🍾']; // 사용할 이모지 목록

function MainPage() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const headerIconRef = useRef(new Animated.Value(0)).current;
  const [currentEmoji, setCurrentEmoji] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmoji(Math.floor(Math.random() * EMOJIS.length));
    }, 1500); // 5초마다 이모지 변경

    return () => clearInterval(interval);
  }, []);

  const interpolated = headerIconRef.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -30],
  });

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(headerIconRef, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(headerIconRef, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ]),
    ).start();
  }, [headerIconRef]);

  return (
    <View
      style={styles.container}
      onTouchEnd={() => {
        navigation.push('Finger', {state: 1});
      }}>
      <View
        style={{
          flexDirection: 'row',
          gap: 20,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 74,
        }}>
        <Animated.Text style={styles.textHeader}>내기의 기운</Animated.Text>
        <Animated.Text
          style={[
            styles.textHeader,
            {transform: [{translateY: interpolated}]},
          ]}>
          {EMOJIS[currentEmoji]}
        </Animated.Text>
      </View>
      <View style={styles.menuContainer}>
        {BUTTON_TYPE.map(item => (
          <MenuButton key={item.idx} text={item.title} />
        ))}
      </View>
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
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  textHeader: {
    color: 'black',
    textAlign: 'center',
    fontSize: 46,
    fontFamily: 'Pretendard-Bold',
  },
  textFooterContainer: {
    flex: 1,
    position: 'absolute',
    left: 20,
    bottom: 40,
    gap: 10,
  },
  menuContainer: {
    marginTop: 50,
    gap: 26,
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
