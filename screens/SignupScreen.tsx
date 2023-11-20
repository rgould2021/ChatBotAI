import React, { useState } from 'react';
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
 

const SignupScreen: React.FC  = ({ setIsLoggedIn, isLoggedIn }) => {
 

const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")

  const [loginMessage, setLoginMessage] = useState('');
  const [signupMessage, setSignupMessage] = useState('');



  function onPressLogin() {
    if(isLoggedIn)
    setIsLoggedIn(false);
}

   
 const onPressSignup = async () => {
      // Do something about the signup operation
      try {

               const datarequest = {
                firstname:String,
                lastname:String,
                email:String,
                password:String,
                confirmpassword:String
          };
    

    
          const response = await fetch('http://127.0.0.1:8080/api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(datarequest),
          });
          if (response.status === 200) {
            // Successful signup
          //  setSignupMessage('Signup successful');
          } else {
            // Failed signup
            //setSignupMessage('Signup failed');
          }
        } catch (error) {
          console.error('Error:', error);
          //setSignupMessage('An error occurred during signup');
         }
    };
    
 

  // useEffect(() => {
  //   // Clear login and signup messages after a few seconds
  //   const timeout = setTimeout(() => {
  //     setLoginMessage('');
  //     setSignupMessage('');
  //   }, 3000);

  //   return () => clearTimeout(timeout);
  // }, [loginMessage, signupMessage]);

  //<Image source={require("../assets/images/LifePathLogo.png")} style={styles.image} />

  return (
    <View style={styles.container}>


      <Text style={styles.title}>Signup</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="First Name"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setFirstName(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Last Name"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setLastName(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Confirm Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>
      <TouchableOpacity onPress={onPressSignup} style={styles.loginBtn}>
        <Text style={styles.inputText}>Register </Text>
      </TouchableOpacity>
      <Text>have an account? <Text onPress={onPressLogin}>Login</Text></Text>
    </View>
    );
  }
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
  /*image: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 50,
  },*/
});



export default SignupScreen;