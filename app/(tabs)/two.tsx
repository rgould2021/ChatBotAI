import React from 'react';
import { StatusBar, View } from 'react-native';
import Navigation from '../../screens/Navigation';

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Navigation />
    </View>
  );
};

export default App;
