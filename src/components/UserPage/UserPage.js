// "Компонент рендериться на маршрут /user
// Компонент рендерить сторінку з компонентами UserData, Logout та PetsData.
// Компоненти UserData та  Logout потрібно реалізувати в спільному контейнері."

import { ModalApproveAction } from 'components/ModalApproveAction/ModalApproveAction';
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
  //   toggleModal, яку потрібно передати компоненту ModalApproveAction для закриття вікна
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsOpenModal(isOpen => !isOpen);
  };

  const handleAction = () => {
    console.log('Юзер розлогінився');
    dispatch(logOut());
  };

  return (
    <>
      {isOpenModal && (
        <ModalApproveAction onClose={toggleModal} height="302px">
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
        </ModalApproveAction>
      )}

      <BtnLogout type="button" onClick={toggleModal}>
        <img src={LogoutIcon} alt="Button logout" />
        LogOut
      </BtnLogout>

      <ModalCongrats />
    </>
  );
};
