import Nav from '../Nav/Nav';
import Logo from '../Logo/Logo';
import UserNav from '../UserNav/UserNav';
import AuthNav from '../AuthNav/AuthNav';
import CloseIcon from '../../images/icons/cross-small.svg'
import {MobileMenuContainer, MobileMenuHeader, MobileMenuHeaderUser, CloseIconImg} from './BurgerMenu.styled';

const BurgerMenu = ({ tablet, mobile, active, setActiveBridge, isConnect }) => {
  return (
    <MobileMenuContainer className={`mobile-menu ${active ? 'active' : ''}`}>
      <MobileMenuHeader>
        <Logo />
        <CloseIconImg src={CloseIcon} alt="" onClick={() => setActiveBridge(false)} />
      </MobileMenuHeader>
      <MobileMenuHeaderUser>
        {mobile && isConnect ? <UserNav /> : <AuthNav />}
      </MobileMenuHeaderUser>
      <Nav setActiveBridge={setActiveBridge} />
    </MobileMenuContainer>
  );
};


export default BurgerMenu;
