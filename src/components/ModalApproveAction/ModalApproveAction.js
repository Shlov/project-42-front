// Перевикористовуємий компонент, що рендерить у модальному вікні питання, отримане у вигляді childrens,
// та 2 функціональні кнопки. Модальне вікно повинно закриватись по кліку на кнопку Cancel,
// по кліку на кнопку закриття, клік по бекдропу, а також клік по Escape.
// По кліку на Yes необхідно викликати функцію, передану в ModalApproveAction у вигляді props на випадок згоди користувача

import PropTypes from 'prop-types';
import { useEffect } from 'react';
// import { ReactComponent as CloseIcon } from '../../images/icons/cross-small.svg';
import { Button, Modal, Overlay } from './ModalApproveAction.styled';
import { CloseISlyled } from './ModalApproveAction.styled';

export const ModalAprooveAction = ({ children, onClose }) => {

//   пропс onClose це функція toggleModal, 
//   яку потрібно передати компоненту ModalAprooveAction
//   toggleModal - змінює стейт isOpen


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
          <Button type="button" apia-label="close" onClick={onClose}>
            <CloseISlyled />
          </Button>
          <div>{children}</div>
        </Modal>
      </Overlay>
    </>
  );
};

ModalAprooveAction.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

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

// const [...args] = children;
// console.log(args);
// {/* <>
// // <Overlay onClick={onBackdropClose}>
// //   <Modal>
// //     <div>
// //       <div>
// //         <button onClick={onClose}>X</button>
// //       </div>{' '}
// //       <div>
// //         <h2>{args[0]}</h2>
// //         <div>
// //           <p>{args[1]} </p>
// //           <p>
// //             <strong>{args[2]}</strong>
// //           </p>
// //           <p>{args[3]}</p>
// //         </div>
// //       </div>
// //       <button type="button" aria-label="cansel action" onClick={onClose}>
// //         Cancel
// //       </button>
// //       <Button
// //         type="button"
// //         aria-label="approval action"
// //         onClick={onChange}
// //       >
// //         {' '}

// //         {/* <svg width="24" height="24">
// //           <use href="../../images/icons/icons.svg#arrow-left"></use>
// //         </svg>
// або
// <svg width="24" height="24">
// <use href={sprite + "#cross-small"}></use>
// </svg>
// */}
//         Yes
//         {children.length > 1? <TrashSlyled/> : <ArrowLeft/>}
//       </Button>
//     </div>
//   </Modal>
// </Overlay>
// </> */}
