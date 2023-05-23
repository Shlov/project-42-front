import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import icons from 'images/icons.svg';
import { AuthNavCss, ButtonLogin, PawCss, ButtonRegister } from './AuthNav.styled';

const AuthNav = ({ setActiveBridge, desktop }) => {
  const [isIconLoaded, setIsIconLoaded] = useState(false);

  useEffect(() => {
    const iconImage = new Image();
    iconImage.src = icons;
    iconImage.onload = () => {
      setIsIconLoaded(true);
    };
  }, []);

  const handleCloseMenu = () => {
    if (!desktop) {
      setActiveBridge(false);
    }
  };

  return (
    <AuthNavCss>
      <Link to="/login" onClick={handleCloseMenu}>
        <ButtonLogin>
          Log IN{' '}
          {isIconLoaded && (
            <PawCss width={21} height={24}>
              <use href={icons + '#pawprint'} />
            </PawCss>
          )}
        </ButtonLogin>
      </Link>
      <Link to="/register" onClick={handleCloseMenu}>
        <ButtonRegister>Registration</ButtonRegister>
      </Link>
    </AuthNavCss>
  );
};

export default AuthNav;