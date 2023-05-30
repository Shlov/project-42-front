import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

// Define a reusable CSS block using the css function
export const BackButton = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: var(--cl-blue-link);
  background-color: transparent;
  border: none;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  line-height: calc(22 / 16);
  height: 22px;
`;

export const StyledLink = styled(Link)`
  ${BackButton}
  padding: 20px 0px;
`;

export const AddPetBackButton = styled.button`
  ${BackButton}
`;
