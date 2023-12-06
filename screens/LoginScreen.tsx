import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CommonActions } from '@react-navigation/native';

export default function LoginScreen(props: any) {


  React.useEffect(()=>{
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{name: 'LoginScreen'}]
    });
    props.navigation.dispatch(resetAction);
  },[props.navigation])

  const [logindata, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [loginMessage, setLoginMessage] = useState<string | null>(null);

  function isValidEmail(email: string) {
    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return pattern.test(email);
  }

  const onPressLogin = async () => {
    try {
      const logindatarequest = {
        email: logindata.email,
        password: logindata.password,
      };

      if (isValidEmail(logindatarequest.email)) {
        const response = await fetch('http://127.0.0.1:8080/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(logindatarequest),
        });

        if (response.status === 200) {
          props.navigation.navigate('Home');
          setLoginMessage('Login successful');
        } else {
          setLoginMessage('Login failed');
         
        }
      } else {
        setLoginMessage(`${logindatarequest.email} is not a valid email`);
      }
    } catch (error) {
      setLoginMessage('An error occurred while login');
      props.navigation.navigate('Home');
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoginMessage('');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [loginMessage]);

  return (
    <LinearGradient colors={['#74C365', '#48B1BF']} style={styles.container}>
      <Image source={require("../assets/images/LifePathLogo.png")} style={styles.image} />
      <Text style={styles.title}>Login</Text>
      {loginMessage ? <Text style={styles.errorText}>{loginMessage}</Text> : null}
      <TextInput
        style={styles.inputText}
        placeholder="Email"
        keyboardType={'email-address'}
        onPressIn={() => setLoginMessage(null)}
        onChangeText={(text: string) => setLoginData({ ...logindata, email: text })}
      />
      <TextInput
        style={styles.inputText}
        placeholder="Password"
        secureTextEntry={true}
        onPressIn={() => setLoginMessage(null)}
        onChangeText={(text: string) => setLoginData({ ...logindata, password: text })}
      />
      <TouchableOpacity onPress={onPressLogin} style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <Text onPress={() => props.navigation.navigate('SignupScreen')} style={styles.signupLink}>Sign up</Text>
      </View>
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
    marginBottom: 20,
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
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupText: {
    color: 'black',
    marginRight: 5,
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
    alignSelf: 'flex-start',
    marginLeft: '10%',
  },
});
