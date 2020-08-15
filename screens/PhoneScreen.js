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

const PhoneScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  const [selectedValue_company, setSelectedValue_company] = useState("company");
  const [selectedValue_Type, setSelectedValue_Type] = useState("Type");
  const [selectedValue_Min, setSelectedValue_Min] = useState("Min");
  const [selectedValue_Max, setSelectedValue_Max] = useState("Max");
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <Carousel data = {dummyData}/>

        <Text style={styles.itemTitle}>당신의 폰를 찾아 보세요.</Text>
        
        <View style={styles.container_picker}>
          <Picker selectedValue={selectedValue_company} style={{ height: 35, width: 200 ,}} onValueChange={(itemValue, itemIndex) => setSelectedValue_company(itemValue)} >
            <Picker.Item  label="제조사" value="제조사" />
            <Picker.Item label="삼성" value="삼성" />
            <Picker.Item label="애플" value="애플" />
            <Picker.Item label="샤오미" value="샤오미" />
            <Picker.Item label="LG" value="LG" />

          </Picker>
          <Picker selectedValue={selectedValue_Type} style={{ height: 35, width: 200 }} onValueChange={(itemValue, itemIndex) => setSelectedValue_Type(itemValue)} >
            <Picker.Item label="타입" value="타입" />
            <Picker.Item label="휴대폰" value="휴대폰" />
            <Picker.Item label="태블릿" value="태블릿" />
            <Picker.Item label="노트북" value="노트북" />
            
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
            <TouchableOpacity onPress={()=>navigation.navigate('PhoneDetailScreen')}>
                <LinearGradient
                    colors={[btn_Gradient_up, btn_Gradient_down]}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>폰 검색</Text>
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

export default PhoneScreen;

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
