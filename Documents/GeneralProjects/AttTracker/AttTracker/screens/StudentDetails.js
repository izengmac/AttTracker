import React from 'react';
import {View,Text,Image, TouchableOpacity} from 'react-native'


function StudentDetails() {
  return (
    <View>
        <View style={{
            paddingTop:30,
            paddingHorizontal:16,
            flexDirection:'row',
            justifyContent:'space-between',
            borderRadius:1,
            borderColor:'#D9D9D9',
            borderWidth:2,
            paddingBottom:10
        }}>
            <Text style={{
                fontSize:18,
                fontWeight:'300',
                textAlign:'center'
            }}>Details</Text>
           
        </View>
        <TouchableOpacity style={{
            borderRadius:1,
            borderColor:'#D9D9D9',
            borderTopWidth:0,
            paddingBottom:30

        }}
        
        onPress={() =>
            navigation.navigate('StudentDetails')
          }
        >
           <View 
           style={{
               flexDirection:'row',
               paddingBottom:4,
               justifyContent:'space-between',
               paddingHorizontal:20,
               
               
            }} >
           <Text
           style={{
            fontSize:20,
            fontWeight:'300',
            paddingLeft:2
           }}
           >Name</Text>
           <Text style={{
            fontSize:20,
            fontWeight:'600',
            paddingLeft:2
           }}
           >Anna MIller</Text>
           </View>
        </TouchableOpacity>
        <View style={{
            paddingTop:30,
            paddingHorizontal:16,
            flexDirection:'row',
            justifyContent:'space-between',
            borderRadius:1,
            borderColor:'#D9D9D9',
            borderBottomWidth:2,
            paddingBottom:10
        }}>
            <Text style={{
                fontSize:18,
                fontWeight:'300',
                textAlign:'center'
            }}>Statistics</Text>
           
        </View>
        <TouchableOpacity style={{
            borderRadius:1,
            borderColor:'#D9D9D9',
            borderBottomWidth:2,
            paddingBottom:45

        }}
        
        onPress={() =>
            navigation.navigate('StudentDetails')
          }
        >
           <View 
           style={{
               flexDirection:'row',
               paddingBottom:4,
               justifyContent:'space-between',
               paddingHorizontal:20
               
            }} >
           <Text
           style={{
            fontSize:20,
            fontWeight:'300',
            paddingLeft:2
           }}
           >Attendence</Text>
           <Text style={{
            fontSize:20,
            fontWeight:'600',
            paddingLeft:2,
            textAlign:'center'
           }}
           >15/30</Text>
           </View>
        </TouchableOpacity>

        <View style={{
            paddingTop:30,
            paddingHorizontal:16,
            flexDirection:'row',
            justifyContent:'space-between',
            borderRadius:1,
            borderColor:'#D9D9D9',
            borderBottomWidth:2,
            paddingBottom:10
        }}>
            <Text style={{
                fontSize:18,
                fontWeight:'300',
                textAlign:'center'
            }}>Standards</Text>
           
        </View>
        <TouchableOpacity style={{
            borderRadius:1,
            borderColor:'#D9D9D9',
            borderBottomWidth:2,
            paddingBottom:45

        }}
        
        onPress={() =>
            navigation.navigate('StudentDetails')
          }
        >
           <View 
           style={{
               flexDirection:'row',
               paddingBottom:4,
               justifyContent:'space-between',
               paddingHorizontal:20
               
            }} >
           <Text
           style={{
            fontSize:20,
            fontWeight:'300',
            paddingLeft:2
           }}
           >Average score</Text>
           <Text style={{
            fontSize:20,
            fontWeight:'600',
            paddingLeft:2,
            textAlign:'center'
           }}
           >55%</Text>
           </View>
        </TouchableOpacity>
        
    </View>
  )
}

export default StudentDetails;