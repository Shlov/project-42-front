import { ModalApproveAction } from 'components/ModalApproveAction/ModalApproveAction';
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
    // toggleModal, яку потрібно передати компоненту ModalApproveAction для закриття вікна
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(isOpen => !isOpen);
  };

  return (
    <>

      {!isOpenModal && (
        <ModalApproveAction onClose={toggleModal}> 
          <ModalContent>
            <TitleModal>Congrats!</TitleModal>
            <DescrModal>You`re registration is success</DescrModal>

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
        </ModalApproveAction>
      )}
    </>
  );
};
