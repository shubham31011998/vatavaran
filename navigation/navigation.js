import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../screens/Signup.js';
import Welcome from '../screens/Welcome.js';
import Login from '../screens/Login.js';
// import SignUp from '../screens/SignUp';

const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Signup" options={{headerShown: false}} component={Signup} />
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={Welcome} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
        {/* <Stack.Screen name="SignUp" options={{headerShown: false}} component={<Text>Signup</Text>} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}