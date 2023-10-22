import React from 'react';
import { StatusBar, View } from 'react-native';
import LoginScreen from '../../screens/LoginScreen';

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <LoginScreen/>
    </View>
  );
};

export default App;
