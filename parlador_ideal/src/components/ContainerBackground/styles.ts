import styled from 'styled-components/native';

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
