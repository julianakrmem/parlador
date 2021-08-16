import React from 'react';
import {useNavigation} from '@react-navigation/native';
import useAuth from '../../context/auth/authContext';

export const useLogin = () => {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const {navigate} = useNavigation();
  const {signIn} = useAuth();

  function transportToRegisterScreen() {
    navigate('Register' as never);
  }

  function toggleSecureEntry() {
    setSecureTextEntry(value => !value);
  }

  function logIn() {
    signIn(email, senha);
  }

  return {
    toggleSecureEntry,
    secureTextEntry,
    transportToRegisterScreen,
    logIn,
    email,
    setEmail,
    setSenha,
    senha,
  };
};
