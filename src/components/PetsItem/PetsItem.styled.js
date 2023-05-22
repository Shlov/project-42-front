import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  padding: 16px 20px 40px 20px;
  width: 280px;
  background-color: var(--cl-almost-white);
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    width: 703px;
    height: 256px;
    padding: 20px;
  }
  @media  (min-width: 1280px) {
   display: flex;
    width: 821px;
    
  }
`;
export const Photo = styled.img`
  display: block;
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
`

export const Label = styled.p`
  margin: 0;
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
  margin: 0;
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const LastLabel = styled.p`
  margin: 0;
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
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  width: 240px;
`;
export const LastText = styled.span`
  margin: 0;
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
`;

export const Icon = styled.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  right: 0;
  fill: var(--cl-blue-link);

  @media screen and (min-width: 768px) {
    top: 0;
    right: 0;
  }
`;
