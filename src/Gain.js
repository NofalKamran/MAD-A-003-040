import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  Button,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// const Stack=createNativeStackNavigator();
const Gain = ({navigation}) => {
  return (
    //<NavigationContainer>

    <ScrollView style={styles.mainView}>
      {/* <View styles={styles.title}> */}
      {/* <View style={styles.Banner}>
       
          </View> */}
      <TouchableOpacity style={{margin: 20, marginTop: 30}}>
        <ImageBackground
          imageStyle={{borderRadius: 12, height: 180}}
          style={styles.reduceImage2}
          source={require('C:/Users/Arsal/ProThenics_Nofal/weighted-pull-ups.jpg')}>
          <Text style={styles.titleEquip}>Weighted Pullups</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity style={{margin: 20, marginTop: 10}}>
        <ImageBackground
          imageStyle={{borderRadius: 12, height: 180}}
          style={styles.reduceImage2}
          source={require('C:/Users/Arsal/ProThenics_Nofal/chest.jpg')}>
          <Text style={styles.titleEquip}>Weighted Pushups</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity style={styles.equip3}>
        <ImageBackground
          imageStyle={{borderRadius: 12}}
          style={styles.reduceImage3}
          source={require('C:/Users/Arsal/ProThenics_Nofal/Weighted-Dips.jpg')}>
          <Text style={styles.titleEquip3}>Weighted Dips</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity style={styles.equip4}>
        <ImageBackground
          imageStyle={{borderRadius: 12}}
          style={styles.reduceImage3}
          source={require('C:/Users/Arsal/ProThenics_Nofal/squatsweight.jpg')}>
          <Text style={styles.titleEquip3}>Weighted Squats</Text>
        </ImageBackground>
      </TouchableOpacity>

      {/* <Text>Mini-Shop</Text> */}
      {/* <ImageBackground style={styles.reduceImage} source={require("C:/Users/Arsal/ProThenics_Nofal/Pro.png")}>     
       </ImageBackground>  */}

      {/* </View> */}
      {/* </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Banner: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  icon: {
    flex: 0.2,
    height: 65,
  },
  mainView: {
    backgroundColor: 'white',
    height: 800,
  },

  equipGreen: {
    marginTop: 20,
    margin: 5,
    marginRight: 2,
    backgroundColor: 'green',
    borderRadius: 30,
    textAlign: 'center',
    height: 70,
  },
  equipGold: {
    marginTop: 20,
    margin: 5,
    marginRight: 2,
    backgroundColor: 'gold',
    borderRadius: 30,
    textAlign: 'center',
    height: 70,
  },
  equipRed: {
    marginTop: 20,
    margin: 5,
    marginRight: 2,
    backgroundColor: 'red',
    borderRadius: 30,
    textAlign: 'center',
    height: 70,
  },
  equip2: {
    marginTop: 70,
    margin: 10,

    borderRadius: 10,
    height: 200,
  },
  equip3: {
    marginTop: 10,
    margin: 20,

    borderRadius: 10,
    height: 300,
  },
  equip4: {
    margin: 20,
    marginTop: '-13%',
    borderRadius: 10,
    height: 300,
  },
  title: {
    //  marginLeft:10, paddingLeft:10,
    fontSize: 25,
    color: 'black',
    flex: 0.8,
    opacity: 1,
  },
  subplanEquip: {
    margin: 8,
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    opacity: 1,
    fontWeight: 'bold',
  },

  planEquip: {
    marginLeft: 10,
    fontSize: 30,
    color: 'white',
    opacity: 1,
    fontWeight: 'bold',
  },
  titleEquip: {
    marginTop: 40,
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    opacity: 1,
    fontWeight: 'bold',
  },
  titleEquip3: {
    marginTop: 80,
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    opacity: 1,
    fontWeight: 'bold',
  },
  sectionContainer: {
    backgroundColor: '',
  },
  reduceImage: {
    // opacity:0.6,
    height: 200, //backgroundColor:"#a6a6a6"
  },
  reduceImage2: {
    // opacity:0.7,
    height: 200, //backgroundColor:"#a6a6a6"
  },

  reduceImage3: {
    //opacity:0.7,
    height: 200, //backgroundColor:"#a6a6a6"
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  titleImage: {
    flex: 1,
    height: 400,
    marginTop: '-17%',
    marginLeft: '-5%',
  },
});

export default Gain;
