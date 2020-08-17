import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {
  card_marginVertical,
} from '../screens/Config';

import StarRating from './StarRating';

const FeedCard = ({itemData, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.cardImgWrapper}>
          <Image
            source={itemData.image}
            resizeMode="cover"
            style={styles.cardImg}
          />
          <View style={styles.cardInfo}>
            <Text  numberOfLines={1} style={styles.cardTitle}>{itemData.title}</Text>
            <StarRating ratings={itemData.ratings} reviews={itemData.reviews} />
          </View>
        </View>
        
      </View>
    </TouchableOpacity>
  );
};

export default FeedCard;

const styles = StyleSheet.create({
  card: {
    height: 180,
    width: 180,
    margin: 2,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
  },
  cardInfo: {
    position: 'absolute',
    flex: 1,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    bottom: 5,
    margin: 5,
    left: 5,
    width: 160,
    height:55,
  },
  cardTitle: {
    fontSize: 12,
    width:130,
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
