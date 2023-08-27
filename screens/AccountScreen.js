import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { signout } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import { useNavigation } from '@react-navigation/native';


const AccountScreen = ({ onOut }) => {
  const navigation=useNavigation();

  // Function to handle user logout
  const handleOut = async () => {
    try {
      // Call the signOut function on the auth object
      await auth.signOut();
      console.log('User logged out');
      onOut(); // Call the provided onOut callback
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Account</Text> 
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate('Profile')}>
          <Icon name="user-circle" type="font-awesome" size={30} color="#333" />
          <Text style={styles.optionText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate('Payment')}>
          <Icon name="credit-card" type="font-awesome" size={30} color="#333" />
          <Text style={styles.optionText}>Payment Methods</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate('Address')}>
          <Icon name="address-card" type="font-awesome" size={30} color="#333" />
          <Text style={styles.optionText}>Addresses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate('Order')}>
          <Icon name="history" type="font-awesome" size={30} color="#333" />
          <Text style={styles.optionText}>Order History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleOut}>
          <Icon name="sign-out" type="font-awesome" size={30} color="#333" />
          <Text style={styles.optionText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    marginLeft: 20,
    fontSize: 18,
    color: '#333',
  },
});

export default AccountScreen;
