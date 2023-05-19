import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #FDF7F2;
  padding: 31px 0;
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
`;

export const UserIconImg = styled.img`
  margin: 0 0 0 38px;

  @media (max-width: 991px) {
    margin: 0;
  }
`;