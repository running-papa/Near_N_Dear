import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';

import {
  bg,
  btn_Gradient_up,
  btn_Gradient_down,
  card_marginVertical,
} from './Config';

import {useTheme} from '@react-navigation/native';

import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from '../components/StarRating';
import {data} from '../model/data';
import Card from '../components/Card';

const HouseDetailScreen = ({navigation}) => {

  const renderItem = ({item}) => {
    return (
        <Card 
            itemData={item}
            onPress={()=> navigation.navigate('CardItemDetails', {itemData: item})}
        />
    );
  };
  const { colors } = useTheme();

  const theme = useTheme();

    return (
      <ScrollView style={styles.container}>
        <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
        <View style={styles.sliderContainer}>
          <Swiper
            autoplay
            horizontal={false}
            height={200}
            activeDotColor="#FFF">
              <View style={styles.slide}>
                <Image
                  source={require('../assets/banners/food-banner1.jpg')}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={require('../assets/banners/food-banner2.jpg')}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={require('../assets/banners/food-banner3.jpg')}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
          </Swiper>
        </View>

        <View style={styles.cardsWrapper}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 18,
              fontWeight: 'bold',
              color: '#333',
            }}>
            검색 결과
          </Text>
          
        <View style={styles.container}>
          <FlatList 
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
          />
        </View>
        
      </View>
      </ScrollView>
    );
};

export default HouseDetailScreen;

const styles = StyleSheet.create({
   container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: '95%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  cardsWrapper: {
    marginTop: 20,
    marginBottom: 20,
    width: '95%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: card_marginVertical,
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
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
