import LogoIcon from '../../images/icons/logo.svg';

// Компонент, який відображає логотип додатку, переадресовує на сторінку MainPage за маршрутом /main (публічний-необмежений)
const Logo = () => {
  return (
    <img src={LogoIcon} alt="" />
  )
}

export default Logo;
