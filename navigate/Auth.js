import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from '../screens/Login';
import Signup from '../screens/Signup';
import WelcomeScreen from '../screens/WelcomeScreen';
<<<<<<< HEAD
import Splash from '../screens/Splash';
=======
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd


const Stack = createNativeStackNavigator();

function Auth({onLogin}) {
    const handleLog=()=>
    {
 onLogin();
    };
  return (
<<<<<<< HEAD
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name="Splash" options={{headerShown: false}} component={Splash} />
=======
    <Stack.Navigator initialRouteName='Welcome'>
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
      <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
      <Stack.Screen options={{headerShown:false}} name="Login">
      {props => <Loginscreen {...props} onLog={handleLog} />}
      </Stack.Screen>
      <Stack.Screen options={{headerShown:false}} name="Signup" component={Signup} />
    </Stack.Navigator>
  )
}

export default Auth

