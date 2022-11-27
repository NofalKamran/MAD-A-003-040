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
 const Chat= ({navigation}) => {
  
 
   return (
     //<NavigationContainer>
     
     <ScrollView>
   
       {/* <View styles={styles.title}> */}
       <View style={styles.Banner}>
       <Text style={styles.title}>Community</Text>
         </View>
       <TouchableOpacity onPress={()=>navigation.push('Shop')} style={styles.equip1}> 
          
         <Image   style={styles.reduceImage} source={require("C:/Users/Arsal/ProThenics_Nofal/user.png")}>  
        
       </Image>
        <View style={styles.sectionContainer}>    
       <Text style={styles.titleEquip}>User1  
          
       </Text> 
       <Text style={styles.titleEquip}>Beginner  
          
          </Text> 
            </View>
     </TouchableOpacity>
 
     <TouchableOpacity style={styles.equip2}> 
          
          <Image   style={styles.reduceImage} source={require("C:/Users/Arsal/ProThenics_Nofal/user.png")}>  
         
        </Image>
         <View style={styles.sectionContainer}>    
        <Text style={styles.titleEquip}>User2 
           
        </Text> 
        <Text style={styles.titleEquip}>Expert  
           
           </Text> 
             </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.equip2}> 
          
          <Image   style={styles.reduceImage} source={require("C:/Users/Arsal/ProThenics_Nofal/user.png")}>  
         
        </Image>
         <View style={styles.sectionContainer}>   
  
        <Text style={styles.titleEquip}>User3  
        </Text> 
 
        <Text style={styles.titleEquip}>Intermediate  
           
           </Text> 

             </View>
  
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
    
   mainView:{
     backgroundColor:"white", height:800,
   },
    
   equip1:{
     marginTop:20,
     margin:10,
   flexDirection:"row",
     borderRadius:10,
     height:100, 
   },
   equip2:{
     marginTop:80,
     margin:10,
     flexDirection:"row",
     
     borderRadius:10,
     height:100
   },
   equip3:{
    marginTop:170,
    margin:10,
  
    borderRadius:10,
    height:300
  },
   title:{
    //  marginLeft:10, paddingLeft:10, 
     fontSize:25,  color:"black", flex:0.8, opacity:1

      
   },
//    buttons1:{
//      marginLeft:7,
//      marginTop:130, 
//    },
//    buttons2:{
//      marginLeft:10,
//      marginTop:180, 
//    },
//    buttons3:{
//     marginLeft:10,
//     marginTop:125, 
//   },
   titleEquip:{
     marginTop:10, 
     fontSize:25,  color:"black",      paddingLeft:7,
    fontWeight:"bold"
   },
   sectionContainer: {
     flex:0.8, backgroundColor:"#a6a6a6", borderRadius:10, opacity:0.6
   },
   reduceImage:{
    opacity:0.6, flex:0.2,
    height:100, borderRadius:20, backgroundColor:"#a6a6a6"
   },
   reduceIcon:{
    opacity:0.6, flex:0.,
    height:30, borderRadius:20, backgroundColor:"#a6a6a6"
   },
   reduceImage2:{
     opacity:0.6,
     height:300, borderRadius:20, backgroundColor:"#a6a6a6"
    },
   
   reduceImage3:{
    opacity:0.6, flex:0.3,
    height:300, borderRadius:20, backgroundColor:"#a6a6a6"
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   
   
 });
 
 export default Chat;
 //export default Shop;
 