import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';

const CartCard = ({ item, onDelete }) => {
    const handleDelete = () => {
        onDelete(item.id);
    };

    return (
        <View style={styles.container}>
            <View style={styles.cartItem}>
                <Image style={{ width: 112, height: 149, borderRadius: 20 }}   source={{uri:item.img}} />
                <View className="ml-3 ">
                    <Text className="mt-2" style={styles.itemName}>{item.name}</Text>
                    <Text className="mt-2" style={styles.itemPrice}>$ {item.price}</Text>
                    <View className="flex-row justify-start items-center mt-2"><Text className="h-5 w-5 rounded-full" style={{ backgroundColor: item.selectedRang }} /><View className="h-5 w-5 rounded-full justify-center items-center ml-2" style={{ backgroundColor: 'white' }} ><Text>{item.selectedSize}</Text></View></View>
                </View>

            </View>
            <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
                <Icon name="delete" type="material" size={24} color="red" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    cartItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemName: {
        marginRight: 16,
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemPrice: {
        fontSize: 16,
    },
    deleteButton: {
        padding: 8,
    },
});

export default CartCard;
