import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/LifePathLogo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.subtitle}>LifePath Platform</Text>

      <Text style={styles.content}>
        At LifePath, we're dedicated to delivering seamless user experiences. Our app is designed to offer essential features such as 24/7 customer service through our AI chatbot, effortless profile updates, easy ticket raising, and reliable support. While we continue to evolve, our current focus remains on providing swift assistance and ensuring your needs are met promptly.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#74C365',
    paddingHorizontal: 20,
  },
  logo: {
    width: '100%',
    height: 100, // Adjust the height as per your preference
    aspectRatio: 2/1 // Maintain the aspect ratio
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
  content: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default AboutUs;
