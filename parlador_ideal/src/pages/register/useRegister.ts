import React from 'react';
import {useNavigation} from '@react-navigation/native';

export const useRegister = () => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const {navigate} = useNavigation();

  function toggleSecureEntry() {
    setSecureTextEntry(value => !value);
  }

  function transportToLoginScreen() {
    navigate('Login' as never);
  }

  return {
    toggleSecureEntry,
    secureTextEntry,
    transportToLoginScreen,
  };
};
