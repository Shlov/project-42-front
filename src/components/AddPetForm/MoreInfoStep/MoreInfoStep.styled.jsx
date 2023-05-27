import { Field, ErrorMessage } from 'formik';
import styled, { css } from 'styled-components';

export const MoreInfoStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
    ${({ selectedCategory }) =>
      selectedCategory !== 'your-pet'
        ? 'flex-direction: row; column-gap: 45px'
        : ''};
  }
`;

export const SexAvatarFieldWrapper = styled.div`
  display: flex;
  gap: 16px;

  ${({ selectedCategory }) =>
    selectedCategory !== 'your-pet' ? 'flex-direction: column;' : ''}

  @media screen and (min-width: 768px) {
    ${({ selectedCategory }) =>
      selectedCategory !== 'your-pet' ? 'row-gap: 45px;' : ''};
  }
`;

export const LocationPriceCommentFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const SexFieldTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: calc(19 / 14);
  margin-bottom: 8px;
  color: var(--cl-black);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: calc(26 / 20);
  }
`;

export const SexRadioButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
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

export const SexLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;

  cursor: pointer;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  color: var(--cl-gray);

  transition: color var(--animat);

  &:hover,
  &:focus,
  ${RadioButton}:checked + & {
    color: var(--cl-green);
  }

  & svg {
    stroke: ${({ htmlFor }) => {
      switch (htmlFor) {
        case 'female':
          return 'var(--cl-red)';
        case 'male':
          return 'var(--cl-blue-link)';
        default:
          return 'inherit';
      }
    }};
  }
`;

export const AvatarLabel = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: calc(19 / 14);
  color: var(--cl-black);

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: calc(26 / 20);

    ${({ selectedCategory }) =>
      selectedCategory !== 'your-pet' ? 'flex-direction: column; gap: 8px' : ''}
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  object-position: center;
  object-fit: cover;

  & img {
    width: 182px;
    height: 182px;
  }
`;

export const AvatarField = styled.input`
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

export const MoreInfoStepLabel = styled.label`
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

export const Input = css`
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
  outline: var(--cl-blue-link);

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const MoreInfoStepInput = styled(Field)`
  ${Input}
`;

export const MoreInfoStepTextArea = styled(Field)`
  ${Input}
  resize: none;
  height: 92px;

  border-radius: 20px;

  @media screen and (min-width: 768px) {
    height: 79px;

    ${({ category }) => (category === 'lost/found' ? 'height: 182px' : '')}
  }
`;

export const Error = css`
  color: var(--cl-red);
  margin-top: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: calc(16 / 12);
`;

export const ErrorMessageContainer = styled(ErrorMessage)`
  ${Error}
`;

export const SexErrorMessage = styled.div`
  ${Error}
`;
