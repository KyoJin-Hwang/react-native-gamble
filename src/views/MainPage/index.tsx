import MenuButton from '@/components/Main/MenuButton';
import {MainButtonT} from '@/types/Main/main';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const BUTTON_TYPE: MainButtonT[] = [
  {idx: 1, title: '핑거 초이스 👇', page: 'Finger'},
  {idx: 2, title: '폭탄 돌리기 💣', page: 'Boom'},
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
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const interpolated = headerIconRef.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -30],
  });
  const openWebpage = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };
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
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.textHeaderContainer}>
        <Animated.Text style={styles.textHeader}>내기의 기운</Animated.Text>
        <Animated.Text
          style={[
            styles.textHeader,
            {transform: [{translateY: interpolated}]},
          ]}>
          {EMOJIS[currentEmoji]}
        </Animated.Text>
      </View>
      {/* 메뉴 */}
      <View style={styles.menuContainer}>
        {BUTTON_TYPE.map(item => (
          <MenuButton
            key={item.idx}
            text={item.title}
            fuc={() => (item.page ? navigation.push(item.page) : null)}
          />
        ))}
      </View>
      {/* 푸터 */}
      <View style={styles.textFooterContainer}>
        <Text style={styles.textFooterTitle}>💼 GitHub</Text>
        <View style={styles.footerBox}>
          <Text
            style={styles.textFooterSub}
            onPress={() => openWebpage('https://github.com/KyoJin-Hwang')}>
            🐭Owen
          </Text>
          <Text
            style={styles.textFooterSub}
            onPress={() => openWebpage('https://github.com/kokong1231')}>
            🐱kokong1231
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // wrap
  container: {
    flex: 1,
    display: 'flex',
    paddingHorizontal: 16,
    paddingVertical: 40,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },

  // 헤더
  textHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  textHeader: {
    color: 'black',
    textAlign: 'center',
    fontSize: 46,
    fontFamily: 'Pretendard-Bold',
  },

  // 메뉴
  menuContainer: {display: 'flex', gap: 30},

  // 푸터
  textFooterContainer: {
    backgroundColor: '#0064FF',
    padding: 16,
    borderRadius: 14,
    gap: 20,
    borderWidth: 2,
    borderColor: 'black',
  },
  footerBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textFooterTitle: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Pretendard-Medium',
  },
  textFooterSub: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Pretendard-Regular',
    borderWidth: 1,
    borderColor: 'white',
    padding: 8,
    borderRadius: 4,
  },
});

export default MainPage;
