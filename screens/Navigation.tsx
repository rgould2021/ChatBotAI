import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import ChatScreen from './ChatScreen';
import Home from './Home';
import UpdateProfile from './UpdateProfile';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
 

const Stack = createNativeStackNavigator();


const navigation = () => {
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName ="LoginScreen">
        <Stack.Screen options={{ title: ''}}name="LoginScreen"  component = {LoginScreen} />
        <Stack.Screen options={{ title: ''}}name="SignupScreen" component = {SignupScreen} /> 
        <Stack.Screen options={{ title: ''}}name="ChatScreen" component = {ChatScreen} /> 
        <Stack.Screen options={{ title: ''}}name="Home" component = {Home} /> 
        <Stack.Screen options={{ title: ''}}name="UpdateProfile" component = {UpdateProfile} /> 
        <Stack.Screen options={{ title: ''}}name="AboutUs" component = {AboutUs} /> 
        <Stack.Screen options={{ title: ''}} name = "ContactUs" component = {ContactUs} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default navigation;