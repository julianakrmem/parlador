import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: white;
  padding: 10px;
  border-radius: 20px;
  border-bottom-right-radius: 0px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Date = styled.Text`
  font-size: 15px;
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Post = styled.Text`
  margin-top: 6px;
`;

export const ContainerOptions = styled.View`
  flex-direction: row;
  width: 90px;
  justify-content: space-between;
  align-self: flex-end;
  margin-top: 20px;
`;

export const EditContainer = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
`;

export const DeleteContainer = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
`;

export const TextInput = styled.TextInput.attrs({
  maxLength: 280,
  multiline: true,
})`
  font-size: 16px;
  background-color: #cccccc;
  padding: 10px;
  margin-top: 5px;
`;
