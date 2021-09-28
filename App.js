import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/LoginScreen';
import Signup from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import BmiScreen from './screens/BmiScreen';
import DietChart from './screens/DietChart';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Signup' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
       name="HomeScreen" 
       component={HomeScreen} 
       options={
         { title: 'HomeScreen' },
         {headerLeft: null} 
       }
      />
      <Stack.Screen 
       name="BmiScreen" 
       component={BmiScreen} 
       options={
         { title: 'BMI Screen' },
         {headerLeft: null} 
       }
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}