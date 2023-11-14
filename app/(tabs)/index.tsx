import React, { useState } from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from '../../screens/Navigation';

const Stack = createNativeStackNavigator();

 
const App: React.FC = () => {

  return (
    <View style={{ flex: 1 }}>
      <Navigation />
    </View>
  );
};

export default App;