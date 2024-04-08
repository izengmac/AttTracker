import React from 'react'
import {View, Text, Image} from "react-native"

function PasswordConfirmScreen() {
  return (
    <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       
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
       source={require('../src/assets/padlock (1).png')
       
       }
       style={{
        width:72,
        height:72,
       }}
       />
      </View>
      <Text style={{
        fontSize:24,
        fontWeight:'600',
        paddingTop:22,
        textAlign:'center'
      }}>Password Changed</Text>
      <Text style={{
        fontSize:16,
        fontWeight:'400',
        paddingTop:10,
        width:345,
        textAlign:'center'
      }}>You have succesfully chnaged your password
Proceed to login into your account</Text>
      <View style={{
        justifyContent:"center",
        alignItems:'center'

      }}>
      <View
        style={{
            backgroundColor:'#162949',
            width:215,
            height:48,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:24,
            marginTop:24
        }}
      >
       <Text
       style={{
        color:'white',
        fontSize:20,
        fontWeight:'500'
       }}
       >Log in</Text>
        </View>
      </View>
    </View>
  )
}

export default PasswordConfirmScreen;