import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SignupScreen(props: { navigation: { navigate: (arg0: string) => void; }; }) {
  const [registerdata, setRegisterData] = useState({
    email: '',
    password: '',
  });

  const [signupMessage, setSignupMessage] = useState<string | null>(null);

  const onPressSignup = async () => {
    try {
      if (registerdata.email === '' || registerdata.password === '') {
        setSignupMessage('An email and a password must be supplied');
        return;
      } else {
        const response = await fetch('http://127.0.0.1:8080/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(registerdata),
        });

        if (response.status === 200) {
          props.navigation.navigate('LoginScreen');
          setSignupMessage('Signup successful');
        } else {
          setSignupMessage('Signup failed');
        }
      }
    } catch (error) {
      setSignupMessage('An error occurred during signup');
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSignupMessage('');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [signupMessage]);

  return (
    <LinearGradient colors={['#74C365', '#48B1BF']} style={styles.container}>
      <Image source={require("../assets/images/LifePathLogo.png")} style={styles.image} />
      <Text style={styles.title}>Sign Up</Text>
      {signupMessage ? <Text style={styles.errorText}>{signupMessage}</Text> : null}
      <TextInput
        style={styles.inputText}
        placeholder="Email"
        keyboardType={'email-address'}
        onPressIn={() => setSignupMessage(null)}
        onChangeText={(text: string) => setRegisterData({ ...registerdata, email: text })}
      />
      <TextInput
        style={styles.inputText}
        placeholder="Password"
        secureTextEntry={true}
        onPressIn={() => setSignupMessage(null)}
        onChangeText={(text: string) => setRegisterData({ ...registerdata, password: text })}
      />
      <TouchableOpacity onPress={onPressSignup} style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <Text style={styles.signupText}>
        Already have an account?{' '}
        <Text onPress={() => props.navigation.navigate('LoginScreen')} style={styles.signupLink}>
          Login
        </Text>
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    marginBottom: 40,
  },
  inputText: {
    height: 40,
    width: '80%',
    borderBottomWidth: 1,
    color: 'black',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'rgba(245, 245, 245, 0.6)', // Semi-transparent white
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupText: {
    color: 'black',
    marginTop: 20,
  },
  signupLink: {
    color: 'white',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  image: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 50,
  },
  errorText: {
    color: 'red',
    fontSize: 15,
    marginBottom: 20,
  },
});
