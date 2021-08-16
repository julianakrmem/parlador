import React from 'react';
import {Private} from './private';
import {Public} from './public';
import useAuth from '../context/auth/authContext';

export const Routes = () => {
  const {auth} = useAuth();
  return auth ? <Private /> : <Public />;
};
