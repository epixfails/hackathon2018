import React from 'react';
import styled from 'styled-components';

const StyledPortal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.15s ease-out;
`;

const WrapPortal = styled.div`
  transition: 0.15s ease-out;
  z-index: 200;
`;

const Overlay = styled.div`
  position: fixed;
  background-color: #1d3452;
  opacity: 0.9;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 150;
`;

export const PortalReact = props => {
  const { children, closePortal, shouldCloseOnOverlayClick } = props;

  return (
    <StyledPortal>
      <Overlay onClick={shouldCloseOnOverlayClick ? closePortal : () => {}} />
      <WrapPortal>{children}</WrapPortal>
    </StyledPortal>
  );
};
