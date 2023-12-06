import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Button
  } from 'react-native';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';

export default function WelcomeScreen(props: any) {
    return (
        
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Welcome to My App!</Text>
              {/* Navigate to LoginScreen when the "Login" button is pressed */}
              <Button
                title="Login"
                onPress={() => navigation.navigate('LoginScreen')}
              />
              <Button
                title="Sign Up"
                onPress={() => navigation.navigate('SignupScreen')}
              />
            </View>

    );
}

