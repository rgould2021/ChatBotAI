import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';

type RootStackParamList = {
  Home: undefined;
  ChatScreen: undefined;
  AboutUs: undefined;
  UpdateProfile: undefined;
  ContactUs: undefined;
};

type HomeProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

export default function Home({ navigation }: HomeProps) {
  const goToAboutUs = () => {
    navigation.navigate('AboutUs');
  };

  const goToContactUs = () => {
    navigation.navigate('ContactUs');
  };

  const goToUpdateProfile = () => {
    navigation.navigate('UpdateProfile');
  };

  const goToChatScreen = () => {
    navigation.navigate('ChatScreen');
  };


  return (
    <LinearGradient colors={['#74C365', '#48B1BF']} style={styles.container}>
      <Image
        source={require('../assets/images/LifePathLogo.png')} // Replace with your logo path
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to LifePath</Text>
      <Text style={styles.subtitle}>Start Exploring</Text>
      
      <TouchableOpacity style={styles.button} onPress={goToChatScreen}>
        <Text style={styles.buttonText}>Chatbot</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={goToAboutUs}>
        <Text style={styles.buttonText}>About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={goToContactUs}>
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={goToUpdateProfile}>
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    color: 'white',
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'rgba(245, 245, 245, 0.6)', // Semi-transparent white
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
    width: 200,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});