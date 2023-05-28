import React, { useState } from "react";
import { useSelector } from "react-redux";
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import UserNav from '../UserNav/UserNav';
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import AuthNav from "../AuthNav/AuthNav";
import MenuBurger from '../../images/icons/menu-hamburger.svg';
import {HeaderContainer, HeaderNav, HeaderUser, MenuBurgerImg} from './Header.styled'
import { UserNavContainer, UserNavImage } from "components/UserNav/UserNav.styled";
import UserIcon from '../../images/icons/user-1.svg'

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
          {(mobile && isConnect) &&
            <UserNavContainer to='/user'>
              <UserNavImage src={UserIcon} alt="" />
            </UserNavContainer>
          }
          {!desktop ? <MenuBurgerImg src={MenuBurger} alt="burger" onClick={handleOpenBurger} /> : null}
        </HeaderUser>
      </HeaderContainer>
      {!desktop ? <BurgerMenu active={activeBurger} setActiveBridge={setActiveBridge}/> : null}
    </>
  )
}

export default Header;

