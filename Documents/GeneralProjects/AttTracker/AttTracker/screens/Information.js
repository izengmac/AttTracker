import React from 'react';
import {View, Text,Image} from 'react-native'

function Information() {
  return (
    <View style={{
        justifyContent:'center',
        alignItems:'center'
    }}>
        <View style={{
            width:364,
            height:78,
            flexDirection:'row',
            marginTop:140,
            backgroundColor:'#0F6579',
            borderRadius:16,
            alignItems:'center',
            justifyContent:'center'
        }}>
             <Image 
              source={require('../src/assets/test.png')}
              style={{
                width:44,
                height:44
              }}
              />
            <Text style={{
                fontSize:20,
                fontWeight:'600',
                marginLeft:12
            }}>How to stay health</Text>
        </View>
        <View style={{
              width:364,
              height:112,
              backgroundColor:'#7899EA',
              borderRadius:18,
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center',
              marginTop:310
              
              
        }}>
        <Image 
              source={require('../src/assets/upload.png')}
              style={{
                width:44,
                height:44
              }}
              />
            <Text style={{
                fontSize:20,
                fontWeight:'600',
                color:'white',
                paddingTop:4
                
               
            }}>Upload file</Text>
        </View>
    </View>
  )
}

export default Information