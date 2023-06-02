import LogoIcon from '../../images/icons/logo.svg';
import LogoIconDark from '../../images/icons/logo-dark.svg';
import { Link } from 'react-router-dom';
import { LogoImg } from './Logo.styled';
import { useSelector } from 'react-redux';


const Logo = () => {
  const theme = useSelector(state => state.main.theme);
  return (
    <Link to="/">
      {theme === "day"
      ? <LogoImg src={LogoIcon} alt="YOUR PET LOGO" />
      : <LogoImg src={LogoIconDark} alt="YOUR PET LOGO" />
      }
    </Link>
  );
};

export default Logo;
