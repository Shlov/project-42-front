import styled from 'styled-components';

export const ModalContent = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center; */
  padding: 44px 12px 16px;

  font-style: normal;
  /* letter-spacing: 0.04em; */
  color: var(--cl-black);

  @media (min-width: 768px) {
    /* padding: 60px 0 60px; */
  }
`;

export const ImageWrapper = styled.div`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  margin-bottom: 12px;
`;

export const Image = styled.img`
  border-radius: 0px 0px 40px 40px;
`;
export const CategoryTag = styled.p`
  position: absolute;
  top: 16px;
  left: 14px;

  height: 32px;
  padding: 11px 22px;

  background-color: var(--cl-blue-light);
  border-radius: 0px 16px 16px 0px;
`;

export const TitleModal = styled.h4`
  width: 198px;

  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;

  margin-bottom: 12px;

  @media (min-width: 768px) {
  }
`;

export const ListProperty = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
`;

export const SignProp = styled.span`
    font-weight: 500;
font-size: 12px;
line-height: 16px;
` 
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
`;

export const SignContact = styled.a`
    font-weight: 500;
font-size: 12px;
line-height: 16px;

color: var(--cl-yellow)
`

export const CommentWrap = styled.div`
font-weight: 600;
font-size: 14px;
letter-spacing: 0.04em;
`

export const ButtonWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

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
`;

export const HeartIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--cl-white);
  fill:var(--cl-blue-link);
`;
