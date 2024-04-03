import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import ForgotpasswordScreen from './screens/ForgotpasswordScreen';
import RegisterScreen from './screens/RegisterScreen';
import PasswordConfirmScreen from './screens/PasswordConfirmScreen';


export default function App() {
  return (
      <PasswordConfirmScreen/>
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
