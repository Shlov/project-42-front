import styled from 'styled-components';

export const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 68px 0 60px;

  font-style: normal;
  letter-spacing: 0.04em;
  color: var(--cl-black);

  @media (min-width: 768px) {
    padding: 60px 0 60px;
  }
`;

export const TitleModal = styled.h4`
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;

  padding: 0;
  margin-top: 0px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 49px;
    margin-bottom: 40px;
  }
`;

export const DescrModal = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;

  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 33px;
    margin-bottom: 48px;
  }
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

  border: none;
  border-radius: 40px;
  color: var(--cl-background);
  background: var(--cl-blue-link);

  cursor: pointer;

  /* transition: background var(--animat); */

  &:hover,
  &:active,
  &:focus {
    background: var(--gr-blue);
  }
`;

export const PawPrint = styled.svg`
  width: 24px;
  height: 24px;
  fill: currentColor;
`;
