import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';
import { useCart } from '../components/CartContex';
import { themeColors } from '../theme';


const CategoryScreen = () => {
  const { datauser, favItem, disfav } = useCart();
  const navigation = useNavigation();
  const avatarSource = datauser.profileImage ? { uri: datauser.profileImage } : null;

  const first = datauser.name ? datauser.name[0].toUpperCase() : '';

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={{ uri: item.img }} style={styles.categoryImage} />
      <Text style={styles.categoryTitle}>{item.name}</Text>
      <Text style={styles.categoryTitle}>Rs.{item.price}</Text>
      <View className="absolute w-8 h-8 rounded-full justify-center mt-1 ml-1 bg-yellow-100">
        <Icon
          onPress={() => removeFromCart(item.id)}
          name="close"
          type="material"
          size={24}
          color="#333" // Customize the color as needed
        /></View>

    </TouchableOpacity>
  );

  const removeFromCart = (id) => {
    disfav({ type: 'remove_from_favorite', id });
  };

  return (
    <View style={styles.container}>
      <View className="p-3 mt-4" style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
        {/* Back button */}
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
        {/* Profile Image */}
        <Avatar
          title={first}
          rounded={true}
          source={avatarSource}
        />
      </View>
      {favItem.length > 0 ?
        (<><View className='flex-row justify-center'><Text style={{ fontSize: 50, color: themeColors.text }}>Whislist</Text></View>
          <View style={styles.container}>
            <FlatList
              data={favItem}
              renderItem={renderCategoryItem}
              keyExtractor={item => item.id}
              numColumns={2}
              contentContainerStyle={styles.categoryList}
            />
          </View></>) : (<View className="flex-1 justify-center items-center">
            <Icon name='heart' size={120} type='font-awesome' solid={false} />
            <Text style={{ fontSize: 30 }}>Empty</Text>
          </View>)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  categoryList: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  categoryItem: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    backgroundColor: '#fff',
  },
  categoryImage: {
    width: '100%',
    height: 150,
  },
  categoryTitle: {
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
});

export default CategoryScreen;
