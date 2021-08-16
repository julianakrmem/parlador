import React from 'react';
import {Routes} from './src/routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthContext} from './src/context/auth/authContext';

export default function () {
  return (
    <SafeAreaProvider>
      <AuthContext>
        <Routes />
      </AuthContext>
    </SafeAreaProvider>
  );
}
