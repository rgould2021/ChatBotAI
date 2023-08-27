import React from 'react';
import { StatusBar, View } from 'react-native';
import ChatScreen from '../../screens/ChatScreen';

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <ChatScreen />
    </View>
  );
};

export default App;
