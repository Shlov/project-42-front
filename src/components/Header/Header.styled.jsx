import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #FEF9F9;
  padding: 31px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderUser = styled.div`
  display: flex;
  margin-left: 270px;
`;

export const MenuBurgerImg = styled.img`
  margin-right: 160px;

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