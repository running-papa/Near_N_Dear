import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
  bg,
  btn_Gradient_up,
  btn_Gradient_down,
} from './Config';

import Icon from 'react-native-vector-icons/Ionicons';

//feed, home, car, phone, immgrate [[
import FeedScreen from './FeedScreen';
import HouseScreen from './HouseScreen';
import CarScreen from './CarScreen';
import PhoneScreen from './PhoneScreen';
import ImmgrateScreen from './ImmgrateScreen';

const FeedStack = createStackNavigator();
const HouseStack = createStackNavigator();
const CarStack = createStackNavigator();
const PhoneStack = createStackNavigator();
const ImmgrateStack = createStackNavigator();
//]]


import CommunityScreen from './CommunityScreen';
import ExerScreen from './ExerScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Feed"
    activeColor="#fff"
  >
    <Tab.Screen
      name="Feed"
      component={FeedStackScreen}
      options={{
        tabBarLabel: 'Feed',
        tabBarColor: bg,
        tabBarIcon: ({ color }) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen 
      name="House"
      component={HouseStackScreen}
      options={{
        tabBarLabel: 'House',
        tabBarColor: bg,
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Car"
      component={CarStackScreen}
      options={{
        tabBarLabel: 'Car',
        tabBarColor: bg,
        tabBarIcon: ({ color }) => (
          <Icon name="ios-car" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Phone"
      component={PhoneStackScreen}
      options={{
        tabBarLabel: 'Phone',
        tabBarColor: bg,
        tabBarIcon: ({ color }) => (
          <Icon name="ios-phone-portrait" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Immgrate"
      component={ImmgrateStackScreen}
      options={{
        tabBarLabel: 'Immgrate',
        tabBarColor: bg,
        tabBarIcon: ({ color }) => (
          <Icon name="ios-airplane" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const FeedStackScreen = ({ navigation }) => (
  <FeedStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: bg,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <FeedStack.Screen name="Feed" component={FeedScreen} options={{
      title: 'Feed',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor={bg} onPress={() => navigation.openDrawer()}></Icon.Button>
      ),
      headerRight: () => (
        <Icon.Button name="ios-cart" size={25} backgroundColor={bg} onPress={() => navigation.openDrawer()}></Icon.Button>
      ),
    }} />
  </FeedStack.Navigator>
);

const HouseStackScreen = ({ navigation }) => (
  <HouseStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: bg,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HouseStack.Screen name="Home" component={HouseScreen} options={{
      title: 'Finding a house',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor={bg} onPress={() => navigation.openDrawer()}></Icon.Button>
      ),
      headerRight: () => (
        <Icon.Button name="ios-cart" size={25} backgroundColor={bg} onPress={() => navigation.openDrawer()}></Icon.Button>
      ),
      
    }} />
  </HouseStack.Navigator>
);

const CarStackScreen = ({ navigation }) => (
  <CarStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: bg,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <CarStack.Screen name="Car" component={CarScreen} options={{
      title: 'Finding a Car',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor={bg} onPress={() => navigation.openDrawer()}></Icon.Button>
      ),
      headerRight: () => (
        <Icon.Button name="ios-cart" size={25} backgroundColor={bg} onPress={() => navigation.openDrawer()}></Icon.Button>
      ),
    }} />
  </CarStack.Navigator>
);

const PhoneStackScreen = ({ navigation }) => (
  <PhoneStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: bg,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <PhoneStack.Screen name="Phone" component={PhoneScreen} options={{
      title: 'Finding a Phone',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor={bg} onPress={() => navigation.openDrawer()}></Icon.Button>
      ),
      headerRight: () => (
        <Icon.Button name="ios-cart" size={25} backgroundColor={bg} onPress={() => navigation.openDrawer()}></Icon.Button>
      ),
    }} />
  </PhoneStack.Navigator>
);

const ImmgrateStackScreen = ({ navigation }) => (
  <ImmgrateStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: bg,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <ImmgrateStack.Screen name="Immgrate" component={ImmgrateScreen} options={{
      title: 'Immigration services',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor={bg} onPress={() => navigation.openDrawer()}></Icon.Button>
      ),
      headerRight: () => (
        <Icon.Button name="ios-cart" size={25} backgroundColor={bg} onPress={() => navigation.openDrawer()}></Icon.Button>
      ),
    }} />
  </ImmgrateStack.Navigator>
);

// const DetailsStackScreen = ({ navigation }) => (
//   <DetailsStack.Navigator screenOptions={{
//     headerStyle: {
//       backgroundColor: '#1f65ff',
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//       fontWeight: 'bold'
//     }
//   }}>
//     <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
//       title: '홈 & 피드',
//       headerLeft: () => (
//         <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
//       )
//     }} />
//   </DetailsStack.Navigator>
// );
