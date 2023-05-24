import styled from 'styled-components';

export const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  /* align-items: center;  */
  gap: 12px;
  padding: 44px 12px 16px;

  font-style: normal;
  /* letter-spacing: 0.04em; */
  color: var(--cl-black);

  @media (min-width: 768px) {
    gap: 24px;
    flex-direction: row;
    padding: 32px 32px 24px;
  }
`;

export const ImageWrapper = styled.div`
  /* position: relative; */

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  margin-bottom: 12px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Image = styled.img`
  position: relative;
  width: 240px;
  height: 240px;

  border-radius: 0px 0px 40px 40px;

  @media (min-width: 768px) {
    width: 262px;
    height: 298px;
  }
`;
export const CategoryTag = styled.p`
  position: absolute;
  /* top: 16px;
  left: 14px; */
  top: 60px;
  left: 20px;

  display: flex;
  align-items: center;

  height: 32px;
  padding: 11px 22px;

  background-color: var(--cl-blue-light);
  border-radius: 0px 16px 16px 0px;

  @media (min-width: 768px) {
    top: 48px;
    left: 32px;
  }
`;

export const TitleModal = styled.h4`
  width: 198px;

  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;

  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 221px;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
  }
`;

export const ListProperty = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px; /* delete після того як об'єднаю стилі*/
`;

export const ItemProp = styled.li`
  display: flex;
  align-items: center;
`;

export const NameProp = styled.span`
  width: 81px;

  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  @media (min-width: 768px) {
    width: 121px;
    font-size: 16px;
    line-height: 22px;
  }
`;

export const SignProp = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
export const ListContact = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ItemContact = styled.li`
  display: flex;
  align-items: center;
`;

export const Contact = styled.span`
  width: 81px;

  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  @media (min-width: 768px) {
    width: 121px;
    font-size: 16px;
    line-height: 22px;
  }
`;

export const SignContact = styled.a`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: var(--cl-yellow);

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const CommentWrap = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;

    margin-bottom: 70px; 
    /* замість марджина зробити висоту ButtonWrapThumb  40+70=110px*/
  }
`;

export const ButtonWrapThumb = styled.div`
  @media (min-width: 768px) {
    width: 617px;
    display: flex;
    justify-content: flex-end;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: flex-start;
    gap: 17px;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 0;
  width: 256px;
  height: 40px;
  letter-spacing: 0.04em;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  border: none;
  border-radius: 40px;
  color: var(--cl-white);
  background: var(--cl-blue-link);

  cursor: pointer;

  /* transition: background var(--animat); */

  &:hover,
  &:active,
  &:focus {
    background: var(--gr-blue);
  }

  @media (min-width: 768px) {
    width: 129px;
  }
`;

export const ContactBtn = styled.a`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 0;
  width: 256px;
  height: 40px;
  letter-spacing: 0.04em;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  border: none;
  border-radius: 40px;
  color: var(--cl-white);
  background: var(--cl-blue-link);

  cursor: pointer;

  /* transition: background var(--animat); */

  &:hover,
  &:active,
  &:focus {
    background: var(--gr-blue);
  }

  @media (min-width: 768px) {
    width: 129px;
  }
`;

export const HeartIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--cl-white);
  fill: var(--cl-blue-link);
`;
