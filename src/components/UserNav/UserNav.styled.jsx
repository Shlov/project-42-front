import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const UserNavContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  /* margin-bottom: 20px; */


`;

export const UserNavImage = styled.img`
  width: 28px;
  height: 28px;

  /* @media (min-width: 991px) { */
    margin-right: 12px !important;
    margin-top: 7px;
  /* } */

`;

export const UserNavName = styled.span`
  color: #FFC107;
  font-size: 20px;
  line-height: 24px;

   @media (min-width: 991px) {
    margin-top: 7px;
  }
`;

