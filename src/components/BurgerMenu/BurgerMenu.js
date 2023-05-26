import Nav from '../Nav/Nav';
import Logo from '../Logo/Logo';
import UserNav from '../UserNav/UserNav';
import AuthNav from '../AuthNav/AuthNav';
import CloseIcon from '../../images/icons/cross-small.svg'
import {MobileMenuContainer, MobileMenuHeader, MobileMenuHeaderUser, CloseIconImg, BurgerNav} from './BurgerMenu.styled';
import { useSelector } from 'react-redux';

const BurgerMenu = ({ active, setActiveBridge }) => {

  const mobile = useSelector(state => state.main.mobile);
  const isConnect = useSelector(state => state.auth.isConnect);

  return (
    <MobileMenuContainer className='mobile-menu' style={{top: active ? '0px' : '-200%'}}>
      <MobileMenuHeader>
        <Logo />
        <CloseIconImg src={CloseIcon} alt="" onClick={() => setActiveBridge(false)} />
      </MobileMenuHeader>
      <MobileMenuHeaderUser>
        {mobile ? (isConnect ? <UserNav /> : <AuthNav />) : null}
      </MobileMenuHeaderUser>
      <BurgerNav>
        <Nav setActiveBridge={setActiveBridge} />
      </BurgerNav>
    </MobileMenuContainer>
  );
};

export default BurgerMenu;
