import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './screens/Login'
import Home from './screens/Home'
import Exer from './screens/Exer';
import Ground from './screens/Ground';
import MyPage from './screens/MyPage';
import Community from './screens/Community';

// import Detail from './screens/Detail'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';

// const Stack = createStackNavigator()

// function MainStackNavigator() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions= {{ gestureEnabled: true}}>
//         <Stack.Screen name='Home' component={Home} />
//         <Stack.Screen name='Detail' component={Detail} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default MainStackNavigator
const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator();
function MainStackNavigator() {
 
  return (
    //로긴이 되어있으면 
    <NavigationContainer>
      {global.isFromManageUserAccount ? 
      (
          <Tab.Navigator
          initialRouteName="Home"
          activeColor="white"
          initialRouteName="Login"
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Community"
            component={Community}
            options={{
              tabBarLabel: 'Community',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="heart" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Exer"
            component={Exer}
            options={{
              tabBarLabel: 'Exer',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="camera" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Ground"
            component={Ground}
            options={{
              tabBarLabel: 'Ground',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="selection-ellipse-arrow-inside" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="MyPage"
            component={MyPage}
            options={{
              tabBarLabel: 'MyPage',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator screenOptions= {{ gestureEnabled: true}}>
          <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator> 
        //로그인이 안되어있으면
        
      )}
    </NavigationContainer>
  );
}

export default MainStackNavigator;