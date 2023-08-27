import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';
import { doc, updateDoc, deleteField, collection, getDoc } from 'firebase/firestore';
import { useCart } from '../../components/CartContex';
import { db ,storage} from '../../Firebase/Firebase';
import * as ImagePicker from 'expo-image-picker';
// import { ref, uploadBytes, getDownloadURL, snapshot } from '@firebase/storage';
import { themeColors } from '../../theme';


// Initialize Firebase Storage

const ProfileScreen = () => {
  const { userUID, setdataUser } = useCart();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const fetchProfile = async () => {
    try {
      const userDocRef = doc(db, 'users', userUID);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        setEmail(userData.email);
        setNumber(userData.number);
        setName(userData.name);
        setProfileImage(userData.profileImage);
        setdataUser(userData.profileImage);
      } else {
        console.log('User document does not exist.');
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  useEffect(() => {

    // Fetch user UID from your authentication context or wherever it's available

    fetchProfile();

  }, []);

  const handleSave = async () => {
    // Implement logic to save updated profile details
    const userDocRef = doc(db, 'users', userUID); // Assuming 'BJ' is the document ID

    // Update the document with new values
    await updateDoc(userDocRef, {
      name: name,
      number: number,
      email: email,
    });
  };

  const handleImageUpload = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.canceled) {
        const selectedAsset = result.assets[0];
        const selectedImageUri = selectedAsset.uri;
  
        console.log('Selected Image URI:', selectedImageUri);
  
        const imageName = selectedImageUri.substring(
          selectedImageUri.lastIndexOf('/') + 1
        );
  
    //     const response = await fetch(selectedImageUri);
    //     const blob = await response.blob();
  
    //     const storageRef = ref(storage, 'Pictures', imageName);
  
    //     try {
    //       const snapshot = await uploadBytes(storageRef, blob);
    //       console.log('Uploaded a blob or file!', snapshot);
  
    //       const downloadURL = await getDownloadURL(snapshot.ref);
    //       console.log('Download URL:', downloadURL);
  
    //       setImage(downloadURL);
    //     } catch (error) {
    //       console.error('Error uploading image:', error);
    //     }
      }
         } catch (error) {
      console.error('Error selecting image:', error);
    }
  };
  
  



  return (
    <View style={styles.container}>
 <Avatar
      size={150}
      rounded
      shadow={5}
      marginBottom={40}
      source={{ uri: profileImage }}
      title="name"
      containerStyle={{ backgroundColor: 'grey' }}
    >
      <Avatar.Accessory size={35} name="camera"
          type="antdesign"
          color={themeColors.text}
          onPress={handleImageUpload}
          >
        
      </Avatar.Accessory>
    </Avatar>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(value) => setName(value)}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        value={number}
        onChangeText={(value) => setNumber(value)}
        placeholder="Number"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(value) => setEmail(value)}
        placeholder="Email"
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ebe8e8',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: themeColors.text,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#DF5F5F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
