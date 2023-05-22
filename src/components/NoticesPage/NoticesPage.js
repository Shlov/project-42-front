// Компонент рендериться на маршрут /notices/:categoryName
// Компонент рендерить:
//   - форму пошуку NoticesSearch
//   - блок навігації NoticesCategoriesNav
//   - блок з фільтрами NoticesFilters
//   - список оголошень NoticesCategoriesList
//   - елемент навігації Add pet - переадресовує авторизованого користувача на сторінку AddPetPage
// Під час першого входу на сторінку користувача повинно переадресовувати на маршрут /notices/sell та рендеритися список оголошень з продажу

import { ModalAprooveAction } from 'components/ModalApproveAction/ModalApproveAction';
import { useState } from 'react';
import {
  Button,
  ButtonWrap,
  DescrModal,
  ModalContent,
  TitleModal,
  Trash,
} from './NoticesPage.styled';
import icons from 'images/icons.svg';
import { NoticeCategoryList } from 'components/NoticesCategoriesList/NoticesCategoriesList';

export const NoticesPage = () => {
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
      <NoticeCategoryList onTrashModal={toggleModal}/>
      {isOpenModal && (
        <ModalAprooveAction onClose={toggleModal}>
          <ModalContent>
            <TitleModal>Delete adverstiment?</TitleModal>
            <DescrModal>
              Are you sure you want to delete{' '}
              <strong>
                “Cute dog looking
                <br /> for a home”?
              </strong>
              <br />
              You can`t undo this action.
            </DescrModal>
            <ButtonWrap>
              <Button type="button" aria-label="cancel" onClick={toggleModal}>
                Cancel
              </Button>
              <Button type="button" aria-label="yes" onClick={handleAction}>
                Yes
                <Trash>
                  <use href={icons + '#trash'} />
                </Trash>
              </Button>
            </ButtonWrap>
          </ModalContent>
        </ModalAprooveAction>
      )}
    </>
  );
};
