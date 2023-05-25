import styled from 'styled-components';

export const NextButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: var(--cl-blue-link);
  min-width: 248px;
  padding: 9px 0;
  border: none;

  font-weight: 700;
  font-size: 16px;
  line-height: calc(22 / 16);
  letter-spacing: 0.04em;
  color: var(--cl-background);
  border-radius: 40px;

  cursor: pointer;

  &:disabled {
    color: var(--cl-gray);
    background-color: var(--cl-blue-light);
    pointer-events: none;
  }
`;

export const PawIcon = styled.svg`
  fill: var(--cl-background);
`;
