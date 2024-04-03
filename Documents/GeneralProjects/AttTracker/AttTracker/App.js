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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <BottomTab/>
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
