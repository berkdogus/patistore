import React from 'react';
import {View, Text, Image} from 'react-native';

import CardStyles from './Cards.style';

const Cards = ({products}) => {
  return (
    
      <View style={CardStyles.cardContainer}>
        <Image style={CardStyles.image} source={{uri: products.imgURL}}></Image>
        <View style={CardStyles.productDetailContainer}>
          <Text style={CardStyles.productTitle}>{products.title}</Text>
          {products.inStock == true ? (
            <Text style={CardStyles.productPrice}>{products.price}</Text>
          ) : (
            <Text style={CardStyles.noStock}>STOKTA YOK!</Text>
          )}
        </View>
      </View>
    
  );
};

export default Cards;
