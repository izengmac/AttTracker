import React from 'react';
import {View,Text,Image} from "react-native";

function ProfileScreen() {
  return (
   <View style={{
    paddingHorizontal:20
   }}>
   <View style={{
    justifyContent:'center',
    alignItems:'center'
   }}>
   <Image 
    source={require('../src/assets/userimge.png')}
    style={{
        width:125,
        height:125,
        borderRadius:100,
        marginTop:120
    }}
    />
   </View>
   <View style={{
    paddingVertical:8,
    borderColor:'#D9D9D9',
    borderBottomWidth:1,
    
   }}>
    <Text style={{
        paddingTop:16,
        fontWeight:'400'
    }}
    >YOUR EMAIL</Text>
    <Text  style={{
        paddingTop:10,
        fontWeight:'600'
    }}
    >Alexandrah@gmail.com</Text>
   </View>
   <View style={{
    paddingVertical:8,
    borderColor:'#D9D9D9',
    borderBottomWidth:1,
    
   }}>
    <Text style={{
        paddingTop:24,
        fontWeight:'400'
    }}
    >YOUR PASSWORD</Text>
    <Text  style={{
        paddingTop:10,
        fontWeight:'600'
    }}
    >Alexandrah1278</Text>
   </View>
   <View style={{
    paddingVertical:8,
    borderColor:'#D9D9D9',
    borderBottomWidth:1,
    
   }}>
    <Text style={{
        paddingTop:24,
        fontWeight:'400'
    }}
    >DEPARTMENT</Text>
    <Text  style={{
        paddingTop:10,
        fontWeight:'600'
    }}
    >101</Text>
   </View>
   <View style={{
    paddingVertical:8,
    borderColor:'#D9D9D9',
    borderBottomWidth:1,
    
   }}>
    <Text style={{
        paddingTop:24,
        fontWeight:'400'
    }}
    >UNIVERSITY</Text>
    <Text  style={{
        paddingTop:10,
        fontWeight:'600'
    }}
    >MAI</Text>
   </View>
   </View>
  )
}

export default ProfileScreen