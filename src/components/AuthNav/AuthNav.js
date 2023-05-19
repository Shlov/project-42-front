import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthNavCss, ButtonLogin, PawCss, ButtonRegister } from './AuthNav.styled';

const AuthNav = () => {
const navigate = useNavigate();

return (
<AuthNavCss>
<ButtonLogin onClick={() => navigate('/login')}>
Log IN <PawCss width="21" height="24" />
</ButtonLogin>
<ButtonRegister onClick={() => navigate('/register')}>Registration</ButtonRegister>
</AuthNavCss>
);
};

export default AuthNav;
