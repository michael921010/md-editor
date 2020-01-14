import React, { memo, useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ReactMarkdown from './ReactMarkdown';
import { AiOutlineDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { removeArticle } from '../actions';
import Avatar from './Avatar';

const MarkdownListItem = styled.div`
  width: 800px;
  margin-bottom: ${props => props.theme.space[4]};
  padding: ${props => props.theme.space[4]};
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: ${props => props.theme.colors.white};
`;

const MarkdownDesc = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.space[1]};
`;

const MarkdownDescTitle = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: ${props => props.theme.space[1]};
`;

const MarkdownSubject = styled.h6`
  color: ${props => props.theme.colors['blue']};
  font-size: 20px;
  margin-top: 0;
  margin-bottom: ${props => props.theme.space[0]};
  margin-left: ${props => props.theme.space[0]};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const MarkdownDetailArticleOperating = styled(MdModeEdit)`
  cursor: pointer;
  border: 1px solid #aaa;
  border-radius: 2px;
  padding: ${props => props.theme.space[0]};
  background: #f1f5f7;
  margin-left: ${props => props.theme.space[0]};

  &:hover {
    opacity: 0.7;
  }
`;

const MarkdownDetailArticleDelete = styled(AiOutlineDelete)`
  cursor: pointer;
  border: 1px solid #aaa;
  border-radius: 2px;
  padding: ${props => props.theme.space[0]};
  background: #f1f5f7;
  margin-left: ${props => props.theme.space[0]};

  &:hover {
    opacity: 0.7;
  }
`;

const MarkdownContent = styled.article`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 2px;
  max-height: 300px;
  overflow-y: scroll;
  cursor: pointer;
  padding: ${props => props.theme.space[4]} ${props => props.theme.space[4]} 0;

  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 255, 0.6), 0 2px 3px rgba(0, 0, 255, 0.3);
  }
`;

export default memo(({ id, subject, content }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const redirectMarkdownPage = useCallback(() => {
    history.push(`/article/${id}`);
  }, [history, id]);
  const deleteArticle = useCallback(() => {
    dispatch(removeArticle(id, true));
  }, [id]);

  return (
    <MarkdownListItem>
      <MarkdownDesc>
        <MarkdownDescTitle>
          <Avatar />
          <MarkdownSubject onClick={redirectMarkdownPage}>
            <strong>{subject}</strong>
          </MarkdownSubject>
        </MarkdownDescTitle>

        <MarkdownDescTitle>
          <MarkdownDetailArticleDelete onClick={deleteArticle} />
        </MarkdownDescTitle>
      </MarkdownDesc>

      <MarkdownContent onClick={redirectMarkdownPage}>
        <ReactMarkdown source={content} />
      </MarkdownContent>
    </MarkdownListItem>
  );
});
