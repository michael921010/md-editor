import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { MdCode, MdSave } from "react-icons/md";
import CodeMirror from './CodeMirror';
import ReactMarkdown from './ReactMarkdown';

const MarkdownForm = styled.div`
  display: flex;
  justify-content: center;
`;

const MarkdownDetailArticle = styled.div`
  width: 100vw;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: ${props => props.theme.colors.white};
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
  color: ${props => props.theme.colors.blue};
  margin-top: 0;
  margin-bottom: 0;
  margin-left: ${props => props.theme.space[0]};
  margin-right: auto;
`;

const MarkdownFormItemInput = styled.input`
  width: 200px;
  border: 1px solid #ddd;
  margin-left: ${props => props.theme.space[0]};
  padding: ${props => props.theme.space[0]} ${props => props.theme.space[0]};
  border-radius: 2px;

  &::placeholder {
    color: #bbbbbb;
  }

  &:focus {
    outline: none;
  }
`;

const MarkdownDetailArticleContainer = styled.div`
  padding: ${props => props.theme.space[4]};
  display: flex;
  flex-direction: row;
`;

const MarkdownDetailArticleContent = styled.div`
  padding: ${props => props.theme.space[4]};
  width: 50%;
  height: 70vh;
  overflow-y: scroll;
  box-sizing: border-box;
  border-left: 1.5px solid #80808059;
`;

const MarkdownDetailArticleSave = styled(MdSave)`
    cursor: pointer;
    border: 1px solid #aaa;
    border-radius: 2px;
    padding: ${props => props.theme.space[0]};
    background: #f1f5f7;

    &:hover {
    opacity: 0.7;
    }

    &:nth-child(3) {
    margin-right: ${props => props.theme.space[0]};
    }

    &:nth-child(4) {
    margin-left: ${props => props.theme.space[0]};
    }
`;

export default props => {
  const [subject, setSubject] = useState(props.subject || '');
  const [content, setContent] = useState(props.content || '');

  const updateSubject = useCallback((e) => {
    setSubject(e.target.value);
  }, []);
  const updateContent = useCallback(code => {
    setContent(code);
  }, []);
  const onSubmit = useCallback(() => {
    const markdown = { subject, content };
    if (!subject || !content) return alert('Invalid markdown format');
    props.onSubmit(markdown);
  }, [subject, content]);
  const onKeyDown = useCallback((evt) => {
    if (evt.ctrlKey && evt.keyCode === 83) {
      evt.preventDefault();
      onSubmit();
    }
  }, [subject, content]);


  return (
    <MarkdownForm>
      <MarkdownDetailArticle>
        <MarkdownDetailArticleDesc>
          <MdCode width={14} />
          <MarkdownDetailArticleSubject>
            markdown /
            <MarkdownFormItemInput
              value={subject}
              onChange={updateSubject}
              placeholder="subject"
            />
          </MarkdownDetailArticleSubject>
          <MarkdownDetailArticleSave
            width={16}
            onClick={onSubmit}
          />
        </MarkdownDetailArticleDesc>
        <MarkdownDetailArticleContainer onKeyDown={onKeyDown}>
          <CodeMirror value={content} onChange={updateContent} />
          <MarkdownDetailArticleContent>
            <ReactMarkdown source={content} />
          </MarkdownDetailArticleContent>
        </MarkdownDetailArticleContainer>
      </MarkdownDetailArticle>
    </MarkdownForm>
  );
};
