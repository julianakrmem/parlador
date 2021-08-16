import styled, {css} from 'styled-components/native';
import {Input} from 'react-native-elements';

type TextInfoProps = {
  button?: boolean;
};

export const Background = styled.ImageBackground.attrs({
  source: require('../../assets/background.jpeg'),
  resizeMode: 'stretch',
})`
  width: 100%;
  height: 100%;
`;

export const Container = styled.View`
  height: 100%;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-size: 28px;
  margin-left: 30px;
`;

export const TextInput = styled(Input).attrs({
  autoCapitalize: 'none',
  inputContainerStyle: {
    borderBottomColor: '#CAAAE9',
    borderBottomWidth: 2,
  },
})``;

export const Button = styled.TouchableOpacity`
  background-color: #6b24b1;
  width: 95%;
  align-self: center;
  padding: 12px;
  align-items: center;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: bold;
`;

export const Label = styled.Text`
  font-size: 14px;
  margin-left: 10px;
`;

export const FormContainer = styled.View`
  align-self: center;
  width: 90%;
`;

export const ContainerRegister = styled.View`
  align-self: center;
  width: 60%;
`;

export const TextInfo = styled.Text<TextInfoProps>`
  text-align: center;
  ${props => {
    if (props.button) {
      return css`
        color: #6b24b1;
        padding: 8px;
        margin-top: 5px;
        font-weight: bold;
      `;
    }
  }}
`;
