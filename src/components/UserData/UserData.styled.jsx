import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const TitleCard = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  margin-bottom: 18px;
  @media screen and (min-width: 480px) {
    margin-bottom: 24px;
    font-weight: 500;
    font-size: 28px;
    line-height: 38px;
  }
`;

export const FormContainer = styled(Form)`
  position: relative;
  width: 280px;
  height: 517px;
  padding: 20px 8px 25px;

  background-color: var(--cl-almost-white);

  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;

  @media screen and (min-width: 480px) {
    width: 704px;
    height: 268px;
    padding: 20px 20px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 71px;
  }

  @media screen and (min-width: 768px) {
    width: 395px;
    height: 520px;
    padding: 20px 24px 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 25px;
  }
`;

export const ImgContainer = styled.div`
  width: 182px;
  height: 182px;
  margin-bottom: 14px;

  border-radius: 40px;
`;
export const ImgAvatar = styled.img`
  border-radius: 40px;
`;
export const SvgIcon = styled.svg`
  margin-right: 8px;
  width: 24px;
  height: 24px;
  stroke: var(--cl-blue-link);
  fill: transparent;
`;

export const InputAvatar = styled(Field)`
  width: 96px;
  visibility: hidden;
`;
export const BtnPhoto = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 96px;
  height: 28px;
  border: none;
  background-color: transparent;
`;

export const BtnText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
`;

export const BtnCheck = styled.button`
  position: absolute;
  right: 15px;
  // top: 50px;
  // width: 24px;
  // height: 24px;
  border: none;
  background-color: transparent;

  @media screen and (min-width: 480px) {
    position: absolute;
    right: 0px;
    left: 0px;
  }
  @media screen and (min-width: 768px) {
    position: absolute;

    left: 315px;
  }
`;

export const InputContainer = styled(Field)`
  padding: 6px 12px;
  width: 190px;
  height: 28px;

  background-color: var(--cl-almost-white);
  border: 1px solid #54adff;
  border-radius: 20px;
  cursor: pointer;

  font-weight: 400;
  font-size: 12px;
  &: focus {
    outline: none;
  }

  @media screen and (min-width: 480px) {
    padding: 6px 12px;
    width: 255px;
    height: 32px;
  }
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  @media screen and (min-width: 480px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const DIV = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  margin: 12px auto;

  @media screen and (min-width: 480px) {
    margin: 8px auto;
    width: 355px;
    height: 32px;
  }
  
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  position: absolute;
  right: 85px;

  bottom: 220px;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: #da1414;
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

export const ImgCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Photosvg = styled.svg`
  width: 182px;
  height: 182px;

  // stroke: var(--cl-blue-link);
  fill: transparent;
`;
