import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useAuth from '../context/auth/authContext';

const PrivateStack = createNativeStackNavigator();

export const Private = () => {
  const {signOut} = useAuth();
  return (
    <NavigationContainer>
      <PrivateStack.Navigator>
        <PrivateStack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#6b24b1',
            },
            title: 'Parlador Ideal',
            headerTitleStyle: {fontSize: 18},
            headerTintColor: 'white',
            headerRight: () => (
              <Ionicons
                name="exit-outline"
                color={'white'}
                size={30}
                onPress={signOut}
              />
            ),
          }}
          name="Home"
          component={Home}
        />
      </PrivateStack.Navigator>
    </NavigationContainer>
  );
};
