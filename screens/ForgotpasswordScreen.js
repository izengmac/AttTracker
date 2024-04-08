import React from 'react';
import {View,Text,text,TextInput} from 'react-native'


function ForgotpasswordScreen() {
  return (
    <View style={{
        justifyContent:'center',
        paddingHorizontal:10,
        paddingVertical:225
    }}>
        <Text style={
            {
                fontSize:24,
                fontWeight:'500',
                
            }
        }>Forgot Password</Text>
        <Text   style={
            {
                fontSize:16,
                fontWeight:'300',
                width:345,
                paddingTop:6
            }}>If you need help to reset your assement, we can help you by sending a link to reset it</Text>
    
    <View>
            <Text style={{
                fontSize:18,
                paddingTop:32,
                marginBottom:4,
                fontWeight:'400'
            }}>Password</Text>
            <TextInput
            style={{
                borderColor:'#D9D9D9',
                borderWidth:1,
                borderRadius:20,
                width:351,
                height:48,
                
            }}
            
            />
        </View>
        <View style={{
            justifyContent:'center',
            alignItems:'center'
        }}>
        <View
        style={{
           
            backgroundColor:'#162949',
            width:215,
            height:52,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:24,
            marginTop:20
        }}
      >
       <Text
       style={{
        color:'white',
        fontSize:20,
        fontWeight:'500'
       }}
       >Send</Text>
        </View>
        </View>
    </View>
  )
}

export default ForgotpasswordScreen