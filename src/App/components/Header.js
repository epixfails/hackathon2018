import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  padding: 50px;

  &:before {
    display: block;
    position: absolute;
    top: -370px;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    width: 420px;
    height: 420px;
    border-radius: 50%;
    background: #3d4653;
  }
`;

const HeaderLogo = styled.img`
  width: 100px;
  height: auto;
`;

export const Header = () => (
  <HeaderWrapper>
    <HeaderLogo src="img/logo.svg" alt="" />
  </HeaderWrapper>
);
