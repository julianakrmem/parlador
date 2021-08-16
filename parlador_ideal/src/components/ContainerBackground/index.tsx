import React from 'react';
import * as S from './styles';
import {SafeAreaView} from 'react-native';

export const ContainerBackground: React.FC = ({children}) => {
  return (
    <S.Background>
      <SafeAreaView>
        <S.Container>{children}</S.Container>
      </SafeAreaView>
    </S.Background>
  );
};
