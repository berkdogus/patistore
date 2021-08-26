import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';

import Cards from './Cards/';

import product_data from './product_data.json';

const App = () => {
  const productRender = ({item}) => <Cards products={item} />;

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={() => (
          <View>
            <Text style={styles.storeName}>PATIKASTORE</Text>
            <TextInput style={styles.searchInput} placeholder="Ara.." />
          </View>
        )}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        data={product_data}
        renderItem={productRender}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  storeName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'purple',
    margin: 5,
  },
  searchInput: {
    backgroundColor: '#E0E0E0',
    margin: 5,
    borderRadius: 10,
  },
});

export default App;
