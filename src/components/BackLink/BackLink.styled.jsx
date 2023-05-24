import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: var(--cl-blue-link);
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  line-height: calc(22 / 16);
  height: 22px;
`;
