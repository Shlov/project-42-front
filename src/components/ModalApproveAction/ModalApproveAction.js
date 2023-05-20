// Перевикористовуємий компонент, що рендерить у модальному вікні питання, отримане у вигляді childrens,
// та 2 функціональні кнопки. Модальне вікно повинно закриватись по кліку на кнопку Cancel,
// по кліку на кнопку закриття, клік по бекдропу, а також клік по Escape.
// По кліку на Yes необхідно викликати функцію, передану в ModalApproveAction у вигляді props на випадок згоди користувача


// Добавити в Арр для тестування роботи вікна

// import { ModalAprooveAction } from './ModalApproveAction/ModalApproveAction';

// <ModalAprooveAction
//childrens={[
//  'Delete adverstiment?',
//  'Are you sure you want to delete',
//  '“Cute dog looking\n for a home”?',
//  '\nYou can`t undo this action.',
//]}
// childrens={[
//   'Already leaving'
// ]}
//></ModalAprooveAction>



import PropTypes from 'prop-types';
import { useEffect } from 'react';
// import svgIcon from '../../images/icons/arrow-left.svg';
import {ReactComponent as ArrowLeft} from "../../images/icons/arrow-left.svg"
import { Button, Modal, Overlay, TrashSlyled } from './ModalApproveAction.styled';

export const ModalAprooveAction = ({ childrens, onChange, onClose }) => {
  //   const [isOpenModal, setIsOpenModal] = useState(false);
  //   пропс onClose це функція toggleModal, яку потрібно передати компоненту ModalAprooveAction
  //   const toggleModal = () => {
  //     setIsOpenModal(isOpen => !isOpen);
  //   };

  const [...args] = childrens;
  //   console.log(args);

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
        <Modal>
          <div>
            <div>
              <button onClick={onClose}>X</button>
            </div>{' '}
            <div>
              <h2>{args[0]}</h2>
              <div>
                <p>{args[1]} </p>
                <p>
                  <strong>{args[2]}</strong>
                </p>
                <p>{args[3]}</p>
              </div>
            </div>
            <button type="button" aria-label="cansel action" onClick={onClose}>
              Cancel
            </button>
            <Button
              type="button"
              aria-label="approval action"
              onClick={onChange}
            >
              {' '}
              
              {/* <svg width="24" height="24">
                <use href="../../images/icons/icons.svg#arrow-left"></use>
              </svg> */}
              Yes
              {childrens.length > 1? <TrashSlyled/> : <ArrowLeft/>}
            </Button>
          </div>
        </Modal>
      </Overlay>
    </>
  );
};

ModalAprooveAction.propTypes = {
  onClose: PropTypes.func,
  onChange: PropTypes.func,
  question: PropTypes.string,
  //   onClose: PropTypes.func.isRequired,
  //   onChange: PropTypes.func.isRequired,
  //   question: PropTypes.string.isRequired,
};
