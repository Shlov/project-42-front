import styled from "styled-components";

export const NavWrap = styled.div`
margin-right: 160px;

@media (max-width: 991px){
  margin-right: 0;
}

`

export const NavLinks = styled.div`
  .nav {
  color: var(--cl-black);
  text-decoration: none;
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  transition: all .2s;
  margin-right: 40px;

  @media (min-width: 991px){
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
}
}



.nav:last-child {
  margin: 0;
}

.nav:hover {
  color: var(--cl-yellow);
}

@media (max-width: 991px) {
  margin-top: 100px;

  a {
    display: block;
    text-align: center;
    font-weight: 500;
    font-size: 48px;
    margin-bottom: 30px;
    margin-right: 0 !important;
  }
}
`;
