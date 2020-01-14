import React from 'react';
import CodeMirror from 'react-codemirror';
import styled from 'styled-components';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/lib/codemirror.css';

const Mirror = styled(CodeMirror)`
    width: 50%;
`;

export default React.memo(props => (
    <Mirror
        {...props}
        options={{
            ...props.options,
            lineNumbers: true,
            mode: 'markdown',
        }}
    />
));
