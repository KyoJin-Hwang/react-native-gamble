import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import Sample from './Sample';

function App(): React.JSX.Element {
  const backgroundStyle = {
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Sample />
    </SafeAreaView>
  );
}

export default App;
