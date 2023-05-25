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
  ArrowBack,
} from './Logout.styled';

import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/auth/operation';

import icons from 'images/icons.svg';
// import { ModalCongrats } from 'components/ModalCongrats/ModalCongrats';

export const LogoutBtn = () => {
  //   toggleModal, яку потрібно передати компоненту ModalApproveAction для закриття вікна
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
      <ArrowBack><use href={icons + '#logout'}/></ArrowBack>
        LogOut
      </BtnLogout>

      {/* <ModalCongrats /> */}
    </>
  );
};
