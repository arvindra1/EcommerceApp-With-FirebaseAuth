import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Icon, Badge } from 'react-native-elements';
import Homescreen from '../screens/Homescreen';
import ProductDetails from '../screens/ProductDetails';
import Cart from '../screens/Cart';
import CategoryScreen from '../screens/CategoryScreen';
import AccountScreen from '../screens/AccountScreen';
import { useCart } from '../components/CartContex';
import ProfileScreen from '../screens/myaccount/Profile';
import Payment from '../screens/myaccount/Payment';
import Address from '../screens/myaccount/Address';
import Order from '../screens/myaccount/Order';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AppStack() {


  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen  name="Home" component={Homescreen} />
      <Stack.Screen  name="Product" component={ProductDetails} />
      <Stack.Screen  name="Category" component={CategoryScreen} />
    </Stack.Navigator>
  );
}


function AccountNavigator({ onOut }) {

  return (
    <Stack.Navigator initialRouteName='Account'>
      <Stack.Screen options={{headerShown:false}} name='Account'>
      {props => <AccountScreen {...props} onOut={onOut} />}
      </Stack.Screen>
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );

}

function MyTabs({ handleLogout }) {
  const { cartItems } = useCart();

  return (
    <Tab.Navigator screenOptions={{tabBarStyle:{height:70},headerShown:false, tabBarShowLabel: false,}} initialRouteName="Home">
      <Tab.Screen
        name="HomePage"
        component={AppStack}
        options={{
         
          tabBarIcon: ({ color }) => (
            <Icon
              color={color}
              name="home"
              size={30}
              solid
              type="material"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              color={color}
              name="heart"
              size={30}
              solid
              type="font-awesome"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => (<>
            <Icon
              name="shopping-cart"
              type="font-awesome"
              color={color}
              size={30}
            />
            <Badge
              status="success"
              value={cartItems.length}
              containerStyle={{ position: 'absolute', top: 25, left: 55 }}
            /></>
          ),
        }}
      />
      <Tab.Screen
        name="AccountSettings"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              color={color}
              name="user"
              size={30}
              solid
              type="feather"
            />
          ),
        }}
      >
        {props => <AccountNavigator {...props} onOut={handleLogout} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default MyTabs;
