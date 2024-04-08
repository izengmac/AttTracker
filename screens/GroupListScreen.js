import React from 'react';
import {View,Text,Image, TouchableOpacity} from 'react-native'


function GroupListScreen({navigation}) {
  return (
    <View>
        <View style={{
            paddingTop:80,
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
                fontWeight:'600',
                textAlign:'center'
            }}>Groups</Text>
            <View style={{
                flexDirection:'row'
            }}>
            <Image 
            source={require('../src/assets/user-add.png')}
            style={{
                width:30,
                height:30
            }}
            />
            <Image 
            source={require('../src/assets/menu-dots-vertical.png')}
            style={{
                width:30,
                height:30,
                marginLeft:30
            }}
            />
            </View>
        </View>
        <TouchableOpacity 
        style={{
            borderRadius:1,
            borderColor:'#D9D9D9',
            borderBottomWidth:2,
            paddingBottom:10,
            

        }}
        onPress={() =>
            navigation.navigate('DatesStudents')
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
            navigation.navigate('DatesStudents')
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
            navigation.navigate('DatesStudents')
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

export default GroupListScreen;