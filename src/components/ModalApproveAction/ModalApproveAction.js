// Перевикористовуємий компонент, що рендерить у модальному вікні питання, отримане у вигляді childrens,
// та 2 функціональні кнопки. Модальне вікно повинно закриватись по кліку на кнопку Cancel,
// по кліку на кнопку закриття, клік по бекдропу, а також клік по Escape.
// По кліку на Yes необхідно викликати функцію, передану в ModalApproveAction у вигляді props на випадок згоди користувача

import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Button, CloseIcon, Content, Modal, Overlay } from './ModalApproveAction.styled';
import icons from 'images/icons.svg';

export const ModalApproveAction = ({ children, onClose, height}) => {
  //   пропс onClose це функція toggleModal,
  //   яку потрібно передати компоненту ModalApproveAction
  //   toggleModal - змінює стейт isOpen
console.log(typeof height)
console.log(height)

  const onBackdropClose = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const onEscapeClose = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onEscapeClose);

    return () => {
      window.removeEventListener('keydown', onEscapeClose);
    };
  }, [onClose]);

  return (
    <>
      <Overlay onClick={onBackdropClose}>
        <Modal size={height}>
          <Button type="button" apia-label="close" onClick={onClose}>
            <CloseIcon>
              <use href={icons + '#cross-small'} />
            </CloseIcon>
          </Button>
          <Content>{children}</Content>
        </Modal>
      </Overlay>
    </>
  );
};

ModalApproveAction.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  size: PropTypes.string,
};
