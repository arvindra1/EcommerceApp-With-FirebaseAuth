import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Orders() {
  const [orders, setOrders] = useState([
    { id: '1', date: '2023-08-01', total: 50.0 },
    { id: '2', date: '2023-07-15', total: 75.5 },
    // Add more orders as needed
  ]);

  const renderOrder = ({ item }) => (
    <View style={styles.orderContainer}>
      <Text style={styles.orderId}>Order ID: {item.id}</Text>
      <Text>Date: {item.date}</Text>
      <Text>Total: ${item.total.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order History</Text>
      <FlatList
        data={orders}
        renderItem={renderOrder}
        keyExtractor={(item) => item.id}
        style={styles.ordersList}
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
  ordersList: {
    flex: 1,
  },
  orderContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  orderId: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
