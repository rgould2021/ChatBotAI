import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import ChatScreen from './ChatScreen';
import Home from './Home';
import UpdateProfile from './UpdateProfile';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import { Button, View } from 'react-native';
import auth from '@react-native-firebase/auth';
 

const Stack = createNativeStackNavigator();


const navigation = () => {

  const navigation = useNavigation();

  const Logout = async () => {  
      try {
           // await auth().signOut();
          navigation.navigate("LoginScreen");  
      } catch (error) {
          console.error('Error logging out:', error);
      }
  };
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName ="LoginScreen">
        <Stack.Screen options={{ title: '' }}name="LoginScreen"  component = {LoginScreen} />
        <Stack.Screen options={{ title: 'Sign Up'}}name="SignupScreen" component = {SignupScreen} /> 
        <Stack.Screen options={{ title: 'Chat Bot', headerRight: () => (
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10 }}>
          <Button
            title="Logout"
            onPress={ Logout}
          />
        </View>
         ),}}name="ChatScreen" component = {ChatScreen} /> 
        <Stack.Screen options={{ title: '',headerLeft:() => null,  headerRight: () => (
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10 }}>
          <Button
            title="Logout"
            onPress={ Logout}
          />
        </View>
         ),}}name="Home" component = {Home} /> 
        <Stack.Screen options={{ title: 'Profile', headerRight: () => (
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10 }}>
          <Button
            title="Logout"
            onPress={ Logout}
          />
        </View>
         ),}}name="UpdateProfile" component = {UpdateProfile} /> 
        <Stack.Screen options={{ title: 'About Us', headerRight: () => (
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10 }}>
          <Button
            title="Logout"
            onPress={ Logout}
          />
        </View>
         ),}}name="AboutUs" component = {AboutUs} /> 
        <Stack.Screen options={{ title: 'Contact Us', headerRight: () => (
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10 }}>
          <Button
            title="Logout"
            onPress={ Logout}
          />
        </View>
         ),}} name = "ContactUs" component = {ContactUs} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default navigation;