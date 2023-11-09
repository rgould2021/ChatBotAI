import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
 

const Stack = createNativeStackNavigator();


const navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName ="Login">
        <Stack.Screen name="Login"  component = {LoginScreen} />
        <Stack.Screen name="Signmnbvcxzzdjklkj hgfup" component = {SignupScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default navigation;
