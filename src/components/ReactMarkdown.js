import React from 'react';
import ReactMarkdown from 'react-markdown';

export default props => {
  return <ReactMarkdown className="markdown-body" {...props} />;
};
