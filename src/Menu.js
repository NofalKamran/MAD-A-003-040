 
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
   View, PermissionsAndroid
 } from 'react-native';

 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Geolocation from 'react-native-geolocation-service';

 // const Stack=createNativeStackNavigator();
 

 const Menu= ({navigation}) => {
 
   return (
     //<NavigationContainer>
     
     <ScrollView style={styles.mainView}>
   
       {/* <View styles={styles.title}> */}
       {/* <View style={styles.Banner}>
       
          </View> */}
          <Text style={styles.planEquip}>Workout Plans</Text> 
 
        <ScrollView style={{height:200, paddingLeft:35, marginLeft:"-20%", marginRight:"-2%", width:'auto'}} showsHorizontalScrollIndicator={false} horizontal={true}>
       <View style={{flexDirection:'row', margin:30, marginTop:"-2%",   padding:20, paddingLeft:5}}>
 
       <TouchableOpacity style={styles.equip1} onPress={()=>navigation.push('Strength')}> 
          
         <ImageBackground imageStyle={{ borderRadius: 12}}  style={styles.reduceImage} source={require("C:/Users/Arsal/ProThenics_Nofal/strength.jpg")}>  
           
           <Text style={styles.subplanEquip}>Strength Gain</Text> 
            
       </ImageBackground>
           
     </TouchableOpacity>
     <TouchableOpacity style={styles.equip1} onPress={()=>navigation.push('Gain')} > 
          
         <ImageBackground imageStyle={{ borderRadius: 12,opacity:0.9}}  style={styles.reduceImage} source={require("C:/Users/Arsal/ProThenics_Nofal/weights2.jpg")}>  
           
           <Text style={styles.subplanEquip}>Weight Gain </Text> 
            
       </ImageBackground>
           
     </TouchableOpacity>
     <TouchableOpacity style={styles.equip1} onPress={()=>navigation.push('Loss')} > 
          
         <ImageBackground imageStyle={{ borderRadius: 12,opacity:0.85}}  style={styles.reduceImage} source={require("C:/Users/Arsal/ProThenics_Nofal/weightloss.jpg")}>  
           
           <Text style={styles.subplanEquip}>Weight Loss </Text> 
            
       </ImageBackground>
           
     </TouchableOpacity>
     </View>
    </ScrollView>
    {/* </View> */}
     <TouchableOpacity style={styles.equip2} onPress={()=>navigation.push('Shop')}> 
          
         <ImageBackground imageStyle={{ borderRadius: 12}}   style={styles.reduceImage2} source={require("C:/Users/Arsal/ProThenics_Nofal/shop.jpg")}>  
           
           <Text style={styles.titleEquip}>Shop</Text> 
           
       </ImageBackground>
           
     </TouchableOpacity>

     <TouchableOpacity style={styles.equip3} onPress={()=>navigation.push('Maps')}> 
          
         <ImageBackground  imageStyle={{ borderRadius: 12}}  style={styles.reduceImage3} source={require("C:/Users/Arsal/ProThenics_Nofal/park.jpg")}>  
           
           <Text style={styles.titleEquip}>Nearby Parks</Text> 
            
       </ImageBackground>
           
     </TouchableOpacity>

     <TouchableOpacity style={styles.equip4}> 
          
         <ImageBackground  imageStyle={{ borderRadius: 12}}  style={styles.reduceImage3} source={require("C:/Users/Arsal/ProThenics_Nofal/community.jpg")}>  
           
           <Text style={styles.titleEquip}>Community</Text> 
            
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
     backgroundColor:"white", height:800,
   },
    
   equip1:{
     marginTop:20,
     margin:10,
    marginLeft:15,
     borderRadius:10,
     height:100
   },
   equip2:{
     marginTop:10,
     margin:10,
   
     borderRadius:10,
     height:200
   },
   equip3:{
    marginTop:20,
    margin:10,
      
    borderRadius:10,
    height:300
  },
  equip4:{
    margin:10,
    marginTop:'-20%',
    borderRadius:10,
    height:300
  },
   title:{
    //  marginLeft:10, paddingLeft:10, 
     fontSize:25,  color:"black", flex:0.8, opacity:1

   },
   subplanEquip:{
    marginTop:40,  marginLeft:20,
     fontSize:30,  color:"white",     textAlign:"center", opacity:1,
    fontWeight:"bold"
  },
  planEquip:{
    marginLeft:10, marginTop:15,
    fontSize:30,  color:"black", opacity:1, fontFamily:'Lobster-Regular',
   fontWeight:"bold" , textAlign: 'left',
  },
   titleEquip:{
     marginTop:60, 
     fontSize:30,  color:"white",     textAlign:"center", opacity:1,
    fontWeight:"bold", fontFamily:'Lobster-Regular',
   },
   titleEquip3:{
    marginTop:50, 
    fontSize:30,  color:"black",     textAlign:"center", opacity:1,
   fontWeight:"bold"
  },
   sectionContainer: {
     backgroundColor:""
   },
   reduceImage:{
   // opacity:0.6,
    height:170,  //backgroundColor:"#a6a6a6"
   },
   reduceImage2:{
    // opacity:0.7,
     height:200,  //backgroundColor:"#a6a6a6"
    },
 
   reduceImage3:{
    //opacity:0.7,
    height:200,  //backgroundColor:"#a6a6a6"
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
   titleImage:{
    flex:1, height:400, marginTop:"-17%" , marginLeft:"-5%",  
     }
 });
 
 export default Menu;
 