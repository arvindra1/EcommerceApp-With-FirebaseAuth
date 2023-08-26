import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image, Alert, ScrollView, Pressable } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Icon, Card, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../components/CartContex';


function ProductDetails(props) {
    let product = props.route.params;
    const navigation = useNavigation();
    const [rang, setrang] = useState('');
    const [size, setsize] = useState('');
    const { dispatch, datauser } = useCart();

    const addToCart = () => {
        const itemWithSizeAndRang = {
            ...product,
            selectedSize: size,
            selectedRang: rang,
        };
        dispatch({ type: 'ADD_TO_CART', item: itemWithSizeAndRang });
    };


    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: '#ebe8e8' }}>
            <StatusBar style='light' />

            <View style={{ marginTop: 32, marginLeft: 16, marginRight: 16, flexDirection: 'column' }}>
                <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
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
                    <Image
                        style={{ width: 42, height: 42, borderRadius: 20 }}
                        source={{ uri: datauser.profileImage }}
                    />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ width: '100%' }}>
                        <Card
                            containerStyle={{ borderRadius: 20, height: 424, marginLeft: 0, marginRight: 0, padding: 0 }}

                        >

                            <Image
                                style={{ width: "100%", height: '100%', borderRadius: 20 }}
                                resizeMode="contain"
                                source={{ uri: product.img }}
                            />
                            {/* <Text>Pranshu Chittora</Text> */}

                        </Card>

                    </View>

                    <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }} className="mt-2">{product.name}</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }} className="mt-2">$ {product.price}</Text>
                    </View>
                    <View className="mt-2">
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Size</Text>
                        <View className="justify-start flex-row mt-2">
                            <Pressable
                                className="h-5 w-5 bg-white rounded-full"
                                onPress={() => setsize('S')}
                                style={{
                                    alignItems: 'center', justifyContent: 'center',
                                    borderColor: size === 'S' ? '#ebe8e8' : 'transparent',
                                    borderWidth: size === 'S' ? 2 : 0,
                                }}
                            >
                                <Text style={{ fontSize: 15 }}>S</Text>
                            </Pressable>
                            <Pressable
                                className="ml-3 h-5 w-5 bg-white rounded-full"
                                onPress={() => setsize('M')}
                                style={{
                                    alignItems: 'center', justifyContent: 'center',
                                    borderColor: size === 'M' ? '#ebe8e8' : 'transparent',
                                    borderWidth: size === 'M' ? 2 : 0,
                                }}
                            >
                                <Text style={{ fontSize: 15 }}>M</Text>
                            </Pressable>
                            <Pressable
                                className="ml-3 h-5 w-5 bg-white rounded-full"
                                onPress={() => setsize('L')}
                                style={{
                                    alignItems: 'center', justifyContent: 'center', borderColor: size === 'L' ? '#ebe8e8' : 'transparent',
                                    borderWidth: size === 'L' ? 2 : 0,
                                }}
                            >
                                <Text style={{ fontSize: 15 }}>L</Text>
                            </Pressable>
                            <Pressable
                                className="ml-3 h-5 w-5 bg-white rounded-full"
                                onPress={() => setsize('XL')}
                                style={{
                                    alignItems: 'center', justifyContent: 'center',
                                    borderColor: size === 'XL' ? '#ebe8e8' : 'transparent',
                                    borderWidth: size === 'XL' ? 2 : 0,
                                }}
                            >
                                <Text style={{ fontSize: 15 }}>XL</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View className="mt-2 mb-4">
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Colour</Text>
                        <View className="justify-start flex-row mt-1">
                            <Pressable
                                onPress={() => setrang('red')}
                                style={{
                                    backgroundColor: 'red',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderColor: rang === 'red' ? 'white' : 'transparent',
                                    borderWidth: rang === 'red' ? 2 : 0,
                                }}
                                className="p-2 h-5 w-5 rounded-full"
                            ></Pressable>
                            <Pressable
                                onPress={() => setrang('green')}
                                style={{
                                    backgroundColor: 'green',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderColor: rang === 'green' ? 'white' : 'transparent',
                                    borderWidth: rang === 'green' ? 2 : 0,
                                }}
                                className="p-2 ml-3 h-5 w-5 rounded-full"
                            ></Pressable>
                            <Pressable
                                onPress={() => setrang('blue')}
                                style={{
                                    backgroundColor: 'blue',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderColor: rang === 'blue' ? 'white' : 'transparent',
                                    borderWidth: rang === 'blue' ? 2 : 0,
                                }}
                                className="p-2 ml-3 h-5 w-5 rounded-full"
                            ></Pressable>
                            <Pressable
                                onPress={() => setrang('purple')}
                                style={{
                                    backgroundColor: 'purple',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderColor: rang === 'purple' ? 'white' : 'transparent',
                                    borderWidth: rang === 'purple' ? 2 : 0,
                                }}
                                className="p-2 ml-3 h-5 w-5 rounded-full"
                            ></Pressable>
                        </View>
                    </View>


                    <View>
                        <Button
                            containerStyle={{ margin: 5, marginBottom: 5, borderRadius: 20 }}
                            disabledStyle={{
                                borderWidth: 2,
                                borderColor: "#DF5F5F"
                            }}
                            buttonStyle={{ backgroundColor: '#DF5F5F' }}
                            disabledTitleStyle={{ color: "#00F" }}
                            linearGradientProps={null}
                            loadingProps={{ animating: true }}
                            loadingStyle={{}}
                            onPress={addToCart}
                            title="ADD TO CART"
                            titleProps={{}}
                        />
                    </View>

                </ScrollView>

            </View>


        </View>
    )
}

export default ProductDetails
