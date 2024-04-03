import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Information from '../screens/Information';

const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
    barStyle={{ backgroundColor: '#fff' }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Information" component={Information}/>
    </Tab.Navigator>
  );
}

export default BottomTab