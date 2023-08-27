import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import CartCard from '../components/CartCard';
import { useCart } from '../components/CartContex';
import { themeColors } from '../theme';

function Cart() {
    const navigation = useNavigation();

    const { cartItems, dispatch, dataUser, setCart } = useCart();

    const removeFromCart = (id) => {
        setCart(true);
        dispatch({ type: 'REMOVE_FROM_CART', id });
    };

    // const handleDeleteItem = (itemId) => {
    //     // Filter out the item with the given itemId from the cartItems array
    //     const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    //     setCartItems(updatedCartItems);
    // };
    const handleCheckout = () => {
        // Implement the checkout logic here (e.g., navigate to the payment page, clear the cart, etc.)
        // For this example, we will just show an alert with the total price
        alert(`Total Price: $${totalPrice.toFixed(2)}`);
        console.log(cartItems.length)
    };


    // Calculate the total price of all items in the cart
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: '#ebe8e8' }}>
            <StatusBar style='light' />

            <View style={{ marginTop: 32, marginLeft: 16, marginRight: 16, flexDirection: 'column' }}>
                <View className="p-3" style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                    {/* Back button */}
                    <Icon
                        size={22}
                        onPress={() => navigation.goBack()}
                        containerStyle={{
                            width: 42,
                            height: 42,
                            borderRadius: 20,
                            backgroundColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        type='material'
                        name='chevron-left'
                    />
                    {/* Profile Image */}
                    <Image
                        style={{ width: 42, height: 42, borderRadius: 20 }}
                        source={{ uri: dataUser }}
                    />
                </View>

                {/* Cart items */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {cartItems.length > 0 ? (<><View style={styles.cartContainer}>
                        {cartItems.map((item, index) => (
                            <CartCard item={item} key={index} onDelete={() => removeFromCart(item.id)} />
                        ))}
                    </View>
                        {/* Total Price Section */}
                        <View style={styles.totalPriceContainer}>
                            <Text style={styles.totalPriceText}>Total Price:</Text><Text style={styles.totalPriceText}>${totalPrice.toFixed(2)}</Text>

                        </View>
                        <View style={styles.totalPriceContainer}>
                            <Text style={styles.totalPriceText} >Shipping:</Text><Text style={styles.totalPriceText}>$ 0</Text>

                        </View>
                        <View className="mt-2" style={{ borderBottomWidth: 1 }}></View>
                        <View style={styles.totalPriceContainer}>
                            <Text style={styles.totalPriceText} >Grand Total:</Text><Text style={styles.totalPriceText}>$ {totalPrice.toFixed(2)}</Text>

                        </View>
                        <View className="mb-20 mt-4 items-center">
                            <TouchableOpacity onPress={handleCheckout} style={styles.checkoutButton}>
                                <Text style={styles.checkoutButtonText}>Checkout</Text>
                            </TouchableOpacity>
                        </View></>) : (<View style={styles.emptyCartContainer}><Icon
                            name="shopping-cart"
                            type="font-awesome"
                            size={100}
                            color="#ccc"
                        />
                            <Text style={styles.emptyCartText}>Your cart is empty</Text></View>)}

                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#ebe8e8',
        marginTop: 32,
        marginLeft: 16,
        marginRight: 16,
    },
    totalPriceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8
    },
    totalPriceText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#838793'
    },
    checkoutButton: {
        padding: 12,
        backgroundColor: themeColors.text,
        borderRadius: 20,
        width: '100%',
        height: 43,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkoutButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    emptyCartContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 180,
    },
});

export default Cart;
