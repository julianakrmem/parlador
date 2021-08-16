import React from 'react';
import useAuth from '../../context/auth/authContext';
import {service} from '../../service/';
import {Post} from '../../models/post';

export const useHome = () => {
  const {profile} = useAuth();
  const [postText, setPostText] = React.useState('');
  const [posts, setPosts] = React.useState<Post[]>([]);

  const getAllPosts = React.useCallback(() => {
    service
      .get('/posts')
      .then(resp => {
        setPosts(resp.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const sendNewPost = React.useCallback(() => {
    service
      .post('post', {
        content: postText,
      })
      .then(resp => {
        console.log(resp);
        setPostText('');
        getAllPosts();
      })
      .catch(err => {
        console.log(err);
      });
  }, [postText, getAllPosts]);

  const deletePost = React.useCallback(
    (id: number) => {
      service
        .delete('post', {
          data: {
            id,
          },
        })
        .then(() => {
          getAllPosts();
        })
        .catch(err => {
          console.log(err);
        });
    },
    [getAllPosts],
  );

  const editPost = React.useCallback(
    (id: number, text: string) => {
      service
        .patch('/post', {
          id,
          content: text,
        })
        .then(resp => {
          console.log(resp.data);
          getAllPosts();
        })
        .catch(err => {
          console.log(err);
        });
    },
    [getAllPosts],
  );

  React.useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return {
    posts,
    profile,
    editPost,
    postText,
    deletePost,
    sendNewPost,
    setPostText,
  };
};
