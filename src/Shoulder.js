// import React from 'react';
// import type {Node} from 'react';
// import {
//     StyleSheet,
//     Text,
//     View,
//     TextInput, Image,
//     Button,
//     TouchableOpacity, ImageBackground,
//     StatusBar,
//   } from 'react-native';
//   import { NavigationContainer } from '@react-navigation/native';
//   import { createNativeStackNavigator } from '@react-navigation/native-stack';

//   const Menu =()=>{
    
//    return(
//         <View >
//             <Text>oko</Text>
//             <Image style={styles.reduceImage} source={require("C:/Users/Arsal/ProThenics_Nofal/Pro.png")}/>  

//         </View>
//    );
   
    
//   };

//   const styles=StyleSheet.create({
//     whole:{
//        fontSize:20
//     },
//     reduceImage:{
//         opacity:0.6, flex:0.2,
//         height:100, borderRadius:20, backgroundColor:"#a6a6a6"
//        }
//   })

//   export default Menu;
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//  import React from 'react';
//  import type {Node} from 'react';
//  import {
//    SafeAreaView,
//    Image,ImageBackground,
//    ScrollView,
//    StatusBar,
//    StyleSheet,
//    Text,
//    useColorScheme,
//    TouchableOpacity, Button,
//    View,
//  } from 'react-native';

//  import { NavigationContainer } from '@react-navigation/native';
//  import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
//  // const Stack=createNativeStackNavigator();
//  const Menu= () => {
  
 
//    return (
//      //<NavigationContainer>
//      <View style={styles.mainView}>
//         <Image style={styles.titleImage} source={require("C:/Users/Arsal/ProThenics_Nofal/Pro.png")}/>
//       </View>
//     {/* <TouchableOpacity style={styles.titleImage}> 
          
//          <ImageBackground   style={styles.workoutPlan} source={require("C:/Users/Arsal/ProThenics_Nofal/plan.jpg")}>  
           
//            <Text style={styles.titleEquip}>Workout Plan</Text> 
            
//        </ImageBackground>
           
//      </TouchableOpacity> */}
//      <View >
//       <TouchableOpacity style={styles.opt1}> 
          
//           <ImageBackground   style={styles.reduceImage2} source={require("C:/Users/Arsal/ProThenics_Nofal/rope.jpg")}>  
            
//             <Text style={styles.titleEquip}>Rope</Text> 
             
//         </ImageBackground>
            
//       </TouchableOpacity>
//     </View>
//    );
//  };
 
//  const styles = StyleSheet.create({
  
//    opt1:{
     
//         marginTop:20,
//         margin:10,
      
//         borderRadius:10,
//         height:200
     
//    },
//    workout:{
//     borderRadius:20, height:200, flex:0.3, width:350,
//    },
//    workoutPlan:{
//     opacity:0.7, borderRadius:50, borderWidth:20
//    },
//    mainView:{
//      backgroundColor:"#a6a6a6", height:"100%",
//    },
   
//    titleImage:{
//      width:310,
//     flex:0.3 , backgroundColor:"#a6a6a6", marginLeft:"8%"
//    },
//    titleEquip:{
//     marginTop:20, 
//     fontSize:25,  color:"black",     textAlign:"center", opacity:1,
//    fontWeight:"bold"
//   },
//   reduceImage2:{
//     opacity:0.6,
//     height:300, borderRadius:20, backgroundColor:"#a6a6a6"
//    },
//  });
 
//  export default Menu;
 
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
 const Shoulder= ({navigation}) => {
  
 
   return (
     //<NavigationContainer>
     
     <ScrollView style={styles.mainView}>
   
       {/* <View styles={styles.title}> */}
       {/* <View style={styles.Banner}>
       
          </View> */}
          
            <TouchableOpacity style={{height:200, paddingLeft:35,  borderColor:"#a6a6a6", borderWidth:2, marginLeft:"-20%", marginRight:"-2%", marginTop:'-4%'}}>
           <Text style={styles.titleEquip }>Pike Pushups</Text> 
           <Text style={styles.subTitle}>Intermediate</Text> 
          
            </TouchableOpacity>
            <TouchableOpacity style={{height:200, paddingLeft:35,  borderColor:"#a6a6a6", borderWidth:2, marginLeft:"-20%", marginRight:"-2%", marginTop:0}}>

          
            
           <Text style={styles.titleEquip}>Handstand pushup</Text> 
           <Text style={styles.subTitleAdvanced}>Advanced</Text> 

            
     </TouchableOpacity>

     <TouchableOpacity style={{height:200, paddingLeft:35,  borderColor:"#a6a6a6", borderWidth:2, marginLeft:"-20%", marginRight:"-2%", marginTop:0}}>
          
            
           <Text style={styles.titleEquip}>Dips</Text> 
           <Text style={styles.subTitleBeginner}>Beginner</Text> 

            
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
    subTitle:{
        marginTop:30, marginLeft:"13%",
        fontSize:30,  color:"goldenrod",     textAlign:"left", opacity:1,
       fontWeight:"bold", 
       fontFamily:'Lobster-Regular'
    },
    subTitleAdvanced:{
        marginTop:30, marginLeft:"13%",
        fontSize:30,  color:"crimson",     textAlign:"left", opacity:1,
       fontWeight:"bold", 
       fontFamily:'RussoOne-Regular'
    },
    subTitleBeginner:{
        marginTop:30, marginLeft:"13%",
        fontSize:30,  color:"aqua",     textAlign:"left", opacity:1,
       fontWeight:"bold", 
       fontFamily:'RussoOne-Regular'
    },
   Banner:{
    flexDirection:"row", paddingTop:10
   },
   icon:{
 flex:0.2, height:65, 
   },
   mainView:{
     backgroundColor:"#3d3015", height:800,
   },
    
   equipGreen:{
     marginTop:20,
     margin:5, marginRight:2,
    backgroundColor:'green',
     borderRadius:30, textAlign:'center',
     height:70,
   },
   equipGold:{
    marginTop:20,
    margin:5, marginRight:2,
   backgroundColor:'gold',
    borderRadius:30, textAlign:'center',
    height:70,
  },
  equipRed:{
    marginTop:20,
    margin:5, marginRight:2,
   backgroundColor:'red',
    borderRadius:30, textAlign:'center',
    height:70,
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
    margin:8, 
     fontSize:15,  color:"white",     textAlign:"center", opacity:1,
    fontWeight:"bold", 
   } ,
  
  planEquip:{
    marginLeft:10,
    fontSize:30,  color:"white", opacity:1,
   fontWeight:"bold",
  },
   titleEquip:{
     marginTop:30, marginLeft:"13%",
     fontSize:30,  color:"white",     textAlign:"left", opacity:1,
    fontWeight:'bold',


    },
   titleEquip3:{
    marginTop:50, 
    fontSize:30,  color:"white",     textAlign:"left", opacity:1,
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
 
 export default Shoulder;
 