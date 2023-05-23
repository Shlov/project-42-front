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
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;

  padding: 0;
  margin-top: 0px;
  margin-bottom: 40px;
`;

export const DescrModal = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
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

export const Trash = styled.svg`
  width: 24px;
  height: 24px;
  stroke: currentColor;
  fill: transparent;
`;

export const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
