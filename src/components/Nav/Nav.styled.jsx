import styled from "styled-components";
import '../../index.css';

export const NavLinks = styled.div`
  .nav {
  color: #111;
  text-decoration: none;
  font-family: 'Manrope';
  font-size: 20px;
  transition: all .2s;
  margin-right: 40px;
}

.nav:last-child {
  margin: 0;
}

.nav:hover {
  color: #FFC107;
}

max-width: 768px {
  a {
  display: block;
  text-align: center;
  font-weight: 500;
  font-size: 48px;
  margin-bottom: 60px;
  margin-right: 0 !important;
}
`;