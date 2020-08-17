import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar ,FlatList, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';
import {data} from '../model/data';
import FeedCard from '../components/FeedCard';

const FeedScreen = ({navigation}) => {

  const renderItem = ({item}) => {
    return (
        <FeedCard 
            itemData={item}
            onPress={()=> navigation.navigate('CardItemDetails', {itemData: item})}
        />
    );
  };

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <ScrollView style={styles.container}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/> 
        
        <View style={styles.container}>
            <View style={styles.section}>
              <Text style={styles.title}>인기집 구하기</Text>
            </View>
            <View style={styles.container}>
                    <FlatList 
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />
              </View>
          </View>
          <View style={styles.container}>
            <View style={styles.section}>
              <Text style={styles.title}>인기차 구하기</Text>
            </View>
            <View style={styles.container}>
                  <FlatList 
                      data={data}
                      renderItem={renderItem}
                      keyExtractor={item => item.id}
                      horizontal={true}
                  />
              </View>
          </View>
          <View style={styles.container}>
            <View style={styles.section}>
              <Text style={styles.title}>인기폰 구하기</Text>
            </View>
            <View style={styles.container}>
                  <FlatList 
                      data={data}
                      renderItem={renderItem}
                      keyExtractor={item => item.id}
                      horizontal={true}
                  />
              </View>
          </View>
      </ScrollView>
    );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  container_row: {
    flex: 1, 
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  section: {
    padding: 15,
    backgroundColor: 'white',
  },
});
