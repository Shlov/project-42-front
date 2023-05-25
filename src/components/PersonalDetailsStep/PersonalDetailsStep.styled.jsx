import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

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

export const PersonalDetailsStepLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;

  font-weight: 500;
  font-size: 14px;
  line-height: calc(19 / 14);
  color: var(--cl-black);

  @media screen and (min-width: 768px) {
    gap: 8px;
    font-size: 20px;
    line-height: calc(26 / 20);
  }
`;

export const PersonalDetailsStepInput = styled(Field)`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  border-radius: 40px;
  padding: 10px 16px;
  color: var(--cl-gray);

  border: 1px solid
    ${props => (props.errors ? 'var(--cl-red)' : 'var(--cl-blue-link)')};
  outline: var(--cl-blue-link);

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ErrorMessageContainer = styled(ErrorMessage)`
  color: var(--cl-red);
  margin-top: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: calc(16 / 12);
`;
