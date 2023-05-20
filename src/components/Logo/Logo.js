import LogoIcon from '../../images/icons/logo.svg';
import { Link } from 'react-router-dom';
import { LogoImg } from './Logo.styled';

const Logo = () => {
  return (
    <Link to="/">
      <LogoImg src={LogoIcon} alt="YOUR PET LOGO" />
    </Link>
  );
};

export default Logo;
