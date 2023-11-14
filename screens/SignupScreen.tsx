import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity} from 'react-native';
import Field from '../components/Field';

export default function SignupScreen(props: { navigation: { navigate: (arg0: string) => void; }; }) {
 

const [registerdata, setRegisterData] = useState({
       firstName : '',
       lastName : '',
       email : '',
       password : '',
       confirmPassword: ''
})

const [signupMessage, setSignupMessage] = useState<string | null>(null);;
const [loginMessage, setLoginMessage] = useState<string | null>(null);;

 
 
 const onPressSignup = async () => {
      // Do something about the signup operation
      try {
              
                  
            if( registerdata.firstName == '' || registerdata.lastName == '' || registerdata.email == ''
                || registerdata.password == '' || registerdata.confirmPassword =='')
              {
                setSignupMessage('All the fields are required for registration');
                  return;
              }
              else
              {
                    if (registerdata.password != registerdata.confirmPassword) 
                    {
                        setSignupMessage('Password and confirm Password should be the same');
                        return;
                    }
                    else
                    {
                      
                        const response = await fetch('http://127.0.0.1:8080/api/signup', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(registerdata),
                      });

                      if (response.status === 200) {
                        props.navigation.navigate('LoginScreen')
                        setSignupMessage('Signup successful');
                      } else {
                          setSignupMessage('Signup failed');
                      }
                
                    }
                }
           } catch (error) {
                setSignupMessage('An error occurred during signup');  
           }    
    }

  useEffect(() => {
    // Clear login and signup messages after a few seconds
    const timeout = setTimeout(() => {
       setLoginMessage('');
      setSignupMessage('');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [loginMessage, signupMessage]);

  //<Image source={require("../assets/images/LifePathLogo.png")} style={styles.image} />

  return (
    <View style={styles.container}>
          <Text style={styles.title}>Signup</Text>
          {
                    signupMessage ? <Text style={{color: 'red', fontSize: 15}}>{signupMessage}</Text> : null
          }
          <Field style = {styles.inputText} placeholder="First Name" keyboardType={'default'} onPressIn={() => setSignupMessage(null)} onChangeText={(text: string) => setRegisterData({ ...registerdata, firstName: text })}/>
          <Field style = {styles.inputText} placeholder="Last Name" keyboardType={'email-address'} onPressIn={() => setSignupMessage(null)} onChangeText={(text: string) => setRegisterData({ ...registerdata, lastName: text })}/>
          <Field style = {styles.inputText} placeholder="Email" keyboardType={'number-pad'} onPressIn={() => setSignupMessage(null)} onChangeText={(text: string) => setRegisterData({ ...registerdata, email: text })}/>
          <Field style = {styles.inputText} placeholder="Password" secureTextEntry={true} onPressIn={() => setSignupMessage(null)} onChangeText={(text: string) => setRegisterData({ ...registerdata, password: text })}/>
          <Field style = {styles.inputText} placeholder="Confirm Password" secureTextEntry={true} onPressIn={() => setSignupMessage(null)} onChangeText={(text: string) => setRegisterData({ ...registerdata, confirmPassword: text })}/>
    
          <TouchableOpacity onPress={onPressSignup} style={styles.loginBtn}>
            <Text style={styles.inputText}>Register </Text>
          </TouchableOpacity>
          <Text>have an account? <Text onPress={() => props.navigation.navigate('LoginScreen')}>Login</Text></Text>
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
  /*image: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 50,
  },*/
});
