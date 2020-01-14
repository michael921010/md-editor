import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { createArticle } from '../actions';
import MarkdownForm from './MarkdownForm';

export default React.memo(() => {
    const dispatch = useDispatch();
    const onSubmit = useCallback(
        markdown => {
            return dispatch(createArticle(markdown));
        },
        [dispatch]
    );

    return <MarkdownForm onSubmit={onSubmit} />;
});
