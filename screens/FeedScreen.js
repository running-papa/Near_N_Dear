import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar ,FlatList, ScrollView, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@react-navigation/native';
import {data} from '../model/data';
import FeedCard from '../components/FeedCard';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  bg,
  btn_Gradient_up,
  btn_Gradient_down,
} from './Config';
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
        <StatusBar backgroundColor={bg} barStyle="light-content"/>
        
        <View style={styles.container}>
            <View style={styles.elem}>
              <View style={styles.userInfo}>
                <Text style={styles.title}>인기집 구하기</Text>
              </View>
              <View style={styles.userComment}>
                <View style={styles.button}>
                  <TouchableOpacity onPress={()=>navigation.navigate('HouseDetailScreen')}>
                    <View style={styles.signIn}>
                      <Text style={styles.title_sub}>더보기</Text>
                      <MaterialIcons style={{marginTop:5}} name="navigate-next" color="#000" size={20} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
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
          <View style={styles.elem}>
            <View style={styles.section}>
              <Text style={styles.title}>인기차 구하기</Text>
            </View>
            <View style={styles.userComment}>
                <View style={styles.button}>
                  <TouchableOpacity onPress={()=>navigation.navigate('CarDetailScreen')}>
                    <View style={styles.signIn}>
                      <Text style={styles.title_sub}>더보기</Text>
                      <MaterialIcons style={{marginTop:5}} name="navigate-next" color="#000" size={20} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
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
          <View style={styles.elem}>
            <View style={styles.section}>
              <Text style={styles.title}>인기폰 구하기</Text>
            </View>
            <View style={styles.userComment}>
                <View style={styles.button}>
                  <TouchableOpacity onPress={()=>navigation.navigate('PhoneDetailScreen')}>
                    <View style={styles.signIn}>
                      <Text style={styles.title_sub}>더보기</Text>
                      <MaterialIcons style={{marginTop:5}} name="navigate-next" color="#000" size={20} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
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
  title_sub: {
    fontSize: 10,
    marginTop: 5,
  },
  button: {
    alignItems: 'center',
  },
  signIn: {
      flexDirection: 'row'
  },
  section: {
    
    padding: 15,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  elem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor:'#eee',
    borderBottomWidth:0.5,
    padding: 5,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userComment: {
    padding:8,
    borderRadius:5,
  },
});
