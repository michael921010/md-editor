import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getAllArticles } from '../actions'
import Markdown from './Markdown';

const MarkdownList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
    const articles = useSelector(state => state.article.all);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllArticles());
    }, [dispatch]);
console.log(articles)
    return (
        <MarkdownList>
            {articles.map(article => (
                <Markdown key={article.id} {...article} />
            ))}
        </MarkdownList>
    );
};

export default Home;
