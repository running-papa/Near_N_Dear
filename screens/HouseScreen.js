import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Carousel from '../components/Carousel'
import { dummyData } from '../data/Data'

const HouseScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <Carousel data = {dummyData}/>
        {/* <Button
          title="Go to details screen"
          onPress={() => navigation.navigate("Details")}
        /> */}
      </View>
    );
};

export default HouseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});
