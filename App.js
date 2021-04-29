

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './components/Home';
import Screen from './components/Screen';


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home"  screenOptions={{ headerShown: false }}> 
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Add" component={Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;


