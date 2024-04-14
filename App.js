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
import SignupScreen from './screens/SignupScreen';
import {Provider} from 'react-redux';
import {store} from './store/store';
import SemesterPlanScreen from './screens/SemesterPlanScreen';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
     <Provider store={store}>
    <NavigationContainer>
     <Stack.Navigator>
     <Stack.Screen 
     name="SignUpScreen"     
     component={SignupScreen}
      options={{ headerShown: false }}
     
     >
     </Stack.Screen>
     <Stack.Screen 
     name="LoginScreen"     
     component={LoginScreen}
      options={{ headerShown: false }}
     
     >
     </Stack.Screen>

     <Stack.Screen
         name="Home"
         component={BottomTab}
         options={{ headerShown: false }}
        />
         <Stack.Screen
         name="StudentList"
         component={StudentListScreen}
         options={{ headerShown: true }}
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
     <Stack.Screen 
     name="Semester"     
     component={SemesterPlanScreen}>
      
     </Stack.Screen>
     <Stack.Screen 
     name="RegisterScreen"     
     component={RegisterScreen}>
      
     </Stack.Screen>
      </NavigationContainer>
      </Provider>
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
