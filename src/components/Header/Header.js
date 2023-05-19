import React, { useState } from "react";
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import UserNav from '../UserNav/UserNav';
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import AuthNav from "../AuthNav/AuthNav";
import MenuBurger from '../../images/icons/menu-hamburger.svg';
import './Header.css';

const Header = ({ desktop, tablet, mobile, isConnect }) => {
  const [activeBurger, setActiveBridge] = useState(false)

  const handleOpenBurger = () => {
    setActiveBridge(true)
  }

  return (
    <>
      <header className="header">
        <div className="header__nav">
          <Logo />
          {desktop ? <Nav /> : null}
        </div>
        <div className="header__user">
          {!mobile && isConnect ? <UserNav /> : null}
          {!mobile && !isConnect ? <AuthNav /> : null}
          {!desktop ? <img src={MenuBurger} alt="burger" onClick={handleOpenBurger} /> : null}
        </div>
      </header>
      {activeBurger ? <BurgerMenu active={activeBurger} setActiveBridge={setActiveBridge} mobile={mobile} tablet={tablet} isConnect={isConnect} /> : null}
    </>
  )
}

export default Header;
