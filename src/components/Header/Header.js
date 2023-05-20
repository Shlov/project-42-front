import React, { useState } from "react";
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import UserNav from '../UserNav/UserNav';
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import AuthNav from "../AuthNav/AuthNav";
import MenuBurger from '../../images/icons/menu-hamburger.svg';
import {HeaderContainer, HeaderNav, HeaderUser, MenuBurgerImg, UserIconImg} from './Header.styled'

const Header = ({ desktop, tablet, mobile, isConnect }) => {
  const [activeBurger, setActiveBridge] = useState(false)

  const handleOpenBurger = () => {
    setActiveBridge(true)
  }

  return (
    <>
      <HeaderContainer>
        <Logo />
        <HeaderNav>       
          {desktop ? <Nav /> : null}
        </HeaderNav>
        <HeaderUser>
          {!mobile && isConnect ? <UserNav /> : null}
          {!mobile && !isConnect ? <AuthNav /> : null}
          {!desktop ? <MenuBurgerImg src={MenuBurger} alt="burger" onClick={handleOpenBurger} /> : null}
        </HeaderUser>
      </HeaderContainer>
      {activeBurger ? <BurgerMenu active={activeBurger} setActiveBridge={setActiveBridge} mobile={mobile} tablet={tablet} isConnect={isConnect} /> : null}
    </>
  )
}

export default Header;
