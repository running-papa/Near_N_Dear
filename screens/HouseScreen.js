import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, StatusBar, Picker,TouchableOpacity,  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import Carousel from '../components/Carousel'
import { dummyData } from '../data/Data'
import {
  bg,
  btn_Gradient_up,
  btn_Gradient_down,
} from './Config';

const HouseScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  const [selectedValue_Type, setSelectedValue_Type] = useState("Type");
  const [selectedValue_City, setSelectedValue_City] = useState("City");
  const [selectedValue_Beds, setSelectedValue_Beds] = useState("Beds");
  const [selectedValue_Baths, setSelectedValue_Baths] = useState("Baths");
  const [selectedValue_Min, setSelectedValue_Min] = useState("Min");
  const [selectedValue_Max, setSelectedValue_Max] = useState("Max");
  

    return (
      <View style={styles.container}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <Carousel data = {dummyData}/>

        <Text style={styles.itemTitle}>당신의 집을 찾아 보세요.</Text>
        
        <View style={styles.container_picker}>
          <Picker selectedValue={selectedValue_Type} style={{ height: 35, width: 200 ,}} onValueChange={(itemValue, itemIndex) => setSelectedValue_Type(itemValue)} >
            <Picker.Item  label="Type" value="Type" />
            <Picker.Item label="rent" value="rent" />
            <Picker.Item label="Trading" value="Trading" />
          </Picker>
          <Picker selectedValue={selectedValue_City} style={{ height: 35, width: 200 }} onValueChange={(itemValue, itemIndex) => setSelectedValue_City(itemValue)} >
            <Picker.Item label="City" value="City" />
            <Picker.Item label="Toronto" value="Toronto" />
            <Picker.Item label="Montreal" value="Montreal" />
            <Picker.Item label="Vancouver" value="Vancouver" />
            <Picker.Item label="Calgary" value="Calgary" />
            <Picker.Item label="Edmonton" value="Edmonton" />
            <Picker.Item label="Ottawa" value="Ottawa" />
            <Picker.Item label="Quebec City" value="Quebec City" />
            <Picker.Item label="Hamilton" value="Hamilton" />
            <Picker.Item label="Winnipeg" value="Winnipeg" />
            <Picker.Item label="Kitchener " value="Kitchener " />
            <Picker.Item label="Victoria " value="Victoria " />
            <Picker.Item label="Fredericton " value="Fredericton " />
            <Picker.Item label="more" value="more" />
          </Picker>
        </View>

        <View style={styles.container_picker}>
          <Picker selectedValue={selectedValue_Beds} style={{ height: 35, width: 200 ,}} onValueChange={(itemValue, itemIndex) => setSelectedValue_Beds(itemValue)} >
            <Picker.Item  label="Beds" value="Beds" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="5+" value="5+" />
          </Picker>
          <Picker selectedValue={selectedValue_Baths} style={{ height: 35, width: 200 }} onValueChange={(itemValue, itemIndex) => setSelectedValue_Baths(itemValue)} >
            <Picker.Item label="Baths" value="Baths" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="5+" value="5+" />
          </Picker>
        </View>
        <View style={styles.container_picker}>
          <Picker selectedValue={selectedValue_Min} style={{ height: 35, width: 200 }} onValueChange={(itemValue, itemIndex) => setSelectedValue_Min(itemValue)} >
            <Picker.Item label="Min Price" value="Min Price" />
              <Picker.Item label="0" value="0" />
              <Picker.Item label="500" value="500" />
              <Picker.Item label="1000" value="1000" />
              <Picker.Item label="1500" value="1500" />
              <Picker.Item label="2000" value="2000" />
              <Picker.Item label="2000+" value="2000+" />
            </Picker>
            <Picker selectedValue={selectedValue_Max} style={{ height: 35, width: 200 }} onValueChange={(itemValue, itemIndex) => setSelectedValue_Max(itemValue)} >
            <Picker.Item label="Max Price" value="Max Price" />
              <Picker.Item label="500" value="500" />
              <Picker.Item label="1000" value="1000" />
              <Picker.Item label="1500" value="1500" />
              <Picker.Item label="2000" value="2000" />
              <Picker.Item label="Unlimited" value="Unlimited" />
            </Picker>
        </View>
       
        <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('HouseDetailScreen')}>
                <LinearGradient
                    colors={[btn_Gradient_up, btn_Gradient_down]}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>집 검색</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                </LinearGradient>
            </TouchableOpacity>
            </View>

      </View>
    );
};

export default HouseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  container_picker: {
    margin: 10,
    flexDirection: 'row', 
  },
  textView: {
    flexDirection: 'row', 
    bottom: 10,
    margin: 10,
    left: 5,
  },
  itemTitle: {
    color: 'black',
    fontSize: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginTop: 50,
    marginBottom: 5,
    fontWeight: "bold",
    elevation: 5,
    textAlign: 'center',
  },
  itemDescription: {
      color: 'black',
      fontSize: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0.8, height: 0.8 },
      shadowOpacity: 1,
      shadowRadius: 3,
      elevation: 2
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});
