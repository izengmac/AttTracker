import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Information from "../screens/Information";
import GradesScreen from "../screens/GradesScreen";
import GroupListScreen from "../screens/GroupListScreen";
import { Entypo } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
  const theme = useTheme();
  theme.colors.secondaryContainer = "transperent";
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: "#fff" }}
      activeColor="#0F6579"
      inactiveColor="#000000"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Groups"
        component={GroupListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="users" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Information"
        component={Information}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="info" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Grades"
        component={GradesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="star" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
