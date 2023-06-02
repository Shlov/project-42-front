import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 20px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 767px) and (max-width:1279px) {
    width: 730px;
  }

@media (min-width: 1280px) {
    max-width: 1280px;
  }

`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderUser = styled.div`
  display: flex;
`;

export const MenuBurgerImg = styled.img`
margin-top: 7px;

  @media screen and (min-width: 767px) {
    margin-left: 24px;
  }
`;

export const UserIconImg = styled.img`
  margin: 0 0 0 38px;

  @media (max-width: 991px) {
    margin: 0;
  }
`;

export const HeaderTheme = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  margin-right: 10px;
  position: relative;
  width: 28px;

  img {
    width: 28px;
    height: 28px;
    
  }

  .icon {
    position: absolute;
    transition: opacity 0.5s, transform 0.5s;
    top: 7px;
    right: 10px;
  }

  .icon-hide {
    opacity: 0;
    transform: translateY(20px);
  }

  .icon-show {
    opacity: 1;
    transform: translateY(0);
  }
`
