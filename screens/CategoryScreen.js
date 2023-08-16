import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
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
    <Image
        style={{ width: 42, height: 42, borderRadius: 20 }}
        source={require('../assets/profile.jpg')}
    />
</View>

    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.categoryList}
      />
    </View>
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
