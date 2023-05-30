import styled from 'styled-components';

export const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  padding: 77px 0 60px;

  font-style: normal;
  letter-spacing: 0.04em;
  color: var(--cl-black);

  @media (min-width: 768px) {
    padding: 108px 0 108px;
  }
`;

export const TitleModal = styled.h4`
  font-size: 24px;
  line-height: 33px;
  font-weight: 500;

  padding-bottom: 48px;

  @media (min-width: 768px) {
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;
    padding-bottom: 48px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 17px;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 256px;
  height: 40px;
  padding: 0;

  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;

  border: 2px solid var(--cl-blue-link);
  border-radius: 40px;
  color: var(--cl-blue-link);
  background: transparent;
  
  cursor: pointer;

  @media (min-width: 768px) {
    width: 129px;
  }

  transition: background var(--animat), background-color var(--animat);

  &:hover,
  &:active,
  &:focus {
    color: var(--cl-background);
    background: var(--gr-blue);
    border: var(--gr-blue);
  }
`;

export const ButtonYes = styled(Button)`
  border: 2px solid var(--animat);
  color: var(--cl-background);
  background: var(--cl-blue-link);

  transition: none;

  &:hover,
  &:active,
  &:focus {
    background: var(--gr-blue);
  }
`;

export const Arrow = styled.svg`
  width: 24px;
  height: 24px;
  stroke: currentColor;
  fill: transparent;
`;
export const ArrowBack = styled.svg`
width: 24px;
height: 24px;
stroke: var(--cl-blue-link);
  fill: transparent;
`;


export const BtnLogout = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  width: 98px;
  height: 30px;

  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: transparent;

  &:hover,
  &:focus {
    color: var(--cl-blue-link);
    border: 1px solid var(--cl-blue-link);
    border-radius: 40px;

  
  }
`;
