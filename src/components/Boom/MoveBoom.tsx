import {StyleSheet, View} from 'react-native';
import React from 'react';
import BoomIcon from './BoomIcon';

interface PROPS {
  boomGet: number;
  gameState: number;
  position: string;
  boomCounter: number;
  startCount: number;
}

const MoveBoom = (props: PROPS) => {
  return (
    <View>
      <TopBoom {...props} />
      <BottomBoom {...props} />
    </View>
  );
};

const TopBoom = (props: PROPS) => {
  if (props.position === 'top') {
    return (
      <View>
        {props.boomGet === 1 ? (
          <View style={styles.boomTop}>
            <BoomIcon
              gameState={props.gameState}
              boomCount={props.boomCounter}
              startCount={props.startCount}
            />
          </View>
        ) : (
          <View />
        )}
      </View>
    );
  } else {
    return <View />;
  }
};

const BottomBoom = (props: PROPS) => {
  if (props.position === 'bottom') {
    return (
      <View>
        {props.boomGet === 2 ? (
          <View style={styles.boomBottom}>
            <BoomIcon
              gameState={props.gameState}
              boomCount={props.boomCounter}
              startCount={props.startCount}
            />
          </View>
        ) : (
          <View />
        )}
      </View>
    );
  } else {
    return <View />;
  }
};

export default MoveBoom;

const styles = StyleSheet.create({
  boomTop: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  boomBottom: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
