import React from 'react';
import * as S from './styles';
import {useHome} from './useHome';
import {PostItem} from '../../components/PostItem';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
  const {
    postText,
    setPostText,
    profile,
    posts,
    sendNewPost,
    deletePost,
    editPost,
  } = useHome();
  return (
    <S.Container>
      <S.Name>{profile.name}</S.Name>
      <S.Title>No que está pensando?</S.Title>
      <S.ContainerPostArea>
        <S.PostArea value={postText} onChangeText={setPostText} />
        <S.ContainerSend>
          <S.CharactersCount>( {postText.length} / 280 )</S.CharactersCount>
          <S.ButtonSend onPress={sendNewPost} disabled={postText.length === 0}>
            <Ionicons name="send" color="white" size={15} />
          </S.ButtonSend>
        </S.ContainerSend>
      </S.ContainerPostArea>
      <S.PostList
        data={posts}
        ItemSeparatorComponent={() => <S.ItemSeparator />}
        renderItem={({item}) => (
          <PostItem
            data={item}
            myId={profile.id}
            onDelete={deletePost}
            onEdit={editPost}
          />
        )}
        keyExtractor={(item, index) => String(index)}
      />
    </S.Container>
  );
};

export default Home;
