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
  width: 280px;
  height: ${props=> props.height};
  
  background-color: var(--cl-white);
  box-shadow: var(--shadow-default);
  border-radius: 20px;


  @media (min-width: 768px) {
    width: 681px;
    /* height: 354px; */
    border-radius: 40px;
  }
`;

export const Content = styled.div`
  height: 100%;
`

export const Button = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  padding: 0;
  background-color: var(--cl-white);
  color: var(--cl-blue-link);

  border: none;
  cursor: pointer;

  transition: transform var(--animat);

  @media (min-width: 768px) {
    top: 29px;
    right: 29px;
  }

  &:hover,
  &:active,
  &:focus {
    transform: scale(1.2);
  }
`;

export const CloseIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: currentColor;
`;
