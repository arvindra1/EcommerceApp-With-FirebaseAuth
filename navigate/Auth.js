import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from '../screens/Login';
import Signup from '../screens/Signup';
import WelcomeScreen from '../screens/WelcomeScreen';
import Splash from '../screens/Splash';


const Stack = createNativeStackNavigator();

function Auth({onLogin}) {
    const handleLog=()=>
    {
 onLogin();
    };
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name="Splash" options={{headerShown: false}} component={Splash} />
      <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
      <Stack.Screen options={{headerShown:false}} name="Login">
      {props => <Loginscreen {...props} onLog={handleLog} />}
      </Stack.Screen>
      <Stack.Screen options={{headerShown:false}} name="Signup" component={Signup} />
    </Stack.Navigator>
  )
}

export default Auth

