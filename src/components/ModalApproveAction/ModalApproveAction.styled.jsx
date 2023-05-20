import styled from 'styled-components';
import { ReactComponent as Trash } from '../../images/icons/trash-2.svg';


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
  max-width: 608px;
  max-height: 354px;
  background-color: var(--cl-background);
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 129px;
  height: 40px;
  letter-spacing: 0.04em;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  border: 2px solid #54adff;
  border-radius: 40px;
  color: #54adff;
  &:hover {
    background-color: #54adff;
    color: var(--cl-background);
    border-color: var(--cl-background);
  }
`;
export const TrashSlyled = styled(Trash)`
stroke: currentColor;
`;
