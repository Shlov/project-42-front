import Nav from '../Nav/Nav';
import Logo from '../Logo/Logo';
import UserNav from '../UserNav/UserNav';
import AuthNav from '../AuthNav/AuthNav';
import CloseIcon from '../../images/icons/cross-small.svg'
import './BurgerMenu.css';

const BurgerMenu = ({ tablet, mobile, active, setActiveBridge, isConnect }) => {
  return (
    <div className={'mobile-menu ' + (active ? 'active' : '')}>
      <div className='mobile-menu__header'>
        <Logo />
        <img src={CloseIcon} alt="" onClick={() => setActiveBridge(false)} />
      </div>
      <div className='mobile-menu__header-user'>
        {mobile && isConnect ? <UserNav /> : <AuthNav />}
      </div>
      <Nav setActiveBridge={setActiveBridge} />
    </div>
  )
}

export default BurgerMenu;
