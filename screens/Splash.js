import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Pressable } from 'react-native';
import { Icon } from 'react-native-elements';
import Carousel from 'react-native-intro-carousel';

export default function Splash() {
  const navigation=useNavigation();
  return (
    <View className="flex-1">
    <StatusBar style='dark'/>
    <Carousel
      data={[
        {
          key: '1',
          title: 'JustShop',
          description: 'Welcome to JustShop! Buy our Products easily and get access to app only exclusive.',
          icon: <Text style={{ fontSize:128,marginBottom:50,color:'white', fontWeight:500}}>J</Text>,
        },
        {
          key: '2',
          title: 'Shopping Bag',
          description: 'Add products to your shopping cart, and check them out later.',
          icon: <Icon marginBottom={70} color="white" name="shopping-bag" type="font-awesome" size={80} solid={false} />
        },
        {
          key: '3',
          title: 'Quick Search',
          description: 'Quickly find the products you like the most.',
          icon:  <Icon marginBottom={70} color="white" name="search" type="font-awesome" size={80} />
        },
        {
          key: '4',
          title: 'Notications',
          description: 'Get notifications for new products, promotions and discounts.',
          icon: <Icon marginBottom={70} color="white" name="ios-notifications" type="ionicon" size={80} />
        },
      ]}
      buttonsConfig={{
        next: {
          renderButton: (index, onChangeSlider) => (
            <Pressable onPress={() => onChangeSlider(index + 1)}>
              <Icon name="arrow-right" color='white' type="feather" size={30} />
            </Pressable>
          ),
        },
        prev: {
          disabled: true,
        },
        done: {
          renderButton: (index, onChangeSlider) => (
            <Pressable onPress={()=>navigation.navigate('Welcome')}>
              <Icon name="check" color='white' type="font-awesome" size={25} />
            </Pressable>
          ),
        },
      }}
      paginationConfig={{
        dotSize: 8,
      }}
      renderItem={({ item, index }) => (
        <View style={styles.content}>
          <View style={styles.carouselItem}>
            {item.icon}
            <Text style={{fontSize:30,fontWeight:500,marginBottom:20,color:'white'}}>{item.title}</Text>
            <Text style={{fontSize:16, marginLeft:30, marginRight:30,textAlign:'center',color:'white',opacity:0.8}}>{item.description}</Text>
          </View>
        </View>
      )}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: '#363434',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselItem: {
    marginBottom: 80,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
 
});
