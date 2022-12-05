import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Btn from './Btn';
import { darkGreen, green } from './Constants';
import menu from './Menu'

const Home = (props) => {
  return (
    <View style={{ flex:1,backgroundColor:'#040f13'}}>
      <Image style={{width:400}} source={require('C:/Users/Arsal/ProThenics_Nofal/1st.png')}>
        </Image>
      <View style={{ backgroundColor:'#040f13', margin:20, marginTop:40}}>
       
      <Btn bgColor={green} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
      <View style={{marginTop:33}}>
      <Btn bgColor='white' textColor={darkGreen} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
      </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({

  
})

export default Home;
