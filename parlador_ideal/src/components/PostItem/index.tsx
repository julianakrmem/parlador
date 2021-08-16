import React from 'react';
import * as S from './styles';
import {Post} from '../../models/post';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {usePostItem} from './usePostItem';

interface Props {
  data: Post;
  myId: number;
  onDelete: (id: number) => void;
  onEdit: (id: number, text: string) => void;
}

export const PostItem: React.FC<Props> = ({data, myId, onDelete, onEdit}) => {
  const {toggleEditting, isEditting, setText, text, finishEditting} =
    usePostItem(data, onEdit);

  return (
    <S.Container>
      <S.ContainerInfo>
        <S.Name>{data.user.name}</S.Name>
        <S.Date>{new Date(data.created_at).toLocaleString('pt-Br')}</S.Date>
      </S.ContainerInfo>
      {isEditting ? (
        <S.TextInput value={text} onChangeText={setText} />
      ) : (
        <S.Post>{text}</S.Post>
      )}
      {myId === data.user_id && (
        <S.ContainerOptions>
          <S.EditContainer onPress={toggleEditting}>
            <FontAwesome5 name="edit" color={'#caaae9'} size={20} />
          </S.EditContainer>
          <S.DeleteContainer
            onPress={isEditting ? finishEditting : () => onDelete(data.id)}>
            <FontAwesome5
              name={isEditting ? 'check' : 'trash-alt'}
              color={isEditting ? '#6b24b1' : 'red'}
              size={20}
            />
          </S.DeleteContainer>
        </S.ContainerOptions>
      )}
    </S.Container>
  );
};
