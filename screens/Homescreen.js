import React, { useRef, useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Text, View, Image, TextInput, TouchableOpacity, DrawerLayoutAndroid, StyleSheet } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import Card1 from '../components/Card';
import { ScrollView } from 'react-native';
import NavigationView from '../components/NavigationView';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import { useCart } from '../components/CartContex';
import { Skeleton } from 'moti/skeleton';
import { themeColors } from '../theme';


const product = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Homescreen() {

  const { setdataUser, datauser, userUID } = useCart();
  const [searchInput, setSearchInput] = useState('');
  const [allProducts, setAllProducts] = useState([]); // Store all products
  const [filteredProducts, setFilteredProducts] = useState([]); // Store filtered products
  const [isLoading, setisLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('');

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
      setisLoading(true);
      setAllProducts(allData);
      setFilteredProducts(allData); // Initially display all products
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  //
  const avatarSource = datauser.profileImage ? { uri: datauser.profileImage } : null;

  const first = datauser.name ? datauser.name[0].toUpperCase() : '';


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
              <Avatar
                title={first}
                 rounded={true}
                 marginLeft={8}
                source={avatarSource}
              />
            </View>
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
                {filteredProducts.map((item) => (

                  <Card1 items={item} key={item.id} />

                ))}


              </View></>) : (<>
                <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                  <Skeleton width={156} height={33} colorMode='light' radius='round' />
                  <Skeleton width={67} height={33} colorMode='light' radius='round' />
                  <Skeleton width={67} height={33} colorMode='light' radius='round' />
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                  {product.map((key) => (
                    <View key={key.id} className="flex-column justify-between items-end" style={{ marginVertical: 4, width: 156, height: 200, overflow: 'hidden', borderRadius: 20, borderWidth: 0.5, backgroundColor: themeColors.text, opacity: 0.3, padding: 10 }}>
                      <Skeleton width={30} height={30} colorMode='light' radius="round" />
                      <Skeleton width="100%" height={48} colorMode='light' radius="round" />

                    </View>
                  ))}
                </View>
              </>)}

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