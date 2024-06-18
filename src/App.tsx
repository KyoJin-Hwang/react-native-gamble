import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import FingerPage from './views/FingerPage';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <FingerPage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
});

export default App;
