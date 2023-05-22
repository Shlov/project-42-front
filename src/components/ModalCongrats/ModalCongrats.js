import { ModalAprooveAction } from 'components/ModalApproveAction/ModalApproveAction';
import { useState } from 'react';

import icons from 'images/icons.svg';
import {
  PawPrint,
  DescrModal,
  ModalContent,
  TitleModal,
  Button,
} from './ModalCongrats.styled';

export const ModalCongrats = () => {
    // toggleModal, яку потрібно передати компоненту ModalAprooveActionб для закриття вікна
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(isOpen => !isOpen);
  };

//   const handleAction = () => {
//     console.log('Передаємо екшн');
//   };

  return (
    <>
      {isOpenModal && (
        <ModalAprooveAction onClose={toggleModal}>
          <ModalContent>
            <TitleModal>Congrats!</TitleModal>
            <DescrModal>Youre registration is success</DescrModal>

            <Button
              type="button"
              aria-label="go to profile"
              onClick={toggleModal}
            >
              Go to profile
              <PawPrint>
                <use href={icons + '#pawprint'} />
              </PawPrint>
            </Button>
          </ModalContent>
        </ModalAprooveAction>
      )}
      <button
        type="button"
        style={{ marginBottom: '200px', backgroundColor: '#CDDC39' }}
        onClick={toggleModal}
      >
        Temporary Open ModalCongrats
      </button>
    </>
  );
};
