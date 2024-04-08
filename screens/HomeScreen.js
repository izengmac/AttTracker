import React from 'react';
import {View,Text,Image} from 'react-native';

function HomeScreen() {
  return (
     <View>
        <View style={{
            justifyContent:'center',
            alignItems:'center'
        }}>
        <View style={{
            width:229,
            height:40,
            borderRadius:14,
            backgroundColor:'#0F6579',
            marginTop:110,
            justifyContent:'center',
            alignItems:'center',
            justifyContent:'center',
            
        }}>
            <Text style={{
                fontSize:20,
                fontWeight:'500'
            }}>Hi Alexadrah!</Text>
        </View>
        </View>
        <View style={{
            flexDirection:'row',
            marginTop:35,
            paddingHorizontal:10,
            justifyContent:'space-between'
        }}>
            <View style={{
                width:174,
                height:133,
                backgroundColor:"#0F6579",
                borderRadius:16,
                justifyContent:'center',
                alignItems:'center'
            }}>
              <Image 
              source={require('../src/assets/test.png')}
              style={{
                width:44,
                height:44
              }}
              />
              <Text style={{
                fontSize:16,
                fontWeight:'500'
              }}>Grades</Text>
            </View>
            <View  style={{
                width:174,
                height:133,
                backgroundColor:"#0F6579",
                borderRadius:16,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Image 
              source={require('../src/assets/clipboard-list-check.png')
              }
              style={{
                width:44,
                height:44
              }}
              />
              <Text style={{
                fontSize:16,
                fontWeight:'500'
              }}>List</Text>
            </View>
        </View>
        <View style={{
            flexDirection:'row',
            marginTop:25,
            paddingHorizontal:10,
            justifyContent:'space-between'
        }}>
            <View style={{
                width:174,
                height:133,
                backgroundColor:"#0F6579",
                borderRadius:16,
                justifyContent:'center',
                alignItems:'center'
            }}>
              <Image 
              source={require('../src/assets/info.png')
              }
              style={{
                width:44,
                height:44
              }}
              />
              <Text style={{
                fontSize:16,
                fontWeight:'500'
              }}>Information</Text>
            </View>
            <View  style={{
                width:174,
                height:133,
                backgroundColor:"#0F6579",
                borderRadius:16,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Image 
              source={require('../src/assets/blueprint.png')
              }
              style={{
                width:44,
                height:44
              }}
              />
              <Text style={{
                fontSize:16,
                fontWeight:'500'
              }}>Semester Plan</Text>
            </View>
        </View>
        <View style={{
            flexDirection:'row',
            marginTop:25,
            paddingHorizontal:10,
            justifyContent:'space-between'
        }}>
            <View style={{
                width:174,
                height:133,
                backgroundColor:"#0F6579",
                borderRadius:16,
                justifyContent:'center',
                alignItems:'center'
            }}>
               <Image 
              source={require('../src/assets/users-class.png')
              }
              style={{
                width:44,
                height:44
              }}
              />
              <Text style={{
                fontSize:16,
                fontWeight:'500'
              }}>Students</Text>
            </View>
            
        </View>
     </View>
  )
}

export default HomeScreen