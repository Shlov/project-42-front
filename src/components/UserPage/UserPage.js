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
} from './UserPage.styled';
import icons from 'images/icons.svg';

export const UserPage = () => {
  //   toggleModal, яку потрібно передати компоненту ModalAprooveActionб для закриття вікна
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(isOpen => !isOpen);
  };

  const handleAction = () => {
    console.log('Передаємо екшн');
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
      <button
        type="button"
        style={{ marginBottom: '200px', backgroundColor: '#CDDC39' }}
        onClick={toggleModal}
      >
        Temporary Open Modal
      </button>
    </>
  );
};
