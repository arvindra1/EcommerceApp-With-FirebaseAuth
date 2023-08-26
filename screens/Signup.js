import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase/Firebase';
import { Toast } from 'native-base';
import { themeColors } from '../theme';

function Signup() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setRegistered] = useState(false); // To show "Registered" message
    const [isLoading, setLoading] = useState(false); // Step 1: Loading state


    const handleRegister = async () => {
        if (email && password) {
            try {
                setLoading(true);
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                console.log('User registered:', userCredential.user);
                setRegistered(true); // Set the registered state to show the success message
                Toast.show({title: "Account verified",
                variant: "solid",
                description: "Thanks for signing up with us.",
                isClosable: true});
                navigation.goBack();
            } catch (error) {
                console.error('Error registering user:', error.message);
            } finally {
                setLoading(false); // Step 3: Set loading to false when registration ends
            }
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <View style={styles.loginContainer}>
                <Text style={styles.title}>Register</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>First Name</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder='Type your first name'
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput
                        style={styles.inputField}
                        value={email}
                        onChangeText={value => setEmail(value)}
                        placeholder='Type your email'
                        keyboardType='email-address'
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput
                        style={styles.inputField}
                        value={password}
                        onChangeText={value => setPassword(value)}
                        placeholder='Type your password'
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity
                    style={styles.registerButton}
                    onPress={handleRegister}
                    disabled={isLoading} // Disable the button while loading
                >
                    {isLoading ? ( // Step 2: Conditionally render loading indicator or success message
                        <ActivityIndicator color="white" />
                    ) : isRegistered ? (
                        <Text style={styles.registerButtonText}>Registered</Text>
                    ) : (
                        <Text style={styles.registerButtonText}>Register</Text>
                    )}
                </TouchableOpacity>

                <View className="flex-row mt-8  justify-center space-x-12">
                    <TouchableOpacity className="p-2 bg-gray-100 rounded-full">
                        <Image source={require('../assets/icons/google.png')}
                            className="w-10 h-10" />
                    </TouchableOpacity>
                    <TouchableOpacity className="p-2 bg-gray-100 rounded-full">
                        <Image source={require('../assets/icons/apple.png')}
                            className="w-10 h-10" />
                    </TouchableOpacity>
                    <TouchableOpacity className="p-2 bg-gray-100 rounded-full">
                        <Image source={require('../assets/icons/facebook.png')}
                            className="w-10 h-10" />
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center mt-7">
                    <Text className="text-gray-500 font-semibold">Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text className="font-semibold text-yellow-500"> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: themeColors.bg,
    },
    loginContainer: {
        flex: 1,
        marginTop: '30%',
        marginHorizontal: 35,
    },
    title: {
        color: themeColors.text,
        fontSize: 70,
        fontWeight: '500',
        marginBottom: 30,
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: 30,
    },
    inputLabel: {
        fontSize: 20,
        fontWeight: '600',
        color: themeColors.text
    },
    inputField: {
        height: 40,
        borderBottomWidth: 2,
        width: '100%',
    },
    registerButton: {
        width: '100%',
        height: 52,
        borderRadius: 40,
        marginTop:35,
        backgroundColor: themeColors.text,
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerButtonText: {
        fontSize: 25,
        fontWeight: '700',
        color: 'white',
    },
});

export default Signup;
