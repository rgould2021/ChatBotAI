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
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { json } from 'stream/consumers';

const LoginScreen: React.FC = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const [loginMessage, setLoginMessage] = useState('');
  const [signupMessage, setSignupMessage] = useState('');

  const onPressLogin = async () => {
    try {
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

  const onPressSignUp = async () => {
    try {
      const datarequest = {
        email: state.email,
        password: state.password,
      };

      const response = await fetch('http://127.0.0.1:8080/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datarequest),
      });

      if (response.status === 201) {
        // Successful signup
        setSignupMessage('Signup successful');
      } else {
        // Failed signup
        setSignupMessage('Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setSignupMessage('An error occurred during signup');
    }
  };

  useEffect(() => {
    // Clear login and signup messages after a few seconds
    const timeout = setTimeout(() => {
      setLoginMessage('');
      setSignupMessage('');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [loginMessage, signupMessage]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
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
      <TouchableOpacity onPress={onPressForgotPassword}>
        <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
        <Text style={styles.inputText}>LOGIN </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressSignUp}>
        <Text style={styles.forgotAndSignUpText}>Signup</Text>
      </TouchableOpacity>

      <Text style={styles.message}>{loginMessage || signupMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4FD3DA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#3AB4BA',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgotAndSignUpText: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  message: {
    color: 'white',
    marginTop: 20,
  },
});

export default LoginScreen;
