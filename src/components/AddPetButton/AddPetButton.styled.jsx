import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0;
  width: 129px;
  height: 40px;
  letter-spacing: 0.04em;
  font-weight: 700;
  cursor: pointer;

  border: 2px solid var(--cl-blue-link);
  border-radius: 40px;
  color: var(--cl-background);
  background-color: var(--cl-blue-link);
  border-color var(--animat);

  &:hover {
    background: var(--gr-blue);
  }
`;

export const AddIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--cl-background);
  fill: transparent;
`;
