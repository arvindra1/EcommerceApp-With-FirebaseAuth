<<<<<<< HEAD
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
=======
import { View, Text, Image, TouchableOpacity } from 'react-native'
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
<<<<<<< HEAD
import { MotiView } from 'moti'
=======
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd

export default function WelcomeScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView className="flex-1" style={{ backgroundColor: themeColors.bg }}>
            <View className="flex-1 flex justify-around my-4">
                <Text
<<<<<<< HEAD
                    className="text-themeColors.text-200 font-bold text-4xl text-center">
                    Let's Get Started!
                </Text>
                <View className="flex-row justify-center">
                    <MotiView
                        from={{
                            translateY: -80,
                        }}
                        animate={{
                            translateY: 0,
                        }}
                        transition={{
                            loop: true,
                            type: 'timing',
                            duration: 1500,
                            delay: 100,
                        }}>
                         {/* <Image style={{width:300,height:300}} source={require('../assets/images/welcome.png')}/> */}

                            <Image style={{width:200,height:200}} source={require('../assets/images/dress.png')}/>

                           {/* <Image style={{width:50,height:50}} source={require('../assets/images/pamela-hat.png')}/>  
                           <Image style={{width:50,height:50}} source={require('../assets/images/shoes.png')}/>  
                           <Image style={{width:50,height:50}} source={require('../assets/images/woman.png')}/>  
                            */}
                        </MotiView>
                        
=======
                    className="text-white font-bold text-4xl text-center">
                    Let's Get Started!
                </Text>
                <View className="flex-row justify-center">
                    <Image source={require("../assets/images/welcome.png")}
                        style={{ width: 350, height: 350 }} />
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
                </View>
                <View className="space-y-4">
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Signup')}
<<<<<<< HEAD
                        style={{backgroundColor:themeColors.text,opacity:0.9}}
                        className="py-3  mx-7 rounded-full">
                        <Text
                            className="text-xl font-bold text-center text-white"
=======
                        className="py-3 bg-yellow-400 mx-7 rounded-xl">
                        <Text
                            className="text-xl font-bold text-center text-gray-700"
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
                        >
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                    <View className="flex-row justify-center">
<<<<<<< HEAD
                        <Text style={{color:themeColors.text,opacity:0.7}} className="font-semibold">Already have an account?</Text>
=======
                        <Text className="text-white font-semibold">Already have an account?</Text>
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text className="font-semibold text-yellow-400"> Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
<<<<<<< HEAD
}

const styles = StyleSheet.create({
    shape: {
      justifyContent: 'center',
      height: 250,
      width: 250,
      borderRadius: 25,
      marginRight: 10,
      backgroundColor: 'white',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor: '#9c1aff',
    },
  });
=======
}
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
