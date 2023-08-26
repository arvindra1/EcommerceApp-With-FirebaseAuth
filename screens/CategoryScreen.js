import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
<<<<<<< HEAD
import { Icon,Avatar } from 'react-native-elements';
import { useCart } from '../components/CartContex';
import { themeColors } from '../theme';


const CategoryScreen = () => {
  const {datauser, favItem, disfav}=useCart();
    const navigation=useNavigation();
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={{uri:item.img}} style={styles.categoryImage} />
      <Text style={styles.categoryTitle}>{item.name}</Text>
      <Text style={styles.categoryTitle}>Rs.{item.price}</Text>
<View className="absolute w-8 h-8 rounded-full justify-center mt-1 ml-1 bg-yellow-100">
      <Icon
      onPress={() =>removeFromCart(item.id) }
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

=======
import { Icon } from 'react-native-elements';


const categories = [
  { id: '1', title: 'Electronics', image: require('../assets/images/p1.jpg') },
  { id: '2', title: 'Clothing', image: require('../assets/images/p2.jpg') },
  { id: '3', title: 'Home & Kitchen', image: require('../assets/images/p4.jpg') },
  { id: '4', title: 'Home & Kitchen', image: require('../assets/images/p4.jpg') },
  { id: '5', title: 'Home & Kitchen', image: require('../assets/images/p4.jpg') },
//   { id: '6', title: 'Home & Kitchen', image: require('../assets/images/p4.jpg') },
{ id: '7', title: 'Home & Kitchen', image: require('../assets/images/p4.jpg') },
{ id: '8', title: 'Home & Kitchen', image: require('../assets/images/p4.jpg') },
  // Add more categories here...
];

const CategoryScreen = () => {
    const navigation=useNavigation();
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
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
<<<<<<< HEAD
    <Avatar
        size={40}
        rounded={true}
        source={{uri: datauser.profileImage}}
    />
</View>
{favItem.length>0?
   (<><View className='flex-row justify-center'><Text style={{fontSize:50,color:themeColors.text}}>Whislist</Text></View>
    <View style={styles.container}>
      <FlatList
        data={favItem}
=======
    <Image
        style={{ width: 42, height: 42, borderRadius: 20 }}
        source={require('../assets/profile.jpg')}
    />
</View>

    <View style={styles.container}>
      <FlatList
        data={categories}
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.categoryList}
      />
<<<<<<< HEAD
    </View></>):(<View className="flex-1 justify-center items-center">
      <Icon name='heart'  size={120} type='font-awesome' solid={false} />
      <Text style={{fontSize:30}}>Empty</Text>
    </View>)}
=======
    </View>
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
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
