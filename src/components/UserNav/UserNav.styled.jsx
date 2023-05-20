import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const UserNavContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const UserNavImage = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 12px !important;
`;

export const UserNavName = styled.span`
  color: #FFC107;
`;

