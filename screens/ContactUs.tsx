import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';

type RootStackParamList = {
  Home: undefined;
  ChatScreen: undefined;
  AboutUs: undefined;
  UpdateProfile: undefined;
  ContactUs: undefined;
};

type ContactUsProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

export default function ContactUs({ navigation }: ContactUsProps) {
  const goToAboutUs = () => {
    navigation.navigate('AboutUs');
  };

  const goToChatScreen = () => {
    navigation.navigate('ChatScreen');
  };

  const goToUpdateProfile = () => {
    navigation.navigate('UpdateProfile');
  };

  const makePhoneCall = async () => {
    const phoneNumber = '15613339999';
    await Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <LinearGradient colors={['#74C365', '#48B1BF']} style={styles.container}>
      <Image
        source={require('../assets/images/LifePathLogo.png')} // Replace with your logo path
        style={styles.logo}
      />
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.subtitle}>Any questions? We're here for you!</Text>
      <Text style={styles.subtitle}>24/7 Digital Chat Support</Text>
      <TouchableOpacity style={styles.button} onPress={goToChatScreen}>
        <Text style={styles.buttonText}>💬 Chat Now</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={makePhoneCall}>
        <Text style={styles.buttonText}>📞1 (561) 333-9999</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={makePhoneCall}>
        <Text style={styles.buttonText}>📧 LifePathSupport@gmail.com</Text>
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
    width: 275,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
