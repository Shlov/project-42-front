// "Компонент рендериться на маршрут /user
// Компонент рендерить сторінку з компонентами UserData, Logout та PetsData.
// Компоненти UserData та  Logout потрібно реалізувати в спільному контейнері."

import { ModalAprooveAction } from 'components/ModalApproveAction/ModalApproveAction';
import { useState } from 'react';
import {
  Arrow,
  Button,
  ButtonWrap,
  ModalContent,
  TitleModal,
  BtnLogout,
} from './UserPage.styled';

import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/auth/operation';

import LogoutIcon from '../../images/icons/logout.svg';
import icons from 'images/icons.svg';
import { ModalCongrats } from 'components/ModalCongrats/ModalCongrats';

export const UserPage = () => {
  //   toggleModal, яку потрібно передати компоненту ModalAprooveActionб для закриття вікна
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsOpenModal(isOpen => !isOpen);
  };

  const handleAction = () => {
    console.log('Передаємо екшн');
    dispatch(logOut());
  };

  return (
    <>
      {isOpenModal && (
        <ModalAprooveAction onClose={toggleModal}>
          <ModalContent>
            <TitleModal>Already leaving?</TitleModal>
            <ButtonWrap>
              <Button type="button" aria-label="cancel" onClick={toggleModal}>
                Cancel
              </Button>
              <Button type="button" aria-label="yes" onClick={handleAction}>
                Yes
                <Arrow>
                  <use href={icons + '#logout'} />
                </Arrow>
              </Button>
            </ButtonWrap>
          </ModalContent>
        </ModalAprooveAction>
      )}

      <BtnLogout type="button" onClick={toggleModal}>
        <img src={LogoutIcon} alt="Button logout" />
        LogOut
      </BtnLogout>

      <ModalCongrats />
    </>
  );
};
