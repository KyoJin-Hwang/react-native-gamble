import {StyleSheet, View} from 'react-native';
import React from 'react';
import CenterTitle from '@/components/Boom/CenterTitle';
import TopUser from '@/components/Boom/TopUser';
import BottomUser from '@/components/Boom/BottomUser';
import MoveBoom from '@/components/Boom/MoveBoom';
import EndGame from '@/components/Boom/EndGame';

const BoomPage = () => {
  // 0이면 가운데 1이면 상단 2이면 하단
  const [boomGet, setBoomGet] = React.useState(0);
  // 0이면 초기화 1이면 시작 2이면 종료
  const [gameState, setGameState] = React.useState(0);
  const [startCount, setStartCount] = React.useState(
    Math.floor(Math.random() * 5) + 25,
  );
  const [boomCount, setBoomCount] = React.useState(startCount);

  // 누를 수 있는 타이머 1초 최대
  const [timer, setTimer] = React.useState(0);

  // 게임이 초기화되고, boomCount 가 바뀔때 게임을 다시시작 Effect
  React.useEffect(() => {
    if (gameState === 0 && boomGet !== 0) {
      setGameState(1);
    }
  }, [boomGet, boomCount]);
  console.log(timer);
  // 유저 timer 줄이기 Effect
  React.useEffect(() => {
    if (timer >= 1) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }
  }, [timer]);

  // BoomCount 줄이는 Effect
  React.useEffect(() => {
    if (boomCount > 0 && gameState === 1) {
      setTimeout(() => {
        setBoomCount(boomCount - 1);
      }, 1000);
    } else if (boomCount === 0 && gameState === 1) {
      setGameState(2);
      console.log('종료--------------------------------');
    }
  }, [boomCount, gameState]);

  console.log('boomCounter : ' + boomCount);
  return (
    <View style={styles.container}>
      <TopUser
        setBoomGet={setBoomGet}
        setTimer={setTimer}
        gameState={gameState}
        timer={timer}
        boomGet={boomGet}
      />
      <MoveBoom
        boomGet={boomGet}
        position="top"
        gameState={gameState}
        boomCounter={boomCount}
        startCount={startCount}
      />
      <CenterTitle
        boomGet={boomGet}
        gameState={gameState}
        boomCount={boomCount}
        startCount={startCount}
      />
      <EndGame
        gameState={gameState}
        boomGet={boomGet}
        setBoomGet={setBoomGet}
        setGameState={setGameState}
        setBoomCount={setBoomCount}
      />
      <MoveBoom
        boomGet={boomGet}
        position="bottom"
        gameState={gameState}
        boomCounter={boomCount}
        startCount={startCount}
      />
      <BottomUser
        setBoomGet={setBoomGet}
        setTimer={setTimer}
        gameState={gameState}
        timer={timer}
        boomGet={boomGet}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'white',
  },
});

export default BoomPage;
