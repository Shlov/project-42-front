// Компонент рендерить модальне вікно з повним описом відповідного оголошення та компонентами AddToFavorite та Contact
// Елементи з контактною інформацією (email,  телефон) автора оголошення повинні бути реалізовані у вигляді посилань з додаванням ефекту :hover.                                                                                       Клік по кнопці AddToFavorite:
//         - якщо користувач АВТОРИЗОВАНИЙ - в залежності від того, чи додано відповідне оголошення в обрані, по кліку користувач додає оголошення в обрані або видаляє з них
//         - якщо користувач НЕАВТОРИЗОВАНИЙ, користувачу повинно виводитьсь повідомлення типу нотіфікація з інформацією про те, що користувачу потрібно авторизуватися для використання даного функціоналу
// Кнопка Contact повинна бути реалізована як посилання, при натисканні на яку користувача повинно переадресувати користувача на мобільний пристрій для виконання телефонного дзвінка по номеру користувача, що створив оголошення
// Модалка повинна закриватись по кліку на кнопку закриття модалки, клік по бекдропу, а також клік по Escape

import PropTypes from 'prop-types';
import { ModalApproveAction } from 'components/ModalApproveAction/ModalApproveAction';
// import { useState } from 'react';

export const ModalNotice = ({ onClose }) => {
  return (
    <>
      <ModalApproveAction onClose={onClose} height="786px">
        <h2>Here will be notice</h2>
        <img alt="pet" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgGi3YJI2iukoOZ3_fbYCyoiR4dYO8fIyIu_qpphSUf8GRAmFN"/>
      </ModalApproveAction>
    </>
  );
};

ModalNotice.propTypes = {
  onClose: PropTypes.func.isRequired,
};