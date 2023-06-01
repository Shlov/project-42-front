import styled, { css } from 'styled-components';
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;

  font-weight: 500;
  font-size: 14px;
  line-height: calc(19 / 14);
  color: ${props =>
    props.theme === 'day' ? 'var(--cl-black)' : 'var(--cl-white)'};

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

  background-color: transparent;

  border: 1px solid
    ${props => (props.errors ? 'var(--cl-red)' : 'var(--cl-blue-link)')};
  outline: var(--cl-blue-link);
  outline: var(--cl-blue-link);

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
