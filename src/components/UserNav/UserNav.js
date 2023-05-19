import { Link } from 'react-router-dom'
import UserIcon from '../../images/icons/user-1.svg'
import './UserNav.css'

// Компонент рендерить блок навігації з маршрутами:
//   - /user - приватний, переадресує на сторінку UserPage

// На мобільній версії компонент потрібно відобразити в бургер меню

const UserNav = () => {
  return (
    <Link to="/user" className='user-nav'>
      <img src={UserIcon} alt="" />
      <span className='user-nav__name'>Anna</span>
    </Link>
  )
}

export default UserNav;
