import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { themeColors } from '../../theme';

export default function Address() {
  const [addresses, setAddresses] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleAddAddress = () => {
    const newAddress = { id: Date.now(), name, address };
    setAddresses(prevAddresses => [...prevAddresses, newAddress]);
    setName('');
    setAddress('');
  };

  const handleUpdateAddress = (id) => {
    // Handle update logic here
  };

  const handleRemoveAddress = (id) => {
    setAddresses(prevAddresses => prevAddresses.filter(item => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.addressContainer}>
      <Text style={styles.addressName}>{item.name}</Text>
      <Text style={styles.addressText}>{item.address}</Text>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => handleUpdateAddress(item.id)}
      >
        <Text style={styles.actionButtonText}>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => handleRemoveAddress(item.id)}
      >
        <Text style={styles.actionButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Address Book</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddAddress}>
        <Text style={styles.addButtonText}>Add Address</Text>
      </TouchableOpacity>

      <FlatList
        data={addresses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: themeColors.text,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 15,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  addressContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  addressName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  addressText: {
    marginBottom: 5,
  },
  actionButton: {
    backgroundColor: themeColors.text,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
