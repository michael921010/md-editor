import React, { useEffect, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MarkdownForm from './MarkdownForm';
import { editArticle } from '../actions';

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const article = useSelector(state => state.article.selected);

  const onSubmit = useCallback(
    markdown => {
      return dispatch(editArticle(id, markdown));
    },
    [dispatch, id]
  );
  useEffect(() => {
    if (id && !article) history.replace(`/article/${id}`);
  }, [history, id, article]);

  return <MarkdownForm {...article} onSubmit={onSubmit} />;
};
