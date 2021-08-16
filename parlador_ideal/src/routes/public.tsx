import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../pages/login';
import Register from '../pages/register';

const PublicStack = createNativeStackNavigator();

export const Public = () => {
  return (
    <NavigationContainer>
      <PublicStack.Navigator screenOptions={{headerShown: false}}>
        <PublicStack.Screen name="Login" component={Login} />
        <PublicStack.Screen name="Register" component={Register} />
      </PublicStack.Navigator>
    </NavigationContainer>
  );
};
