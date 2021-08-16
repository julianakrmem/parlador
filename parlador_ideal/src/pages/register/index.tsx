import React from 'react';
import * as S from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useRegister} from './useRegister';
import {ContainerBackground} from '../../components/ContainerBackground';

const Register = () => {
  const {secureTextEntry, toggleSecureEntry, transportToLoginScreen} =
    useRegister();

  return (
    <ContainerBackground>
      <S.Title>Criar Conta</S.Title>
      <S.FormContainer>
        <S.Label>Nome</S.Label>
        <S.TextInput placeholder="Nome:" />
        <S.Label>Endereço de E-mail</S.Label>
        <S.TextInput placeholder="Email:" keyboardType={'email-address'} />
        <S.Label>Senha</S.Label>
        <S.TextInput
          placeholder="Senha:"
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
        <S.Button>
          <S.ButtonText>Criar Conta</S.ButtonText>
        </S.Button>
      </S.FormContainer>
      <S.ContainerRegister>
        <S.TextInfo>Já possui uma conta?</S.TextInfo>
        <S.TextInfo button onPress={transportToLoginScreen}>
          Entre aqui.
        </S.TextInfo>
      </S.ContainerRegister>
    </ContainerBackground>
  );
};

export default Register;
