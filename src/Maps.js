/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
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
 import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'
 // const Stack=createNativeStackNavigator();
 const Maps= () => {
  
 
   return (
     //<NavigationContainer>
    //  <View style={styles.mapSt}>
      
      <MapView
     provider={PROVIDER_GOOGLE}
      style={styles.mapSt2}
    initialRegion={{
      
      latitude: 33.69456414704009,
      longitude: 73.0332678883396,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    }}
    
    showUserLocation={true}
  >
    <Marker coordinate={{
    latitude: 33.67234901131849,
    longitude: 73.06454535194575,

  }}/>
  <Marker coordinate={{latitude:33.71204302987969, longitude:73.05103816195043}}/>
  <Marker coordinate={{latitude:33.665959106624314, longitude:73.00428978353044}}/>
  <Marker coordinate={{latitude:33.69609776538388, longitude:73.06139230190219}}/>
     </MapView>
 
  
      // </View>
   );
 };
 
 const styles = StyleSheet.create({
  
   Banner:{
    flexDirection:"row", paddingTop:10
   },
   icon:{
 flex:0.2, height:65, 
   },
   mainView:{
     backgroundColor:"#3d3015", height:800,
   },
    mapSt:{
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
     
mapSt2:{
  ...StyleSheet.absoluteFillObject,
},
   equip1:{
     marginTop:20,
     margin:10,
   
     borderRadius:10,
     height:200
   },
   equip2:{
     marginTop:120,
     margin:10,
   
     borderRadius:10,
     height:200
   },
   equip3:{
    marginTop:170,
    margin:10,
  
    borderRadius:10,
    height:300
  },
   title:{
    //  marginLeft:10, paddingLeft:10, 
     fontSize:25,  color:"white", flex:0.8, opacity:1,
      margin:10
      
   },
   buttons1:{
     marginLeft:7,
     marginTop:130, 
   },
   buttons2:{
     marginLeft:10,
     marginTop:180, 
   },
   buttons3:{
    marginLeft:10,
    marginTop:125, 
  },
   titleEquip:{
     marginTop:70, 
     fontSize:25,  color:"black",     textAlign:"center", opacity:1,
    fontWeight:"bold"
   },
   sectionContainer: {
     backgroundColor:""
   },
   reduceImage:{
    opacity:0.6,
    height:250, borderRadius:20, backgroundColor:"#a6a6a6"
   },
   reduceImage2:{
     opacity:0.6,
     height:300, borderRadius:20, backgroundColor:"#a6a6a6"
    },
 
   reduceImage3:{
    opacity:0.6,
    height:300, borderRadius:20, backgroundColor:"#a6a6a6"
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
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default Maps;
 