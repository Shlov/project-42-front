import styled from 'styled-components';

export const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 60px;

  font-style: normal;
  letter-spacing: 0.04em;
  color: var(--cl-black);
`;

export const TitleModal = styled.h4`
  font-weight: 500;
  font-size: 36px;
  line-height: 49px;

  padding: 0;
  margin-top: 0px;
  margin-bottom: 40px;
`;

export const DescrModal = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  text-align: center;

  margin-bottom: 48px;
`;

export const Button = styled.button`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 0;
  width: 248px;
  height: 40px;
  letter-spacing: 0.04em;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

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

export const PawPrint = styled.svg`
  width: 24px;
  height: 24px;
  fill: currentColor;
`;
