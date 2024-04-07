import React from 'react';
import {View,Text,Image, TouchableOpacity} from 'react-native'


function DatesStudentsScreen ({navigation}) {
  return (
    <View>
        <View style={{
            paddingTop:0,
            paddingHorizontal:16,
            flexDirection:'row',
            justifyContent:'space-between',
            borderRadius:1,
            borderColor:'#D9D9D9',
            borderWidth:1,
           
        }}>
           
        </View>
        <TouchableOpacity 
        style={{
            borderRadius:1,
            borderColor:'#D9D9D9',
            borderBottomWidth:2,
            paddingBottom:2,
            

        }}
        onPress={() =>
            navigation.navigate('StudentList')
          }
        
        >
           <View 
           style={{
               flexDirection:'row',
               paddingTop:10,
               
            }} >
           <Image 
            source={require('../src/assets/users (1).png')}
            style={{
                width:30,
                height:30,
                marginLeft:30
            }}
            />
           <Text style={{
            fontSize:20,
            fontWeight:'600',
            paddingLeft:2
           }}
           >Group 215</Text>
           </View>
           <Text
           style={{
            fontSize:16,
            fontWeight:'400',
            paddingLeft:60
           }}
           >2 times present (40%) last tie at 9/19/24</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
            borderRadius:1,
            borderColor:'#D9D9D9',
            borderBottomWidth:2,
            paddingBottom:10

        }}
        onPress={() =>
            navigation.navigate('StudentList')
          }
        >
           <View 
           style={{
               flexDirection:'row',
               paddingTop:10,
               
            }} >
           <Image 
            source={require('../src/assets/users (1).png')}
            style={{
                width:30,
                height:30,
                marginLeft:30
            }}
            />
           <Text style={{
            fontSize:20,
            fontWeight:'600',
            paddingLeft:2
           }}
           >Group 215</Text>
           </View>
           <Text
           style={{
            fontSize:16,
            fontWeight:'400',
            paddingLeft:60
           }}
           >2 times present (40%) last tie at 9/19/24</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
            borderRadius:1,
            borderColor:'#D9D9D9',
            borderBottomWidth:2,
            paddingBottom:10

        }}
        
        onPress={() =>
            navigation.navigate('StudentList')
          }
        >
           <View 
           style={{
               flexDirection:'row',
               paddingTop:10,
               
            }} >
           <Image 
            source={require('../src/assets/users (1).png')}
            style={{
                width:30,
                height:30,
                marginLeft:30
            }}
            />
           <Text style={{
            fontSize:20,
            fontWeight:'600',
            paddingLeft:2
           }}
           >Group 215</Text>
           </View>
           <Text
           style={{
            fontSize:16,
            fontWeight:'400',
            paddingLeft:60
           }}
           >2 times present (40%) last tie at 9/19/24</Text>
        </TouchableOpacity>
    </View>
  )
}

export default DatesStudentsScreen ;