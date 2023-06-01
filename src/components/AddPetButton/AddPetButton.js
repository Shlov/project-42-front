import {
  Link,
  AddButton,
  AddIcon,
  NavLinkWrapper,
} from './AddPetButton.styled.jsx';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import icons from 'images/icons.svg';
import { getConnect } from 'Redux/auth/selector.js';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ModalApproveAction } from 'components/ModalApproveAction/ModalApproveAction';

import {
  DescrModal,
  ModalContent,
} from './../ModalCongrats/ModalCongrats.styled';

import {
  ButtonLogin,
  ButtonRegister,
  PawCss,
} from 'components/AuthNav/AuthNav.styled.jsx';

const AddPetButton = () => {
  const location = useLocation();
  const isLoggedIn = useSelector(getConnect);
  const mobile = useSelector((state) => state.main.mobile)
  const theme = useSelector((state) => state.main.theme)
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(isOpen => !isOpen);
  };

  const handleUnauthorizedClick = () => {
    setIsOpenModal(true);
  };

  return (
    <>
      {isLoggedIn ? (
        <Link to={`/add-pet`} state={{ from: location }} mobile={mobile} theme={theme}>
          {!mobile && 'Add Pet'}
          <AddIcon mobile={mobile}>
            <use href={icons + '#plus-small'} />
          </AddIcon>
          {mobile && 'Add Pet'}
        </Link>
      ) : (
        <>
          <AddButton type="button" onClick={handleUnauthorizedClick} mobile={mobile} theme={theme}>
            {!mobile && 'Add Pet'}
            <AddIcon mobile={mobile}>
              <use href={icons + '#plus-small'} />
            </AddIcon>
            {mobile && 'Add Pet'}
          </AddButton>
          {isOpenModal && (
            <ModalApproveAction onClose={toggleModal}>
              <ModalContent>
                <DescrModal>
                  Please log in or register to use this functionality.
                </DescrModal>

                <NavLinkWrapper>
                  <NavLink to="/login">
                    <ButtonLogin>
                      Log IN
                      <PawCss width={21} height={24}>
                        <use href={icons + '#pawprint'} />
                      </PawCss>
                    </ButtonLogin>
                  </NavLink>
                  <NavLink to="/register">
                    <ButtonRegister>Registration</ButtonRegister>
                  </NavLink>
                </NavLinkWrapper>
              </ModalContent>
            </ModalApproveAction>
          )}
        </>
      )}
    </>
  );
};

export default AddPetButton;
