import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCart } from './CartContex';

function NavigationView() {
    const {datauser}=useCart();
    return (
        <SafeAreaView className="flex-1 bg-orange-50">
            {/* top bar */}
            <View className="navbar mb-4 mt-4 mx-5 flex-row justify-around items-center">
                <TouchableOpacity >
                </TouchableOpacity>
                <Text>__</Text>
                <View >
                    <Text className="bg-orange-100">{datauser.name}</Text>
                    <Text className="">{datauser.about}</Text>

                </View>


            </View>

        </SafeAreaView>
    )
}

export default NavigationView