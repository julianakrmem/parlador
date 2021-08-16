import React from 'react';
import {Alert} from 'react-native';
import {service} from '../../service';
import Async from '@react-native-async-storage/async-storage';

type Profile = {
  name: String;
  email: String;
  id: String;
};

type ContextProps = {
  auth: boolean;
  signIn: (email: string, senha: string) => void;
  signOut: () => void;
  profile: Profile;
};

const AuthProvider = React.createContext({} as ContextProps);

export const AuthContext: React.FC = ({children}) => {
  const [auth, setAuth] = React.useState(false);
  const [profile, setProfile] = React.useState({} as Profile);

  const getCurrentUser = React.useCallback(async () => {
    let token = await Async.getItem('token');
    if (token) {
      getUser();
    }
  }, []);

  React.useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  function signIn(email: string, senha: string) {
    service
      .post('/login', {
        email,
        password: senha,
      })
      .then(async resp => {
        await Async.setItem('token', resp.data.token);
        getUser();
      })
      .catch(er => {
        console.log(er);
        Alert.alert(
          'Erro ao logar',
          'Ocorreu um erro ao logar, verifique os dados e tente novamente',
        );
      });
  }

  function getUser() {
    service
      .get('user')
      .then(resp => {
        console.log(resp.data);
        setProfile(resp.data);
        setAuth(true);
      })
      .catch(er => {
        console.log(er);
        Alert.alert(
          'Erro ao encontrar usuário',
          'Infelizmente não encontramos seu usuário',
        );
      });
  }

  async function signOut() {
    await Async.removeItem('token');
    setAuth(false);
  }

  return (
    <AuthProvider.Provider
      value={{
        auth,
        signIn,
        signOut,
        profile,
      }}>
      {children}
    </AuthProvider.Provider>
  );
};

export default function useAuth() {
  return React.useContext(AuthProvider);
}
