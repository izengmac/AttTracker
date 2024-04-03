import React from 'react'
import {View, Text, Image} from "react-native"

function OnboardingScreen() {
  return (
    <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0F6579'
    }}>
      <View style={{
        
        width:125,
        height:125,
        borderRadius:100,
        backgroundColor:'#162949',
        justifyContent:'center',
        alignItems:'center'
        
      }}>
      <Image
       source={require('../src/assets/graduate.png')
       
       }
       style={{
        width:72,
        height:72,
       }}
       />
      </View>
    </View>
  )
}

export default OnboardingScreen