import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  ChatScreen: undefined;
  AboutUs: undefined;
  UpdateProfile: undefined;
};

type HomeProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

export default function Home({ navigation }: HomeProps) {
  const goToAboutUs = () => {
    navigation.navigate('AboutUs');
  };

  const goToChatScreen = () => {
    navigation.navigate('ChatScreen');
  };

  const goToUpdateProfile = () => {
    navigation.navigate('UpdateProfile');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/LifePathLogo.png')} // Replace with your logo path
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to LifePath</Text>
      <Text style={styles.subtitle}>Start Exploring</Text>
      
      <TouchableOpacity style={styles.button} onPress={goToAboutUs}>
        <Text style={styles.buttonText}>About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={goToChatScreen}>
        <Text style={styles.buttonText}>Chat Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={goToUpdateProfile}>
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#74C365',
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
    backgroundColor: '#f5f5f5',
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
