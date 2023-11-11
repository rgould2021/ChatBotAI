import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LinearGradient from 'react-native-linear-gradient';
import { RootStackParamList } from '../components/type';
import { StackNavigationProp } from '@react-navigation/stack';
import SignupScreen from './SignupScreen';
 
        
        
const LoginScreen: React.FC = ({setIsLoggedIn}) => {

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const [loginMessage, setLoginMessage] = useState('');
  const [signupMessage, setSignupMessage] = useState('');

  const onPressLogin = async () => {

    try {
      console.log('I am here')
      const datarequest = {
        email: state.email,
        password: state.password,
      };

      const response = await fetch('http://127.0.0.1:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datarequest),
      });

      if (response.status === 200) {
        // Successful login
        setLoginMessage('Login successful');
      } else {
        // Failed login
        setLoginMessage('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setLoginMessage('An error occurred during login');
    }
  };

  const onPressForgotPassword = () => {
    // Handle forgot password logic here
  };
  
  // function onPressSignup(){
  //   console.log('I am here')
  //   setIsLoggedIn(true);
     
  // }

  const onPressSignup = async () => {
   // try {
 
      setIsLoggedIn(true)
    
  }

  // useEffect(() => {
  //   // Clear login and signup messages after a few seconds
  //   const timeout = setTimeout(() => {
  //     setLoginMessage('');
  //     setSignupMessage('');
  //   }, 3000);

  //   return () => clearTimeout(timeout);
  // }, [loginMessage, signupMessage]);


  return (
    <View style={styles.container}>
      

      <Image source={require("../assets/images/LifePathLogo.png")} style={styles.image} />

      <Text style={styles.title}>Login</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setState({ ...state, email: text })}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setState({ ...state, password: text })}
        />
      </View>    
      <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
        <Text style={styles.inputText}>LOGIN </Text>
      </TouchableOpacity>
      <Text>Don't have an account? <Text onPress={onPressSignup}>Sign up</Text></Text>
    </View>
  );
};
/*<TouchableOpacity onPress={onPressForgotPassword}>
      <Text style={styles.forgotAndSignUpText}>Forgot your password?</Text>

      </TouchableOpacity>
<TouchableOpacity onPress={onPressSignUp}>
        <Text style={styles.forgotAndSignUpText}>Signup</Text>
      </TouchableOpacity>*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#74C365',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 15,
    color: 'black',
    fontWeight: 'bold'
  },
  forgotAndSignUpText: {
    color: 'black',
    fontSize: 15,
    paddingLeft: 15
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  image: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 50,
  },
});

export default LoginScreen;
function useEffect(arg0: () => () => void, arg1: string[]) {
  throw new Error('Function not implemented.');
}