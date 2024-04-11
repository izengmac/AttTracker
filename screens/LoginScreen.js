
import React, { useCallback, useReducer, useState } from 'react'
import {View,Text,TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native'
import {reducer} from "../utils/reducers/formReducer"
import { validateInput } from '../utils/actions/formActions';
import Input from "../components/Input";


const isTestMode = true;

const initialState ={
  inputValues:{
    fullName: isTestMode? "John Smith" : "",
    email: isTestMode ?"example@example.com" : "",
    password: isTestMode?"**********": "",
    
  },
  inputValidities:{
    fullName:false,
    email:false,
    password:false,
  },
  formIsValid:false,
}



function LoginScreen() {
  const [formState, dispatchFormState] = useReducer(reducer, initialState)

  const inputChangeHandler = useCallback((inputId, inputValue) => {
    const result = validateInput(inputId, inputValue);
    dispatchFormState({inputId,validationResult:result , inputValue});
    
  },[dispatchFormState])


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
        }}>Log In Now</Text>
        <View>
            <Text style={{
                fontSize:18,
                paddingTop:40,
                marginBottom:4,
                fontWeight:'400'
            }}>Email</Text>
            <Input
             id='email'
             placeholder='Email'
             errorText={formState.inputValidities['email']}
             onInputChanged={inputChangeHandler}
            
            />
        </View>
        <View>
            <Text style={{
                fontSize:18,
                paddingTop:32,
                marginBottom:4,
                fontWeight:'400'
            }}>Password</Text>
            <Input
            id='password'
            placeholder = 'Enter your password'
            errorText={formState.inputValidities['password']}
            onInputChanged={inputChangeHandler}
           
            />
        </View>
        <View style={{
            justifyContent:'center',
            alignItems:'center',
            marginTop:20
        }}>
        <TouchableOpacity
        style={{
            backgroundColor:'#162949',
            width:275,
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
       >Log In</Text>
        </TouchableOpacity>
        </View>
        <Text style={{
                fontSize:18,
                paddingTop:8,
                marginBottom:4,
                fontWeight:'400',
                textAlign:'center'
            }}>Don't have an account? SignUp</Text>
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