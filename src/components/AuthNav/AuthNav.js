import React from 'react';
import { Link } from "react-router-dom";

import { AuthNavCss, ButtonLogin, PawCss, ButtonRegister } from './AuthNav.styled';

const AuthNav = ({ setActiveBridge, desktop }) => {
    
    const handleCloseMenu = () => {
    if(!desktop) {
      setActiveBridge(false)
    }
  }

    return (
        <AuthNavCss>
            <Link to={"/login"} onClick={handleCloseMenu}>
            <ButtonLogin>
                Log IN <PawCss width="21" height="24" />
                </ButtonLogin>
            </Link>
            <Link  to={"/register"} onClick={handleCloseMenu}>
                <ButtonRegister>Registration</ButtonRegister>
           </Link>
        </AuthNavCss>
        
);
};

export default AuthNav;
