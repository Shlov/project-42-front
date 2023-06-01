import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Form, Field, ErrorMessage } from 'formik';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  width: 280px;
  box-shadow: var(--shadow-default);
  border-radius: 40px;
  background-color: ${(props) => props.theme === 'day' ? 'var(--cl-background)' : '#111'};
  padding: 40px 12px;

  @media screen and (min-width: 768px) {
    width: 608px;
    padding: 60px 75px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme === 'day' ? 'var(--cl-background)' : '#111'};
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 52px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 40px;
  }
`;

export const Title = styled.h2`
  font-style: normal;
  font-size: 24px;
  line-height: 33px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: ${(props) => props.theme === 'day' ? 'var(--cl-black)' : '#fff'};

  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 36px;
    line-height: 49px;
  }
`;

export const Input = styled(Field)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-style: normal;
  height: 48px;
  font-size: 16px;
  padding: 12px 16px;
  width: 100%;
  border: 1px solid
    ${props => {
      if (props.error) {
        return 'var(--cl-red)';
      } else if (props.value && !props.error) {
        return 'var(--cl-green)';
      } else {
        return 'var(--cl-blue-link)';
      }
    }};
  border-radius: 40px;
  cursor: pointer;
  outline: none;
`;

export const Error = styled(ErrorMessage)`
  position: absolute;
  top: 52px;
  left: 18px;
  font-size: 12px;
  font-weight: 400;
  color: var(--cl-red);
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  text-align: left;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  gap: 4px;
  font-size: 16px;
  line-height: 1.2;
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  width: 100%;
  border: none;
  border-radius: 40px;
  height: 48px;
  cursor: pointer;
  background: #54adff;
  margin-bottom: 24px;
  color: var(--cl-almost-white);

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: var(--cl-gray);
`;

export const Span = styled.span`
  margin-left: 3px;
`;

export const Link = styled(NavLink)`
  color: var(--cl-blue-link);
  line-height: 16px;
`;

export const IconPas = styled.span`
  position: absolute;
  cursor: pointer;
  top: 12px;
  right: 15px;
`;

export const SVG = styled.svg`
  margin-left: 8px;
  fill: transparent;
  stroke: var(--cl-blue-link);
`;

export const IconOkValidate = styled.span`
  ${props => {
    if (props.value && !props.error) {
      return `position: absolute;
    cursor: pointer;
  top: 12px;
  right: 45px;`;
    } else {
      return 'display: none;';
    }
  }}
`;

export const IconOkValidateMail = styled.span`
  ${props => {
    if (props.value && !props.error) {
      return `position: absolute;
    cursor: pointer;
  top: 12px;
  right: 15px;`;
    } else {
      return 'display: none;';
    }
  }}
`;

export const TextOkValidation = styled.div`
  ${props => {
    if (props.value && !props.error) {
      return `  position: absolute;
  top: 52px;
  left: 18px;
  font-size: 12px;
  font-weight: 400;
  color: var(--cl-green);`;
    } else {
      return 'display: none;';
    }
  }}
`;

export const IconErrorValidateMail = styled.span`
  ${props => {
    if (props.error) {
      return `position: absolute;
  top: 12px;
  right: 15px;
  color: var(--cl-red);`;
    } else {
      return 'display: none;';
    }
  }}
`;

export const IconErrorValidate = styled.span`
  ${props => {
    if (props.error) {
      return `position: absolute;
  top: 12px;
  right: 45px;
  color: var(--cl-red);`;
    } else {
      return 'display: none;';
    }
  }}
`;
