import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';

type ProfileData = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  profileImage: string | undefined;
};

export default function UpdateProfile(props: { navigation: { navigate: (arg0: string) => void; }; }) {
  const [profileData, setProfileData] = useState<ProfileData>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    profileImage: undefined,
  });

  useEffect(() => {
    // Request permission to access the device's photo library
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'Sorry, we need camera roll permissions to make this work!');
      }
    })();
  }, []);

  const handleUpdateProfile = () => {
    // Logic to update profile based on profileData state
  };

  const selectImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const imageUri = result.assets[0].uri;
        setProfileData({ ...profileData, profileImage: imageUri });
      }
    } catch (error) {
      console.log('Error selecting image: ', error);
    }
  };

  return (
    <LinearGradient colors={['#74C365', '#48B1BF']} style={styles.container}>
      {profileData.profileImage ? (
        <Image source={{ uri: profileData.profileImage }} style={styles.profileImage} />
      ) : (
        <TouchableOpacity onPress={selectImage}>
          <Image source={require('../assets/images/defaultProfilePic.jpg')} style={styles.profileImage} />
        </TouchableOpacity>
      )}

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={profileData.firstName}
          onChangeText={(text) => setProfileData({ ...profileData, firstName: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={profileData.lastName}
          onChangeText={(text) => setProfileData({ ...profileData, lastName: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={profileData.email}
          onChangeText={(text) => setProfileData({ ...profileData, email: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={profileData.address}
          onChangeText={(text) => setProfileData({ ...profileData, address: text })}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleUpdateProfile}>
        <Text style={styles.buttonText}>Update</Text>
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
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  form: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'rgba(245, 245, 245, 0.6)', // Semi-transparent white
    padding: 15,
    marginBottom: 15,
    borderRadius: 30,
    marginHorizontal: 10
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
