import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';
import  LoginScreen  from '../../screens/LoginScreen';
import ChatScreen from '../../screens/ChatScreen';
import SignupScreen from '../../screens/SignupScreen';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <View style={{ flex: 1 }}>
     <React.Fragment>
      {isLoggedIn ? (
        <SignupScreen setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      ) : (
        <LoginScreen setIsLoggedIn={setIsLoggedIn} />
      )}
    </React.Fragment>
    </View>
  );
};

export default App;