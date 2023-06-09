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
import { useSelector } from 'react-redux';


export const ModalCongrats = () => {
    // toggleModal, яку потрібно передати компоненту ModalApproveAction для закриття вікна
  const [isOpenModal, setIsOpenModal] = useState(false);
  const theme = useSelector(state => state.main.theme)

  const toggleModal = () => {
    setIsOpenModal(isOpen => !isOpen);
  };

  return (
    <>
      {!isOpenModal &&
        <ModalApproveAction onClose={toggleModal}> 
          <ModalContent>
            <TitleModal theme={theme}>Congrats!</TitleModal>
            <DescrModal theme={theme}>Your registration is successful</DescrModal>

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
      }
    </>
  );
};
