import styled from 'styled-components';

export const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 60px;

  font-style: normal;
  letter-spacing: -0.01em;
  color: var(--cl-black);
`;

export const TitleModal = styled.h4`
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;

  padding-bottom: 14px;

  @media (min-width: 768px) {
    font-weight: 700;
    font-size: 28px;
  line-height: 38px;
  margin-bottom: 40px;
  }
`;

export const DescrModal = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;

  margin-bottom: 48px;
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

  padding: 0;

  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  letter-spacing: 0.04em;
  font-weight: 700;

  border: 2px solid var(--cl-blue-link);
  border-radius: 40px;
  color: var(--cl-blue-link);
  background-color: var(--cl-white);
  width: 256px;
  height: 40px;
  @media (min-width: 768px) {
    width: 129px;
  }

  transition: background-color var(--animat), color var(--animat);

  &:hover,
  &:active,
  &:focus {
    background-color: var(--cl-blue-link);
    color: var(--cl-white);
  }
`;

export const Trash = styled.svg`
  width: 24px;
  height: 24px;
  stroke: currentColor;
  fill: transparent;
`;
