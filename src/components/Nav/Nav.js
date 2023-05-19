import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

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
    <div className="links">
      {links.map((link, i) =>
        <Link key={i} to={link.link} className="nav" onClick={handleCloseMenu}>{link.text}</Link>
      )}
    </div>
  )
}

export default Nav;
