import React from 'react';
import * as S from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useLogin} from './useLogin';
import {ContainerBackground} from '../../components/ContainerBackground';

const Login = () => {
  const {
    secureTextEntry,
    toggleSecureEntry,
    transportToRegisterScreen,
    email,
    senha,
    setEmail,
    setSenha,
    logIn,
  } = useLogin();

  return (
    <ContainerBackground>
      <S.Title>Login</S.Title>
      <S.FormContainer>
        <S.Label>Endereço de E-mail</S.Label>
        <S.TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email:"
          keyboardType={'email-address'}
        />
        <S.Label>Senha</S.Label>
        <S.TextInput
          placeholder="Senha:"
          value={senha}
          onChangeText={setSenha}
          rightIcon={
            <Icon
              name={secureTextEntry ? 'eye-slash' : 'eye'}
              size={24}
              color="#CEB1EB"
              onPress={toggleSecureEntry}
            />
          }
          secureTextEntry={secureTextEntry}
        />
        <S.Button onPress={logIn}>
          <S.ButtonText>Login</S.ButtonText>
        </S.Button>
      </S.FormContainer>
      <S.ContainerRegister>
        <S.TextInfo>Não possui uma conta?</S.TextInfo>
        <S.TextInfo button onPress={transportToRegisterScreen}>
          Cadastre-se aqui.
        </S.TextInfo>
      </S.ContainerRegister>
    </ContainerBackground>
  );
};

export default Login;
