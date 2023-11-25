import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import ChatScreen from './ChatScreen';
 

const Stack = createNativeStackNavigator();


const navigation = () => {
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName ="LoginScreen">
        <Stack.Screen name="LoginScreen"  component = {LoginScreen} />
        <Stack.Screen name="SignupScreen" component = {SignupScreen} /> 
        <Stack.Screen name="ChatScreen" component = {ChatScreen} /> 
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default navigation;
