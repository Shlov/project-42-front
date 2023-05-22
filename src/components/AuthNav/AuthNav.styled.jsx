import styled from 'styled-components';
import { ReactComponent as Paw } from '../../images/icons/pawprint 1.svg';

export const AuthNavCss = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 767px) {
    display: block;
  }
`;

export const ButtonLogin = styled.button`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cl-background);
  width: 165px;
  height: 40px;
  padding: 8px 20px;
  margin-left: 10px;
  background-color: var(--cl-yellow);
  border: 2px solid transparent;
  border-radius: 40px;
  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: var(--cl-yellow);
    background: none;
    background-color: current-color;
    border: 2px solid var(--cl-yellow);
    box-shadow: var(--shadow-nav);
  }

  @media (max-width: 767px) {
    margin: 0 0 10px;
    height: 40px;
  }
`;

export const ButtonRegister = styled.button`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: var(--cl-yellow);
  min-width: 165px;
  background-color: var(--cl-background);
  border: 2px solid var(--cl-yellow);
  border-radius: 40px;
  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: var(--cl-background);
    background: none;
    background-color: var(--cl-yellow);
    box-shadow: var(--shadow-nav);
  }

  @media (max-width: 767px) {
    height: 40px;
  }
`;

export const PawCss = styled(Paw)`
  fill: currentColor;
  margin-left: 8px;
`;
