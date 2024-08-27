import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen.js';
import HistoryScreen from './screens/HistoryScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen 
          name="History" 
          component={HistoryScreen} 
          options={{ 
            headerBackTitleStyle: { color: '#fff' },
            headerTintColor: '#fff',
            headerShown: true, 
            headerStyle: {
              backgroundColor: '#ff9f0a',
            }, 
            headerTitleStyle: {
              color: '#fff'
            },
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
