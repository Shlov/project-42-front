import styled from 'styled-components';

export const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding-top: 108px;
  padding-bottom: 108px;

  font-style: normal;
  letter-spacing: 0.04em;
  color: var(--cl-black);
`;

export const TitleModal = styled.h4`
  font-size: 36px;
  line-height: 49px;
  font-weight: 500;

  padding: 0;
  margin-top: 0px;
  margin-bottom: 48px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;
`;

export const Button = styled.button`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 0;
  width: 129px;
  height: 40px;
  
  letter-spacing: 0.04em;
  font-weight: 700;

  border: 2px solid var(--cl-blue-link);
  border-radius: 40px;
  color: var(--cl-blue-link);
  background-color: var(--cl-background);

  transition: background-color var(--animat), color var(--animat),
    border-color var(--animat);

  &:hover {
    background-color: var(--cl-blue-link);
    color: var(--cl-background);
    border-color: var(--cl-background);
  }
`;

export const Arrow = styled.svg`
  width: 24px;
  height: 24px;
  stroke: currentColor;
  fill: transparent;
`;

export const BtnLogout = styled.button`
  display: inline-flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  width: 98px;
  height: 30px;
  font-weight: 500;
  font-family: 'Manrope';
  font-size: 16px;
  border: none;
  background-color: transparent;
`;
