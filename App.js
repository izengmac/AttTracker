import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import ForgotpasswordScreen from './screens/ForgotpasswordScreen';
import RegisterScreen from './screens/RegisterScreen';
import PasswordConfirmScreen from './screens/PasswordConfirmScreen';
import HomeScreen from './screens/HomeScreen'
import BottomTab from './routes/BottomTab';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import StudentListScreen from './screens/StudentListScreen';
import StudentDetails from './screens/StudentDetails';
import DatesStudentsScreen from './screens/DatesStudentsScreen';
import DatesListScreen from './screens/DatesList';
import DateDetails from './screens/DateDetails'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
     <Stack.Navigator>
     <Stack.Screen
         name="Home"
         component={BottomTab}
         options={{ headerShown: false }}
        />
         <Stack.Screen
         name="StudentList"
         component={StudentListScreen}
         options={{ headerShown: false }}
        />
        <Stack.Screen
         name="StudentDetails"
         component={StudentDetails}
         
        />
         <Stack.Screen
         name="DatesStudents"
         component={DatesStudentsScreen}
         
        />
         <Stack.Screen
         name="DatesList"
         component={DatesListScreen}
         
        />
        <Stack.Screen
         name="DateDetails"
         component={DateDetails}
         
        />
     </Stack.Navigator>
      </NavigationContainer>
  )
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
