import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';


const Stack = createStackNavigator();


const navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName ="Login">
        <Stack.Screen name="Login"  component = {LoginScreen} />
        <Stack.Screen name="Signup" component = {SignupScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default navigation;
