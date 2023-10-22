import React from 'react';
import { StatusBar, View } from 'react-native';
import ChatScreen from '../../screens/ChatScreen';
import LoginScreen from '../../screens/LoginScreen';

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <ChatScreen />
      <LoginScreen />
    </View>
  );
};

export default App;
