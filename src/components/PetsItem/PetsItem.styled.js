import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  padding: 16px 20px 40px 20px;
  width: 280px;
  background-color: ${(props) => props.theme === 'day' ? 'var(--cl-almost-white)' : 'var(--cl-black)'};
  color: ${(props) => props.theme === 'day' ? 'var(--cl-black)' : 'var(--cl-almost-white)'};
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    width: 703px;
    padding: 20px;
    border-radius: 40px;
  }
  @media (min-width: 1280px) {
    display: flex;
    width: 821px;
  }
`;
export const Photo = styled.img`
  background-color: gray;
  margin-bottom: 20px;
  width: 240px;
  height: 240px;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 128px;
    height: 128px;
    margin-right: 20px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    width: 161px;
    height: 161px;
    margin-right: 32px;
    border-radius: 40px;
  }
`;

export const Description = styled.div`
  max-width: 280px;

  @media screen and (min-width: 768px) {
    max-width: 515px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 580px;
  }
`;

export const Label = styled.p`
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 12px;
    font-size: 16px;
    line-height: 1.38;
  }
`;
export const Breed = styled.p`
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;

  @media screen and (min-width: 1280px) {
    margin-bottom: 16px;
    font-size: 16px;
  }
`;

export const LastLabel = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    line-height: 1.57;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.38;
  }
`;

export const Text = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  width: 240px;

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;
export const LastText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  width: 240px;
  align-items: center;

  @media screen and (min-width: 768px) {
    line-height: 1.57;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const Btn = styled.button`
  position: absolute;
  top: 272px;
  right: 16px;
  width: 24px;
  height: 24px;
  border: none;
  background-color: var(--cl-almost-white);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 20px;
    right: 20px;
  }

  &:hover {
    scale: 1.2;
  }
`;

export const Icon = styled.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  right: 0;
  background-color: ${(props) => props.theme === 'day' ? 'var(--cl-almost-white)' : 'var(--cl-black)'};
  stroke: var(--cl-blue-link);
  fill: ${(props) => props.theme === 'day' ? 'var(--cl-almost-white)' : 'var(--cl-black)'};

  @media screen and (min-width: 768px) {
    top: 0;
    right: 0;
  }
`;

export const ModalContainer = styled.div`
  padding: 60px 5px 60px 5px;
  /* color: var(--cl-black); */
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  letter-spacing: -0.01em;
`;
export const ModalTitle = styled.h1`
  font-weight: 700;
  font-size: 28px;
  text-align: center;
  line-height: 1.36;
  padding: 0;
  margin: 0px;
  margin-bottom: 40px;
`;

export const ModalText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.38;
  text-align: center;
  margin-bottom: 48px;
`;
export const ModalItem = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.38;
  text-align: center;
`;

export const ModalButton = styled.div`
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
  width: 120px;
  height: 40px;
  letter-spacing: 0.04em;
  font-weight: 700;
  cursor: pointer;

  border: 2px solid var(--cl-blue-link);
  border-radius: 40px;
  color: var(--cl-blue-link);
  background-color: ${(props) => props.theme === 'day' ? 'var(--cl-background)' : 'var(--cl-black)'};

  transition: background-color var(--animat), color var(--animat),
    border-color var(--animat);

  &:hover {
    background-color: var(--cl-blue-link);
    color: var(--cl-background);
  }
  @media screen and (min-width: 768px) {
    width: 129px;
  }
`;

export const ModalIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: currentColor;
  fill: transparent;
`;
