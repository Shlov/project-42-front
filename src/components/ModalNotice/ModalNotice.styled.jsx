import styled from 'styled-components';

export const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 5px;
  padding: 44px 12px 16px;

  font-style: normal;
  color: var(--cl-black);

  @media (min-width: 768px) {
    gap: 24px;
    flex-direction: row;
    padding: 32px 32px 24px;
  }
`;

export const ImageWrapper = styled.div`
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
  margin-bottom: 8px;
`;

export const ListContact = styled(ListProperty)`
   margin-bottom: 0px;
`

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

export const Contact = styled.a`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: var(--cl-yellow);
  filter: blur(0px);

  transition: filter var(--animat);

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const ContactBlur = styled(Contact)`
  filter: blur(3px);
  pointer-events: none;
`


export const CommentWrap = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;



  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    width: 618px;
    height: 86px;
    overflow-y: auto;
  }
`;

export const PriceWrap = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-start;

   margin-bottom: 8px;

   @media (min-width: 768px) {
    gap: 8px;
    margin-bottom: 0px;
    width: 338px;
   }
`

export const Price = styled.span`
  width: 81px;

font-weight: 600;
font-size: 14px;
line-height: 19px;

@media (min-width: 768px) {
  width: 45px;
  font-size: 16px;
  line-height: 22px;
}
`
export const PriceValue = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 26px;
  }
`

export const ButtonWrapThumb = styled.div`
  @media (min-width: 768px) {   
    display: flex;
    justify-content: ${props => props.price ? "space-between" : "flex-end"};
 
    width: 617px;
    /* padding-block-start: 70px; */
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

  width: 256px;
  height: 40px;
  padding: 0;
  
  letter-spacing: 0.04em;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  border: none;
  border-radius: 40px;
  color: var(--cl-background);
  background: var(--cl-blue-link);

  cursor: pointer;

  transition: background 500ms cubic-bezier(0.4, 0, 0.2, 1) 1000ms;

  &:hover,
  &:active,
  &:focus {
    background: var(--gr-blue);
  }

  @media (min-width: 768px) {
    width: 129px;
  }
`;

export const ContactBtn = styled.button`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;

  width: 256px;
  height: 40px;
  padding: 0;

  letter-spacing: 0.04em;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  border: 2px solid var(--cl-blue-link);
  border-radius: 40px;
  color: var(--cl-blue-link);
  background: transparent;

  cursor: pointer;

  /* transition: background var(--animat); */
  transition: background 500ms cubic-bezier(0.4, 0, 0.2, 1) 1000ms;

  &:hover,
  &:active,
  &:focus {
    background: var(--gr-blue);
    color: var(--cl-background);
    border: none;
  }

  @media (min-width: 768px) {
    width: 129px;
  }
`;

export const HeartIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--cl-background);
  fill: var(--cl-blue-link);
`;
