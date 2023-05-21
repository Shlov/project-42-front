import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(43, 43, 43, 0.6);
  z-index: 1200;
`;

export const Modal = styled.div`
  position: relative;
  width: 608px;
  height: 354px;
  background-color: var(--cl-background);
  box-shadow: var(--shadow-default);
  border-radius: 40px;
`;

export const Button = styled.button`
  position: absolute;
  top: 29px;
  right: 29px;

  padding: 0;
  background-color: var(--cl-background);
  color: var(--cl-blue-link);

  border: none;
  cursor: pointer;
`;

export const CloseIcon = styled.svg`
 width: 24px;
  height: 24px;
   stroke: var(--cl-blue-link);
  
  transition: transform var(--animat);
  &:hover {
    transform: scale(1.2);
    
  }
`;
