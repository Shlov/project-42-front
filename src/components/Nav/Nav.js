import React from "react";
import { Link } from "react-router-dom";
import { NavLinks, NavWrap } from './Nav.styled'

const Nav = ({ setActiveBridge, desktop }) => {
  const handleCloseMenu = () => {
    if(!desktop) {
      setActiveBridge(false)
    }
  }
  const links = [
    {
      text: 'News',
      link: '/news'
    },
    {
      text: 'Find pet',
      link: '/notices'
    },
    {
      text: 'Our friends',
      link: '/friends'
    }
  ]

  return (
    <NavWrap>
    <NavLinks>
      {links.map((link, i) =>
        <Link key={i} to={link.link} className="nav" onClick={handleCloseMenu}>{link.text}</Link>
      )}
      </NavLinks>
      </NavWrap>
  )
}

export default Nav;
