import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

const CardStyles = StyleSheet.create({
  mainContainer: {
    /*flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',*/
  },
  productDetailContainer: {
    marginTop: 10,
    alignItems: 'flex-start',
  },
  cardContainer: {
    marginBottom: 10,
    borderRadius: 5,
    margin: 2,
    alignItems: 'center',
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 2.8,
    backgroundColor: '#E0E0E0',
  },
  image: {
    resizeMode: 'cover',
    borderRadius: 5,
    marginTop: 5,
    width: Dimensions.get('window').width / 2.3,
    height: Dimensions.get('window').height / 4,
  },
  productTitle: {
    fontWeight: 'bold',
  },
  productPrice: {},
  noStock: {
    fontWeight: 'bold',
    color: 'red',
  },
});

export default CardStyles;
