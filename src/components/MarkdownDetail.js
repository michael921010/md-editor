import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Clipboard from 'react-clipboard.js';
import { getArticle, removeArticle } from '../actions';
import ReactMarkdown from './ReactMarkdown';
import { MdLink, MdModeEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { TiDocument } from "react-icons/ti";

const MarkdownDetail = styled.div`
  display: flex;
  justify-content: center;
`;

const MarkdownDetailArticle = styled.div`
  width: 1000px;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: ${props => props.theme.colors['white']};
`;

const MarkdownDetailArticleDesc = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${props => props.theme.space[1]};
  height: 42px;
  background: #fafbfc;
  border-bottom: 1px solid #ddd;
`;

const MarkdownDetailArticleSubject = styled.h6`
  color: ${props => props.theme.colors['blue']};
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: ${props => props.theme.space[0]};
  margin-right: auto;
`;

const MarkdownDetailArticleClipboard = styled(Clipboard)`
  cursor: pointer;
  width: 16px;
  height: 16px;
  border: 1px solid #aaa;
  border-radius: 2px;
  background: #f1f5f7;
  padding: ${props => props.theme.space[0]};
  margin: 0 ${props => props.theme.space[0]};
  opacity: 0.7;

  &:hover {
    opacity: 1;
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

const MarkdownDetailArticleContent = styled.div`
  padding: ${props => props.theme.space[4]};
  box-sizing: border-box;
`;

export default () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const article = useSelector(state => state.article.selected);

  const redirectEditMarkdownPage = useCallback(() => {
    history.push(`/article/${id}/edit`);
  }, [id, history]);
  const onCopySuccess = useCallback(() => {
    alert('Copyed This Markdown URL Success!');
  }, []);
  const deleteArticle = useCallback(() => {
    dispatch(removeArticle(id));
  }, [id]);

  useEffect(() => {
    dispatch(getArticle(id));
  }, [dispatch, id]);

  console.log(article)
  if (!article) return <div>Loading...</div>;
  return (
    <MarkdownDetail>
      <MarkdownDetailArticle>
        <MarkdownDetailArticleDesc>
          <TiDocument size={25} />
          <MarkdownDetailArticleSubject>
            markdown / <strong>{article.subject}</strong>
          </MarkdownDetailArticleSubject>
          <MarkdownDetailArticleClipboard
            component="div"
            data-clipboard-text={window.location.href}
            onSuccess={onCopySuccess}
          >
            <MdLink size={16} />
          </MarkdownDetailArticleClipboard>
          <MarkdownDetailArticleOperating size={16} onClick={redirectEditMarkdownPage}
          />
          <MarkdownDetailArticleDelete onClick={deleteArticle}/>
        </MarkdownDetailArticleDesc>
        <MarkdownDetailArticleContent>
          <ReactMarkdown source={article.content} />
        </MarkdownDetailArticleContent>
      </MarkdownDetailArticle>
    </MarkdownDetail>
  );
};
