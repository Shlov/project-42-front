import styled from 'styled-components';
import { Field } from 'formik';

export const CategoryStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-bottom: 91px;

  @media screen and (min-width: 768px) {
    margin-bottom: 137px;
  }
`;

export const RadioButton = styled(Field)`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const CategoryStepLabel = styled.label`
  width: fit-content;
  position: relative;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 40px;
  font-weight: 500;
  font-size: 14px;
  line-height: calc(19 / 14);
  letter-spacing: 0.04em;
  color: var(--cl-blue-link);
  background-color: var(--cl-blue-light);

  transition: background-color var(--animat), color var(--animat);

  &:hover,
  &:focus,
  ${RadioButton}:checked + & {
    background-color: var(--cl-blue-link);
    color: var(--cl-background);
  }
`;

export const ErrorMessage = styled.div`
  color: var(--cl-red);
  margin-top: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: calc(16 / 12);
`;
