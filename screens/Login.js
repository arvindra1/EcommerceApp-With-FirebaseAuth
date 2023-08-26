

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import { Text, View, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
=======
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase/Firebase';
<<<<<<< HEAD
import { Toast , Spinner} from 'native-base';
import { useCart } from '../components/CartContex';
import { themeColors } from '../theme';

function Loginscreen({ onLog }) {
  const { setUserUID } = useCart();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setloading] = useState(true);
=======
import { Toast } from 'native-base';

function Loginscreen({ onLog }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd

  const handleLogin = async () => {
   

    if (email && password) {
      try {
        if (email === '' || password === '') {
          console.error('Please fill in all fields.');
          return;
        }
        //this will be come after console.log
    

      
<<<<<<< HEAD
        setloading(false);
       
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User logged in:', userCredential.user);
        setUserUID(userCredential.user.uid);
=======
          
       
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User logged in:', userCredential.user);
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
        // Notify the parent component about successful login
        Toast.show({title: "Logged In Successfully",
          variant: "solid",
        placement:'top'});
<<<<<<< HEAD
        
          onLog(); 
          setloading(true);  
=======
          onLog(); 
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
       
       
      } catch (error) {
        console.error('Error logging in:', error.message);
        Toast.show({title: "Something went wrong",
        variant: "solid",
        isClosable: true});
<<<<<<< HEAD
        setloading(true);  
=======
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
      }
    }
  };
  // const handleSignup = () => {
  //   onsignup();
  // };

<<<<<<< HEAD
  return (<View className="flex-1">
    {loading?(<View style={{ flex: 1, flexDirection: 'column' ,backgroundColor:themeColors.bg }}>
=======
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
      {/* Status Bar */}
      <StatusBar style='light' />

      {/* Rest of the login UI */}
      {/* ... (The existing login UI code goes here) ... */}
      {/* Login Container */}
      <View style={{ marginTop: '30%' }}>
        {/* Login Title */}
        <View style={{ alignItems: 'center' }}>
<<<<<<< HEAD
          <Text style={{ fontWeight: '700', fontSize: 70,color:themeColors.text}}>Login</Text>
=======
          <Text style={{ fontWeight: '700', fontSize: 70 }}>Login</Text>
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
        </View>

        {/* Username */}
        <View style={{ marginLeft: 42, marginTop: 47 }}>
<<<<<<< HEAD
          <Text style={{ fontWeight: '700', fontSize: 25,color:themeColors.text }}>Email</Text>
=======
          <Text style={{ fontWeight: '700', fontSize: 25 }}>Email</Text>
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
          <TextInput
            style={{ height: 40, borderBottomWidth: 2, width: 280 }}
            placeholder='Enter email'
            value={email}
            type="email"
            onChangeText={(value) => setEmail(value)} // Set the username state correctly
          />
        </View>

        {/* Password */}
        <View style={{ marginLeft: 42, marginTop: 47 }}>
<<<<<<< HEAD
          <Text style={{ fontWeight: '700', fontSize: 25, color:themeColors.text }}>Password</Text>
=======
          <Text style={{ fontWeight: '700', fontSize: 25 }}>Password</Text>
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
          <TextInput
            style={{ height: 40, borderBottomWidth: 2, width: 280 }}
            placeholder='Type your password'
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry // Set the password state correctly
          />
          <TouchableOpacity><Text style={{ marginLeft: 190, marginTop: 7 }}>Forgot password?</Text></TouchableOpacity>
        </View>

        {/* Login Button */}
        <View style={{ marginTop: 47, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              width: 291,
              height: 52,
              borderRadius: 40,
<<<<<<< HEAD
              backgroundColor:themeColors.text,
=======
              backgroundColor: 'blue',
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={handleLogin} // Correctly invoking the handleLogin function
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: 700,
                color: 'white',
              }}
            >
              LOGIN
            </Text>
          </TouchableOpacity>

          {/* Or Sign Up Using */}
          {/* <Text style={{ marginTop: 28 }}>Or Sign Up Using </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Icon size={50} disabled={false} containerStyle={{ padding: 10 }} disabledStyle={{ backgroundColor: 'red' }} name='facebook' />
            <Icon size={50} disabled={false} containerStyle={{ padding: 10 }} disabledStyle={{ backgroundColor: 'red' }} type='ionicon' name='logo-twitter' />
            <Icon size={50} disabled={false} containerStyle={{ padding: 10 }} disabledStyle={{ backgroundColor: 'red' }} type='font-awesome' name='google' />
          </View> */}
        </View>

        <Text className="text-xl text-gray-700 font-bold text-center py-5">Or</Text>
        <View className="flex-row justify-center space-x-12">
<<<<<<< HEAD
          <TouchableOpacity className="p-2 bg-gray-100 rounded-full">
            <Image source={require('../assets/icons/google.png')} className="w-10 h-10" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-full">
            <Image source={require('../assets/icons/apple.png')} className="w-10 h-10" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-full">
=======
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={require('../assets/icons/google.png')} className="w-10 h-10" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={require('../assets/icons/apple.png')} className="w-10 h-10" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
            <Image source={require('../assets/icons/facebook.png')} className="w-10 h-10" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-500 font-semibold">
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text className="font-semibold text-yellow-500"> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
<<<<<<< HEAD
    </View>):(<View className="flex-1 justify-center items-center"><ActivityIndicator size="large" color="#0000ff" /></View>)}
=======
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
    </View>
  );
}

export default Loginscreen;
