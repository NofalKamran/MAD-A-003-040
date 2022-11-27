import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Btn from './Btn';
import { darkGreen, green } from './Constants';
import menu from './Menu'

const Home = (props) => {
  return (
    <View>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
      <Text style={{ color: 'white', fontSize: 30 }}>Pros</Text>
      <Text style={{ color: 'white', fontSize: 30, marginBottom: 20 }}>Tehnics</Text>
      <Btn bgColor={green} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
      <Btn bgColor='white' textColor={darkGreen} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({})

export default Home;
