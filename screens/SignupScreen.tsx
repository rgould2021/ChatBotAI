import React, { useState } from 'react';
import { SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    TouchableOpacity,
    Image } from 'react-native';
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

      const onPressSignUp = () => {
        // Do something about the signup operation
      };
    
      const [state, setState] = useState({
        firstName: '',
        lastName: '',
      });

type NewType = RootStackParamList;

type SignupScreenProps = {
  navigation: StackNavigationProp<NewType, 'Signup'>;
}


const SignupScreen: React.FC<SignupScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      
      <Image source={require("../assets/images/LifePathLogo.png")} style={styles.image} />

      <Text style={styles.title}>Login</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setState({ ...state, firstName: text })}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setState({ ...state, lastName: text })}
        />
      </View>
      <TouchableOpacity>
         <Text style={styles.inputText}>FirstName</Text>
      </TouchableOpacity>
      <TouchableOpacity>
         <Text style={styles.inputText}>LastName</Text>
      </TouchableOpacity>
      <Text>Have an account?<Text onPress={() => navigation.navigate('Login')}> LOGIN</Text></Text>
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

export default SignupScreen;
