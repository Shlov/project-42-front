import React, { useState } from "react";
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import UserNav from '../UserNav/UserNav';
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import AuthNav from "../AuthNav/AuthNav";
import MenuBurger from '../../images/icons/menu-hamburger.svg';
import {HeaderContainer, HeaderNav, HeaderUser, MenuBurgerImg} from './Header.styled'
import { useSelector } from "react-redux";

const Header = () => {
  const [activeBurger, setActiveBridge] = useState(false);

  const desktop = useSelector(state => state.main.desktop);
  // const tablet = useSelector(state => state.main.tablet);
  const mobile = useSelector(state => state.main.mobile);
  const isConnect = useSelector(state => state.auth.isConnect);

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
      {!desktop ? <BurgerMenu active={activeBurger} setActiveBridge={setActiveBridge}/> : null}
    </>
  )
}

export default Header;
