<<<<<<< HEAD
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { themeColors } from '../../theme';

export default function Payment() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handlePayment = () => {
    // Handle payment logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Information</Text>

      <TextInput
        style={styles.input}
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
      />

      <TextInput
        style={styles.input}
        placeholder="Expiry Date"
        value={expiryDate}
        onChangeText={setExpiryDate}
      />

      <TextInput
        style={styles.input}
        placeholder="CVV"
        value={cvv}
        onChangeText={setCVV}
      />

      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
  payButton: {
    backgroundColor: themeColors.text,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  payButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
=======
import { View, Text } from 'react-native'
import React from 'react'

export default function Payment() {
  return (
    <View>
      <Text>Payment</Text>
    </View>
  )
}
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
