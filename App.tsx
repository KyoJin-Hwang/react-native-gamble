import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import Sample from './Sample';
import Sample2 from './Sample2';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Sample2 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
});

export default App;
