 
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
 const Strength= ({navigation}) => {
  
 
   return (
     //<NavigationContainer>
     
     <ScrollView style={styles.mainView}>
   
       {/* <View styles={styles.title}> */}
       {/* <View style={styles.Banner}>
       
          </View> */}
          <Text style={styles.planEquip}>Shoulder</Text> 
 
        <ScrollView style={{height:250, paddingLeft:35,  marginLeft:"-20%", marginRight:"-2%", width:'auto'}} showsHorizontalScrollIndicator={false} horizontal={true}>
       <View style={{flexDirection:'row', margin:30, marginTop:"-2%",   padding:20, paddingLeft:5}}>
 
       <TouchableOpacity style={styles.equip1} onPress={()=>navigation.push('Strength')}> 
          
       <ImageBackground  imageStyle={{ borderRadius: 12}}  style={styles.reduceImage3} source={require("C:/Users/Arsal/ProThenics_Nofal/pike.jpg")}>  
          <View style={{borderRadius:10, margin:7, backgroundColor:'crimson', width:100}}>
           <Text style={{margin:5, fontWeight:'bold', color:'white'}}> Advanced</Text>
            </View>
           <Text style={styles.subplanEquip}>Pike pushup</Text> 
 
     </ImageBackground>
           
     </TouchableOpacity>
     <TouchableOpacity style={styles.equip1} onPress={()=>navigation.push('Gain')} > 
          
     <ImageBackground  imageStyle={{ borderRadius: 12}}  style={styles.reduceImage3} source={require("C:/Users/Arsal/ProThenics_Nofal/handstand.jpg")}>  
     <View style={{borderRadius:10, margin:7, backgroundColor:'purple', width:130}}>
           <Text style={{margin:5, fontWeight:'bold', color:'white'}}> Intermediate</Text>
            </View>
           <Text style={styles.subplanEquip}>Handstand </Text> 
 </ImageBackground>
        
           
     </TouchableOpacity>
     <TouchableOpacity style={styles.equip1} onPress={()=>navigation.push('Loss')} > 
          
     <ImageBackground  imageStyle={{ borderRadius: 12}}  style={styles.reduceImage3} source={require("C:/Users/Arsal/ProThenics_Nofal/shoulder.jpg")}>  
     <View style={{borderRadius:10, margin:7, backgroundColor:'purple', width:130}}>
           <Text style={{margin:5, fontWeight:'bold', color:'white'}}> Intermediate</Text>
            </View>

           <Text style={styles.subplanEquip}>Dips </Text> 
  
        </ImageBackground>    
     </TouchableOpacity>
     </View>
    </ScrollView>
    {/* </View> */}
    <Text style={styles.planEquip}>Triceps</Text> 

    <ScrollView style={{height:250, paddingLeft:35,  marginLeft:"-20%", marginRight:"-2%", width:'auto'}} showsHorizontalScrollIndicator={false} horizontal={true}>
       <View style={{flexDirection:'row', margin:30, marginTop:"-2%",   padding:20, paddingLeft:5}}>
 
       <TouchableOpacity style={styles.equip1} onPress={()=>navigation.push('Strength')}> 
          
       <ImageBackground  imageStyle={{ borderRadius: 12}}  style={styles.reduceImage3} source={require("C:/Users/Arsal/ProThenics_Nofal/triceps.jpg")}>  
       <View style={{borderRadius:10, margin:7, backgroundColor:'purple', width:130}}>
           <Text style={{margin:5, fontWeight:'bold', color:'white'}}> Intermediate</Text>
            </View>

           <Text style={styles.subplanEquip}>Diamond pushup</Text> 
 
     </ImageBackground>
           
     </TouchableOpacity>
     <TouchableOpacity style={styles.equip1} onPress={()=>navigation.push('Gain')} > 
          
     <ImageBackground  imageStyle={{ borderRadius: 12}}  style={styles.reduceImage3} source={require("C:/Users/Arsal/ProThenics_Nofal/benchD.jpg")}>  
     <View style={{borderRadius:10, margin:7, backgroundColor:'green', width:100}}>
           <Text style={{margin:5, fontWeight:'bold', color:'white'}}> Beginner</Text>
            </View>

           <Text style={{marginTop:17,  marginLeft:20, 
     fontSize:30,  color:"goldenrod",     textAlign:"center", opacity:1,
    fontWeight:"bold"}}>Bench Dips </Text> 
 </ImageBackground>
        
                  
     </TouchableOpacity>
     <TouchableOpacity style={styles.equip1} onPress={()=>navigation.push('Loss')} > 
          
     <ImageBackground  imageStyle={{ borderRadius: 12}}  style={styles.reduceImage3} source={require("C:/Users/Arsal/ProThenics_Nofal/tricepextension.jpg")}>  
     <View style={{borderRadius:10, margin:7, backgroundColor:'purple', width:130}}>
           <Text style={{margin:5, fontWeight:'bold', color:'white'}}> Intermediate</Text>
       </View>
           <Text style={styles.subplanEquip}>Forearm extension </Text> 
  
        </ImageBackground>    
     </TouchableOpacity>
     </View>
    </ScrollView>

 
          <Text style={styles.planEquip}>Biceps</Text> 
 
       
    <ScrollView style={{height:250, paddingLeft:35,  marginLeft:"-20%", marginRight:"-2%", width:'auto'}} showsHorizontalScrollIndicator={false} horizontal={true}>
       <View style={{flexDirection:'row', margin:30, marginTop:"-2%",   padding:20, paddingLeft:5}}>
 
       <TouchableOpacity style={styles.equip1} onPress={()=>navigation.push('Strength')}> 
          
       <ImageBackground  imageStyle={{ borderRadius: 12}}  style={styles.reduceImage3} source={require("C:/Users/Arsal/ProThenics_Nofal/hefesto.jpg")}>  
       <View style={{borderRadius:10, margin:7, backgroundColor:'crimson', width:100}}>
           <Text style={{margin:5, fontWeight:'bold', color:'white'}}> Advanced</Text>
       </View>
           <Text style={{marginTop:17,  marginLeft:20, 
     fontSize:30,  color:"gold",     textAlign:"center", opacity:1,
    fontWeight:"bold"}}>Hefesto</Text> 
 
     </ImageBackground>
           
     </TouchableOpacity>
     <TouchableOpacity style={styles.equip1} onPress={()=>navigation.push('Gain')} > 
          
     <ImageBackground  imageStyle={{ borderRadius: 12}}  style={styles.reduceImage3} source={require("C:/Users/Arsal/ProThenics_Nofal/chinups.jpg")}>  
     <View style={{borderRadius:10, margin:7, backgroundColor:'purple', width:130}}>
           <Text style={{margin:5, fontWeight:'bold', color:'white'}}> Intermediate</Text>
       </View>
           <Text style={{marginTop:17,  marginLeft:20, 
     fontSize:30,  color:"gold",     textAlign:"center", opacity:1,
    fontWeight:"bold"}}>Chin ups </Text> 
 </ImageBackground>
        
                  
     </TouchableOpacity>
     <TouchableOpacity style={styles.equip1} onPress={()=>navigation.push('Loss')} > 
          
     <ImageBackground  imageStyle={{ borderRadius: 12}}  style={styles.reduceImage3} source={require("C:/Users/Arsal/ProThenics_Nofal/bodyrow.jpg")}>  
     <View style={{borderRadius:10, margin:7, backgroundColor:'purple', width:130}}>
           <Text style={{margin:5, fontWeight:'bold', color:'white'}}> Intermediate</Text>
       </View>
           <Text style={styles.subplanEquip}>Body Rows</Text> 
  
        </ImageBackground>    
     </TouchableOpacity>
     </View>
    </ScrollView>
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
     backgroundColor:"#363636", height:800,
   },
    
   equip1:{
     marginTop:20,
     margin:10,
    marginLeft:15,
     borderRadius:10,
     height:100, 
   },
   equip2:{
     marginTop:70,
     margin:10,
   
     borderRadius:10,
     height:200
   },
   equip3:{
    marginTop:30,
    margin:10,
      
    borderRadius:10,
    height:300
  },
  equip4:{
    marginTop:'-14%',
     margin:10,
      
    borderRadius:10,
    height:300
  },
   title:{
    //  marginLeft:10, paddingLeft:10, 
     fontSize:25,  color:"black", flex:0.8, opacity:1

      
   },
   subplanEquip:{
    marginTop:17,  marginLeft:20, 
     fontSize:30,  color:"gold",     textAlign:"center", opacity:1,
    fontWeight:"bold"
  },
  planEquip:{
    marginLeft:10, marginTop:10, marginBottom:10,
    fontSize:30,  color:"gold", opacity:1, textAlign:'left',
   fontWeight:"bold"
  },
   titleEquip:{
     marginTop:60, 
     fontSize:30,  color:"white",     textAlign:"center", opacity:1,
    fontWeight:"bold"
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
    height:150,  //backgroundColor:"#a6a6a6"
   },
   reduceImage2:{
    // opacity:0.7,
     height:200,  //backgroundColor:"#a6a6a6"
    },
 
   reduceImage3:{
    //opacity:0.7,
    height:200, width:290  //backgroundColor:"#a6a6a6"
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
 
 export default Strength;
 