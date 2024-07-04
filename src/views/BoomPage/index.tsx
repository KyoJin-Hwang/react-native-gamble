import {StyleSheet, View} from 'react-native';
import React from 'react';
import CenterTitle from '@/components/Boom/CenterTitle';
import TopUser from '@/components/Boom/TopUser';
import BottomUser from '@/components/Boom/BottomUser';
import MoveBoom from '@/components/Boom/MoveBoom';
import EndGame from '@/components/Boom/EndGame';

const BoomPage = () => {
  const [boomGet, setBoomGet] = React.useState(0);
  const [gameState, setGameState] = React.useState(0);
  const [boomCount, setBoomCount] = React.useState(
    Math.floor(Math.random() * 5) + 11,
    // 최대 16초를 바란것인지?
    // Math.floor(Math.random() * 15),
  );
  const [timer, setTimer] = React.useState(0);

  React.useEffect(() => {
    if (gameState === 0) {
      setGameState(1);
    }
  }, [boomGet, boomCount]);

  React.useEffect(() => {
    if (timer >= 1) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }
  }, [timer]);

  React.useEffect(() => {
    if (boomCount > 0 && gameState === 1) {
      setTimeout(() => {
        setBoomCount(boomCount - 1);
      }, 1000);
    } else if (boomCount === 0 && gameState === 1) {
      setGameState(2);
    }
  }, [boomCount, gameState]);

  return (
    <View style={styles.container}>
      <TopUser
        setBoomGet={setBoomGet}
        setTimer={setTimer}
        gameState={gameState}
        timer={timer}
        boomGet={boomGet}
      />
      <MoveBoom boomGet={boomGet} position="top" gameState={gameState} />
      <CenterTitle boomGet={boomGet} gameState={gameState} />
      <EndGame
        gameState={gameState}
        boomGet={boomGet}
        setGameState={setGameState}
        setBoomCount={setBoomCount}
      />
      <MoveBoom boomGet={boomGet} position="bottom" gameState={gameState} />
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
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
});

export default BoomPage;
