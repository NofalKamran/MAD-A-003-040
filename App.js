/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , {useState} from 'react';
// import * as firebaseobj from 'firebase';
// import {firebaseConfig} from './src/config'
import type {Node} from 'react';
import {
  SafeAreaView,
  Image,ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text, 
  useColorScheme,
  TouchableOpacity, Button,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from './src/Chat';
import Shop from './src/Shop'
import Home from './src/Home'
 import Menu from './src/Menu'
 import Strength from './src/Strength'
 import Shoulder from './src/Shoulder'
 import Maps from './src/Maps'
 import Login from './src/Login'
 import Signup from './src/Signup'
 import Gain from './src/Gain'
 import Loss from './src/Loss'

 
const Stack=createNativeStackNavigator();
function App()  {
 

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={"Home"} >
        {/* <Stack.Screen name="User" component={User}/> */}
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Menu" component={Menu}/>
        <Stack.Screen name="Strength" component={Strength}/>
        <Stack.Screen name="Shoulder" component={Shoulder}/>
        <Stack.Screen name="Maps" component={Maps}/>
        <Stack.Screen name="Gain" component={Gain}/>
        <Stack.Screen name="Loss" component={Loss}/>

        <Stack.Screen name="Chat" component={Chat}/>
        <Stack.Screen name="Shop" component={Shop}/> 
      </Stack.Navigator>
    {/* <View style={styles.mainView}>
      <Chat/>
     
    </View> */}
   </NavigationContainer>
   
  );
};

export default  App;
