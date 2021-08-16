import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  flex: 1;
  background-color: #f7f1ff;
`;

export const Title = styled.Text`
  align-self: center;
  margin-top: 8px;
  font-size: 16px;
`;

export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const PostArea = styled.TextInput.attrs({
  multiline: true,
  maxLength: 280,
  placeholder: 'Digite seu post aqui! ^^',
})`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  margin-top: 14px;
  width: 100%;
`;

export const ContainerPostArea = styled.View`
  max-height: 20%;
`;

export const CharactersCount = styled.Text`
  margin-top: 8px;
  font-size: 14px;
  color: #c9c9c9;
`;

export const PostList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 30px;
`;

export const ItemSeparator = styled.View`
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ContainerSend = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const ButtonSend = styled.TouchableOpacity`
  width: 50px;
  height: 30px;
  border-radius: 20px;
  background-color: ${props => (props.disabled ? '#CAAAE9' : '#6b24b1')};
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;
