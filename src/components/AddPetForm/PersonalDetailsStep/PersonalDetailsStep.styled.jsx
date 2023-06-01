import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import { Input } from '../Input/Input.styled';
import { Error } from '../Error/Error.styled';

export const PersonalDetailsStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const PersonalDetailsField = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const PersonalDetailsStepInput = styled(Field)`
  ${Input}

  &::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`;

export const ErrorMessageContainer = styled(ErrorMessage)`
  ${Error}
`;
