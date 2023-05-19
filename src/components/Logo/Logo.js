import LogoIcon from '../../images/icons/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <img src={LogoIcon} alt="YOUR PET LOGO" />
    </Link>
  );
};

export default Logo;
