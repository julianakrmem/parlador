import React from 'react';
import {Post} from '../../models/post';

export const usePostItem = (data: Post, onEdit) => {
  const [isEditting, setIsEditting] = React.useState(false);
  const [text, setText] = React.useState(data.content);

  const toggleEditting = React.useCallback(() => {
    setIsEditting(value => !value);
  }, []);

  const finishEditting = React.useCallback(() => {
    onEdit(data.id, text);
    setIsEditting(false);
  }, [text]);

  return {
    toggleEditting,
    isEditting,
    text,
    setText,
    finishEditting,
  };
};
