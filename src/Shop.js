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
 
 // const Stack=createNativeStackNavigator();
 const Shop= () => {
  
 
   return (
     //<NavigationContainer>
     
     <ScrollView style={styles.mainView}>
   
       {/* <View styles={styles.title}> */}
       <View style={styles.Banner}>
       <Text style={styles.title}>Calisthenic Shop</Text>
     <Image style={styles.icon} source={require("C:/Users/Arsal/ProThenics_Nofal/shopping-cart-black-shape.png")}/>
         </View>
       <TouchableOpacity style={styles.equip1}> 
          
         <ImageBackground   style={styles.reduceImage} source={require("C:/Users/Arsal/ProThenics_Nofal/paralletes.png")}>  
           
           <Text style={styles.titleEquip}>Paralletes</Text> 
           <View style={styles.buttons1}>
               <Button borderRadius="10" color="green" title="Add to Cart"/> 
           </View>
       </ImageBackground>
           
     </TouchableOpacity>
 
     <TouchableOpacity style={styles.equip2}> 
          
         <ImageBackground   style={styles.reduceImage2} source={require("C:/Users/Arsal/ProThenics_Nofal/rope.jpg")}>  
           
           <Text style={styles.titleEquip}>Rope</Text> 
           <View style={styles.buttons2}>
               <Button borderRadius="10" color="green" title="Add to Cart"/> 
           </View>
       </ImageBackground>
           
     </TouchableOpacity>

     <TouchableOpacity style={styles.equip3}> 
          
         <ImageBackground   style={styles.reduceImage3} source={require("C:/Users/Arsal/ProThenics_Nofal/dip.png")}>  
           
           <Text style={styles.titleEquip}>Dip Bars</Text> 
           <View style={styles.buttons3}>
               <Button borderRadius="10" color="green" title="Add to Cart"/> 
           </View>
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
  
   Banner:{
    flexDirection:"row", paddingTop:10
   },
   icon:{
 flex:0.2, height:65, 
   },
   mainView:{
     backgroundColor:"#3d3015", height:800,
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
 
 export default Shop;
 