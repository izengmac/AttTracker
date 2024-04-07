import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Information from '../screens/Information';
import GradesScreen from '../screens/GradesScreen';
import SemesterPlanScreen from '../screens/SemesterPlanScreen';
import GroupListScreen from '../screens/GroupListScreen';
import DatesStudentsScreen from '../screens/DatesStudentsScreen';

const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
    barStyle={{ backgroundColor: '#fff' }}
    >
      <Tab.Screen name="Home"         component={HomeScreen} />
      <Tab.Screen name="Profile"      component={ProfileScreen} />
      <Tab.Screen name="Information"  component={Information}/>
      <Tab.Screen name="Grades"       component={GradesScreen}/>
      <Tab.Screen name="Semester"     component={SemesterPlanScreen}/>
      <Tab.Screen name="Groups"       component={GroupListScreen}/>
      
    </Tab.Navigator>
  );
}

export default BottomTab