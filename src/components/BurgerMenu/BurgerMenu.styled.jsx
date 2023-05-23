import styled from 'styled-components';

export const MobileMenuContainer = styled.div`
  background-color: var(--cl-background);
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 100;
  top: -200%;
  transition: all 0.3s;

  &.active {
    top: 0;
  }
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  padding: 38px 37px;
  align-items: center;
  justify-content: space-between;

   @media (min-width: 768px) {
    padding: 20px 30px;
    margin-bottom: 0;
  }
`;

export const MobileMenuHeaderUser = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  @media (min-width: 768px) {
    top: 0;
  }
`;

export const CloseIconImg = styled.img`
  cursor: pointer;
  position: absolute;
  right: 37px;
`;

export const BurgerNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
