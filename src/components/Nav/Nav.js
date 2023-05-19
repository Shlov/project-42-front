import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';
// import {NavContainer, NavLinkContainer, NavLink } from './Nav.styled'

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

// const Nav = ({ setActiveBridge, desktop }) => {
//   const handleCloseMenu = () => {
//     if(!desktop) {
//       setActiveBridge(false)
//     }
//   }

//   const links = [
//     {
//       text: 'News',
//       link: '/news'
//     },
//     {
//       text: 'Find pet',
//       link: '/notices'
//     },
//     {
//       text: 'Our friends',
//       link: '/friends'
//     }
//   ]

//   return (
//     <NavContainer>
//       <NavLinkContainer>
//         {links.map((link, i) =>
//           <NavLink key={i} to={link.link} onClick={handleCloseMenu}>{link.text}</NavLink>
//         )}
//       </NavLinkContainer>
//     </NavContainer>
//   )
// }


export default Nav;
