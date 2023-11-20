import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import Field from '../components/Field';
 

export default function LoginScreen (props: any) {
  const [logindata, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [loginMessage, setLoginMessage] = useState<string | null>(null);
  const [signupMessage, setSignupMessage] = useState<string | null>(null);

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

          if(isValidEmail(logindatarequest.email)) {

            
              const response = await fetch('http://127.0.0.1:8080/api/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(logindatarequest),
              });

              if (response.status === 200) {
                props.navigation.navigate('ChatScreen')
                setLoginMessage('Login successful');
              } else {
                setLoginMessage('Login failed');
              }
            }
            else {
                setLoginMessage(`${logindatarequest.email} is not a valid email`);
                return;
              }
      }  
       
      catch(error){
        setLoginMessage('An error occurred while login');  
      }
    }    

  const onPressForgotPassword = () => {
    // Handle forgot password logic here
  };
 
 
  useEffect(() => {
    // Clear login and signup messages after a few seconds
    const timeout = setTimeout(() => {
      setLoginMessage('');
      setSignupMessage('');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [loginMessage, signupMessage]);


  return (
    <View style={styles.container}>
      

      <Image source={require("../assets/images/LifePathLogo.png")} style={styles.image} />

      <Text style={styles.title}>Login</Text>
      { 
                    loginMessage ? <Text style={{color: 'red', fontSize: 15}}>{loginMessage}</Text> : null
 
      }
      <Field style = {styles.inputText} placeholder="Email" keyboardType={'number-pad'} onPressIn={() => setLoginMessage(null)} onChangeText={(text: string) => setLoginData({ ...logindata, email: text })}/>
      <Field style = {styles.inputText} placeholder="Password" secureTextEntry={true} onPressIn={() => setLoginMessage(null)} onChangeText={(text: string) => setLoginData({ ...logindata, password: text })}/>
      
      <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
        <Text style={styles.inputText}>LOGIN </Text>
      </TouchableOpacity>
      <Text>Don't have an account? <Text onPress={()=>props.navigation.navigate('SignupScreen')}>Sign up</Text></Text>
    </View>
  );
}

 
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
