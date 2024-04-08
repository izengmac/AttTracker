
import React from 'react'
import {View,Text,TextInput, Button, StyleSheet} from 'react-native'




function LoginScreen() {
  return (
    <View style={{
        flex:1,
        paddingVertical:160,
        paddingHorizontal:10
     
    }}>
        <Text style={{
            fontSize:32,
            fontWeight:'700',
            
        }}>Welcome Back</Text>
        <Text style={{
            fontSize:20,
            paddingTop:10,
            fontWeight:'400'
        }}>Sign in Now</Text>
        <View>
            <Text style={{
                fontSize:18,
                paddingTop:40,
                marginBottom:4,
                fontWeight:'400'
            }}>User Name</Text>
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
            alignItems:'center',
            marginTop:20
        }}>
        <View
        style={{
            backgroundColor:'#162949',
            width:215,
            height:52,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:24
        }}
      >
       <Text
       style={{
        color:'white',
        fontSize:20,
        fontWeight:'500'
       }}
       >Sign In</Text>
        </View>
        </View>
        <Text style={{
                fontSize:18,
                paddingTop:8,
                marginBottom:4,
                fontWeight:'400',
                textAlign:'center'
            }}>Forget Password?</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    },
    buttonContainer: {
      width: 215,
      height: 52,
      borderRadius: 24,
      overflow: 'hidden', // Ensure borderRadius is applied correctly
    },
  });

export default LoginScreen