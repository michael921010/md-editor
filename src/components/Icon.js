import React from 'react';
import styled from 'styled-components';

const Icon = styled.img`
  width: ${props => props.width || '20px'};
`;

export default props => (
    <Icon {...props} src={require(`../assets/${props.type}.svg`)} />
);
