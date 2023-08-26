import React, { useState } from 'react'
import { Text, View, TouchableWithoutFeedback, Dimensions, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { useCart } from './CartContex';

function Card1({items}) {
    const {disfav}=useCart();
    const [isFavourite, setIsFavourite] = useState(false);
    const navigation=useNavigation();
 //Add Favorite
 const addFav = () => {
    setIsFavourite(!isFavourite)
    const itemWithSizeAndRang = {
        ...items
    };
    disfav({ type: 'add_to_favorite', item: itemWithSizeAndRang });
};

    return (
        <View className="relative mt-6 mb-1">
            <TouchableWithoutFeedback onPress={()=>navigation.navigate("Product",{...items})}>
                <Image
                     source={{ uri: items.img }}
                    style={{
                        width: 156,
                        height: 200,

                    }}
                    className="rounded-2xl"
                />
            </TouchableWithoutFeedback>
            <TouchableOpacity
                onPress={addFav }
                className=" absolute p-2 rounded-full mt-2"
                style={{ backgroundColor: 'rgba(255,255,255,0.3)', marginLeft: 115 }}

            >
                <Icon type='font-awesome' size={15} name='heart' color={isFavourite ? 'red' : 'black'} />

            </TouchableOpacity>


            <View className="absolute ml-2 " style={{ marginTop: 145 }}>
                <View className="flex-column justify-center items-center" style={{ backgroundColor: '#D9D9D999', width: 138, height: 48, borderRadius: 20 }}>
                    <Text style={{ fontSize: 15, fontWeight: 700 }}>{items.name}</Text>
                    <Text>${items.price}</Text>
                </View>
            </View>
        </View>

    )
}

export default Card1