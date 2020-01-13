import React from "react";
import logo from "../assets/logo-monkey.svg";
import styled from 'styled-components';

const Logo =   styled.img`
    width: 35px;
`;

export default (props) =>  (
    <Logo src={logo} alt="logo" />
);
