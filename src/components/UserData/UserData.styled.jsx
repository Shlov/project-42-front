import styled from 'styled-components';
import { Form, Field} from 'formik';

export const MainContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;

  @media screen and (min-width: 767px) {
    padding: 32px;
    width: 768px;
  }
  @media screen and (min-width: 991px) {
    flex-direction: row;
    padding: 30px, 16px, 30px, 16px;
    width: 1280px;
  }
`;
export const Box = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 767px) {
    margin: 0;
  }
`;

export const TitleCard = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  margin-bottom: 18px;
  @media screen and (min-width: 767px) {
    margin-bottom: 24px;
    font-weight: 500;
    font-size: 28px;
    line-height: 38px;
  }
`;

export const FormContainer = styled(Form)`
  width: 280px;
  height: 517px;
  padding: 20px 8px 25px;

  background-color: var(--cl-almost-white);

  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  /* margin: 0 auto; */
  /* margin: 0 auto; */
  margin-bottom: 40px;

  @media screen and (min-width: 767px) {
    width: 704px;
    height: 268px;
    padding: 20px 20px;
    display: flex;
    gap: 71px;
    flex-direction: row-reverse;
    justify-content: flex-end;
  }

  @media screen and (min-width: 991px) {
    width: 395px;
    height: 520px;
    padding: 20px 24px 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 25px;
    margin-right: 32px;
  }
`;

export const AvatarContainer = styled.div`
position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 21px;

  @media screen and (min-width: 767px) {
    margin-bottom: 0px;
  }
`;

export const ImgContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 182px;
  height: 182px;
  margin-bottom: 14px;
  border-radius: 40px;
`;
export const ImgAvatar = styled.img`
  height: 100%;
  border-radius: 40px;
`;
export const SvgIcon = styled.svg`
  margin-right: 4px;
  width: 24px;
  height: 24px;
  stroke: var(--cl-blue-link);
  fill: transparent;
`;

export const InputAvatar = styled(Field)`
  width: 150px;
  visibility: hidden;
`;
export const BtnPhoto = styled.button`
  position: absolute;
  left: 86px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 28px;
  border: none;
  background-color: transparent;

  font-weight: 400;
  font-size: 12px;
  line-height: 22px;

  @media screen and (min-width: 767px) {
    left: 45px;
  }

  
  @media screen and (min-width: 991px) {
    left: 120px;
  }

`;

export const LabelContainer = styled.label`
position: relative;
display: flex;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 12px;

  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  @media screen and (min-width: 767px) {
    // margin: 8px auto;
    margin-bottom: 8px;
    width: 355px;
    height: 32px;
  }
  @media screen and (min-width: 991px) {
    font-size: 18px;
    line-height: 25px;
  }

  }
`;

export const InputContainer = styled(Field)`

padding: 6px 12px;
  width: 190px;
  height: 28px;

  background-color: var(--cl-almost-white);
  border: 1px solid var(--cl-blue-link);
  border-radius: 20px;
  cursor: pointer;

  font-weight: 400;
  font-size: 12px;
  &: focus {
    outline: none;
  }

  @media screen and (min-width: 767px) {
    padding: 6px 12px;
    width: 255px;
    height: 32px;
    cursor: pointer;
    &: focus {
      outline: none;
    }
    }

  }
`;

export const BtnCheck = styled.button`
  position: absolute;
  right: 15px;
  padding: 0px 0px;
  cursor: pointer;
border: none;
width: 24px;
height: 24px;
  background-color: var(--cl-background);

`;
export const SvgBtn = styled.svg`
width: 24px;
height: 24px;
  stroke: var(--cl-green);
  fill: transparent;
`;

export const BtnEdit = styled.svg`
  width: 24px;
  height: 24px;

  stroke: var(--cl-blue-link);
  fill: var(--cl-blue-link);
`;


export const Photosvg = styled.svg`
  width: 182px;
  height: 182px;
  fill: transparent;
`;

export const StyledErrorMessage = styled.div`
position: absolute;
top: 25px;
right: 20px;
  font-weight: 400;
  font-size: 9px;
  line-height: 14px;
  color: var(--cl-red);

  @media screen and (min-width: 767px) {
    position: absolute;
    top: 28px;
    right: 20px;
  }
`;