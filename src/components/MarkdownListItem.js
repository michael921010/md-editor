import React, { memo, useCallback } from 'react';
import styled from 'styled-components';
import ReactMarkdown from '../components/ReactMarkdown';
import { useHistory } from 'react-router-dom';
// import Avatar from '../components/Avatar';

const MarkdownListItem = styled.div`
  width: 800px;
  margin-bottom: ${props => props.theme.space[4]};
  padding: ${props => props.theme.space[4]};
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: ${props => props.theme.colors['white']};
`;

const MarkdownDesc = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: ${props => props.theme.space[1]};
`;

const MarkdownSubject = styled.h6`
  color: ${props => props.theme.colors['blue']};
  margin-top: 0;
  margin-bottom: ${props => props.theme.space[0]};
  margin-left: ${props => props.theme.space[0]};
`;

const MarkdownContent = styled.article`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 2px;
  max-height: 300px;
  overflow: hidden;
  cursor: pointer;
  padding: ${props => props.theme.space[4]} ${props => props.theme.space[4]} 0;

  &:hover {
    border: 1px solid ${props => props.theme.colors['blue']};

    &::before {
      display: block;
      content: 'View';
      position: absolute;
      top: 0;
      right: 0;
      background: ${props => props.theme.colors['blue']};
      color: ${props => props.theme.colors['white']};
      padding: 4px;
      font-size: ${props => props.theme.fontSizes['xs']};
    }
  }
`;

export default memo(({ id, subject, content }) => {
  const history = useHistory();

  const redirectEditMarkdownPage = useCallback(() => {
    history.push(`/markdown/${id}`);
  }, [history, id]);

  return (
    <MarkdownListItem>
      <MarkdownDesc>
        {/* <Avatar /> */}
        <MarkdownSubject>
          markdown / <strong>{subject}</strong>
        </MarkdownSubject>
      </MarkdownDesc>

      <MarkdownContent onClick={redirectEditMarkdownPage}>
        <ReactMarkdown source={content} />
      </MarkdownContent>
    </MarkdownListItem>
  );
});
