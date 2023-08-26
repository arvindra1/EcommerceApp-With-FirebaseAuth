import React, { useRef, useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Text, View, Image, TextInput, TouchableOpacity, DrawerLayoutAndroid, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import Card1 from '../components/Card';
import { Skeleton, VStack, Center, NativeBaseProvider } from "native-base";
import { ScrollView } from 'react-native';
import NavigationView from '../components/NavigationView';
<<<<<<< HEAD
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import { useCart } from '../components/CartContex';
import { Skeleton } from 'moti/skeleton';
import { themeColors } from '../theme';


const product=[1,2,3,4,5,6,7,8,9,10];

function Homescreen() {

  const { setdataUser, datauser, userUID } = useCart();
=======
import { product } from '../data';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';

function Homescreen() {

>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
  const [searchInput, setSearchInput] = useState('');
  const [allProducts, setAllProducts] = useState([]); // Store all products
  const [filteredProducts, setFilteredProducts] = useState([]); // Store filtered products
  const [isLoading, setisLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('');

<<<<<<< HEAD
=======


>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);

    // Update the filteredProducts based on the selected filter
    if (filter === 'Trending Now') {
      setFilteredProducts(allProducts.filter(item => item.isTrending));
    } else if (filter === 'All') {
      setFilteredProducts(allProducts);
    } else if (filter === 'New') {
      setFilteredProducts(allProducts.filter(item => item.isNew));
    }
  };

  // Drawer code
  const drawer = useRef(null);

  const openDrawer = () => {
    drawer.current.openDrawer();
  };


  const fetchAllProducts = async () => {
    try {
      setisLoading(false);
      const querySnapshot = await getDocs(collection(db, "products"));
      const allData = [];
      querySnapshot.forEach(doc => {
        allData.push(doc.data());
      });
      console.log(allData);
<<<<<<< HEAD
      setisLoading(true);
      setAllProducts(allData);
=======
      setAllProducts(allData);
      setisLoading(true);
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
      setFilteredProducts(allData); // Initially display all products
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSearch = () => {
    if (searchInput.trim() === '') {

      setFilteredProducts(allProducts); // Display all products when search input is empty

      return;
    }

    const filtered = allProducts.filter(item =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredProducts(filtered);

  };

<<<<<<< HEAD
  //Profile Details is Fetching
  const fetchProfile = async () => {
    try {
      const userDocRef = doc(db, 'users', userUID);
      console.log('Fetching profile for user:', userUID);
      const userDocSnapshot = await getDoc(userDocRef);
  
      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        console.log('User data:', userData);
        setdataUser(userData);
        console.log('Profile image set:', userData.profileImage);
        console.log('profileImage:', datauser.profileImage);
      } else {
        console.log('User document does not exist.');
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };
  


  useEffect(() => {
    fetchAllProducts();
    fetchProfile();
=======
  useEffect(() => {
    fetchAllProducts();
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
  }, []);


  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={250}
      drawerPosition={'left'}
      renderNavigationView={() => <NavigationView />}
    >

      <View style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: '#ebe8e8' }}>
        <StatusBar style='light' />

        <View style={{ marginTop: 32, marginLeft: 16, marginRight: 16, flexDirection: 'column' }}>
          <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
            <Icon onPress={openDrawer}
<<<<<<< HEAD
              size={26}
              containerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              type='material'
              name='menu'
            />
            <View className="flex-row justify-center items-center">
              <Icon
                name="bell" // Name of the icon from the library, you can use any icon you want
                type="font-awesome" // Type of icon library, could be 'material', 'font-awesome', etc.
                size={20} // Size of the icon
                onPress={() => {
                  // Handle icon press event
                }}
              />
              <Image
                style={{ width: 42, height: 42, borderRadius: 20, marginLeft: 10 }}
                source={{ uri: datauser.profileImage }}
              />
            </View>
=======
              size={22}
              containerStyle={{
                width: 42,
                height: 42,
                borderRadius: 20,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              type='foundation'
              name='thumbnails'
            />
            <Image
              style={{ width: 42, height: 42, borderRadius: 20 }}
              source={require('../assets/profile.jpg')}
            />
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
          </View>

          <View>
            <Text style={{ fontSize: 26, marginTop: 19 }}>Match Your Style </Text>
            {/* SearchBar */}
            <TextInput
              style={{ height: 40, width: 332, borderRadius: 16, backgroundColor: 'white', marginTop: 22, paddingLeft: 20 }}
              placeholder='Type your search'
              value={searchInput}
              onChangeText={text => {
                setSearchInput(text);
                handleSearch(); // Call handleSearch whenever the input changes
              }}

              onSubmitEditing={handleSearch}

            />

            {/* SearchBar */}
          </View>


          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Grid */}
            {isLoading ? (<>
              {/* Filter */}
              <View style={{ justifyContent: 'space-between', alignItems: 'center', width: '100%', flexDirection: 'row', marginTop: 27 }}>
                <TouchableOpacity onPress={() => handleFilterChange('Trending Now')} style={[styles.trend, selectedFilter === 'Trending Now' && styles.activeFilterButton]} >
                  <Text>Trending Now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.filterButton, selectedFilter === 'All' && styles.activeFilterButton]}
                  onPress={() => handleFilterChange('All')}>
                  <Text>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.filterButton, selectedFilter === 'New' && styles.activeFilterButton]}
                  onPress={() => handleFilterChange('New')}>
                  <Text>New</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
<<<<<<< HEAD
                {filteredProducts.map((item) => (

                  <Card1 items={item} key={item.id} />
=======
                {filteredProducts.map((item, key) => (

                  <Card1 items={item} key={key} />
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd

                ))}


<<<<<<< HEAD
              </View></>) : (  <>
      <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between',marginBottom: 15 }}>
        <Skeleton width={156} height={33} colorMode='light' radius='round' />
        <Skeleton width={67} height={33}  colorMode='light' radius='round' />
        <Skeleton width={67} height={33}  colorMode='light' radius='round' />
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {product.map((key) => (
          <View key={key.id} className="flex-column justify-between items-end" style={{ marginVertical: 4, width: 156, height: 200, overflow: 'hidden',borderRadius:20,borderWidth:0.5,backgroundColor:themeColors.text,opacity:0.3,padding:10 }}>
          <Skeleton width={30} height={30} colorMode='light' radius="round"    />
          <Skeleton width="100%" height={48} colorMode='light' radius="round"   />
           
          </View>
        ))}
      </View>
    </>)}
=======
              </View></>) : (<>
                <View className="mt-6 flex-row justify-between">
                  <Skeleton w="156" borderWidth={1} borderColor="coolGray.300" h="33" rounded="full" startColor="coolGray.300" />
                  <Skeleton w="67" borderWidth={1} borderColor="coolGray.300" h="33" rounded="full" startColor="coolGray.300" />
                  <Skeleton w="67" borderWidth={1} borderColor="coolGray.300" h="33" rounded="full" startColor="coolGray.300" />
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                  {product.map((key) => {
                    return (
                      <VStack key={key} my="4" w="156" h="200" borderWidth="1" overflow="hidden" rounded="lg" _dark={{
                        borderColor: "coolGray.100"
                      }} _light={{
                        borderColor: "coolGray.300"
                      }}>
                        <Skeleton h="100%" />
                        <Skeleton borderWidth={1} borderColor="coolGray.300" size="8" ml="110" mt="2" className="absolute" startColor="amber.50" rounded="full" />

                        {/* <Skeleton mt="150" className="absolute"  h="10" my="2" rounded="full" startColor="primary.100">
                        
                      </Skeleton> */}
                        <Skeleton h="10" ml="2" w="138" mt="150" borderWidth={0.5} borderColor="coolGray.300" className="absolute" rounded="full" startColor=".50" />
                      </VStack>)
                  })}

                </View></>)}
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd

          </ScrollView>

        </View>

      </View>
    </DrawerLayoutAndroid>
   
  );
}

export default Homescreen;

const styles = StyleSheet.create({
  // ... other styles ...

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 22,
    backgroundColor: 'white',
    borderRadius: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingRight: 10,
  },
  searchIcon: {
    marginLeft: 10,
  },
  filterButton: {
    borderRadius: 14,
    backgroundColor: '#D0C6C6',
    fontSize: 14,
    fontWeight: '500',
    width: 67,
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeFilterButton: {
    backgroundColor: '#DF5F5F',
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  trend: {
    borderRadius: 14,
    backgroundColor: '#D0C6C6',
    fontWeight: '500',
    width: 156,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',


  }
});