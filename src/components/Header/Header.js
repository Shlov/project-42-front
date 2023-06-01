import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import UserNav from '../UserNav/UserNav';
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import AuthNav from "../AuthNav/AuthNav";
import MenuBurger from '../../images/icons/menu-hamburger.svg';
import {HeaderContainer, HeaderNav, HeaderTheme, HeaderUser, MenuBurgerImg} from './Header.styled'
import { UserNavContainer, UserNavImage } from "components/UserNav/UserNav.styled";
import { setTheme } from 'Redux/main/main-slice'
import UserIcon from '../../images/icons/user-1.svg'
import Sun from '../../images/icons/sun.svg'
import Moon from '../../images/icons/night.svg'

const Header = () => {
  const [activeBurger, setActiveBridge] = useState(false);

  const desktop = useSelector(state => state.main.desktop);
  const mobile = useSelector(state => state.main.mobile);
  const theme = useSelector(state => state.main.theme);
  const isConnect = useSelector(state => state.auth.isConnect);
  const dispatch = useDispatch()

  const handleOpenBurger = () => {
    setActiveBridge(true)
  }

  const handleChangeTheme = () => {
    dispatch(setTheme(theme === 'day' ? 'night' : 'day'))
  }

  return (
    <>
      <HeaderContainer>
        <Logo />
        <HeaderNav>
          {desktop ? <Nav /> : null}
        </HeaderNav>
        <HeaderUser>
          <HeaderTheme onClick={handleChangeTheme} className={`icons ${theme}`}>
            <img
              className={`icon ${theme === "night" ? "icon-hide" : "icon-show"}`}
              src={Sun}
              alt="Sun Icon"
            />
            <img
              className={`icon ${theme === "day" ? "icon-hide" : "icon-show"}`}
              src={Moon}
              alt="Moon Icon"
            />
          </HeaderTheme>
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

