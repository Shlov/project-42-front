import styled from 'styled-components';

export const HeaderContainer = styled.header`
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
`;

export const MenuBurgerImg = styled.img`

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
