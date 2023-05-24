// Компонент рендерить модальне вікно з повним описом відповідного оголошення та компонентами AddToFavorite та Contact
// Елементи з контактною інформацією (email,  телефон) автора оголошення повинні бути реалізовані у вигляді посилань з додаванням ефекту :hover.                                                                                       Клік по кнопці AddToFavorite:
//         - якщо користувач АВТОРИЗОВАНИЙ - в залежності від того, чи додано відповідне оголошення в обрані, по кліку користувач додає оголошення в обрані або видаляє з них
//         - якщо користувач НЕАВТОРИЗОВАНИЙ, користувачу повинно виводитьсь повідомлення типу нотіфікація з інформацією про те, що користувачу потрібно авторизуватися для використання даного функціоналу
// Кнопка Contact повинна бути реалізована як посилання, при натисканні на яку користувача повинно переадресувати користувача на мобільний пристрій для виконання телефонного дзвінка по номеру користувача, що створив оголошення
// Модалка повинна закриватись по кліку на кнопку закриття модалки, клік по бекдропу, а також клік по Escape

import PropTypes from 'prop-types';
import icons from '../../images/icons.svg';
import { ModalApproveAction } from 'components/ModalApproveAction/ModalApproveAction';
import {
  Button,
  ButtonWrap,
  ButtonWrapThumb,
  CategoryTag,
  CommentWrap,
  Contact,
  ContactBtn,
  HeartIcon,
  Image,
  ImageWrapper,
  ItemContact,
  ItemProp,
  ListContact,
  ListProperty,
  ModalContent,
  NameProp,
  SignContact,
  SignProp,
  TitleModal,
} from './ModalNotice.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchNotice } from 'Redux/notices/operation';
import { getIsLoadNotice, getNotice } from 'Redux/notices/selector';

export const ModalNotice = ({ onClose }) => {
  // const { imageURL, categories, name, birthday, breed, place, sex, comments } =
  //   notice;
  const handleChange = () => {
    console.log('User додав тваринку у favorite');
  };

  const dispatch = useDispatch();
  const { imageURL, categories, name, birthday, breed, place, sex, comments } = useSelector(getNotice);
  const isLoading = useSelector(getIsLoadNotice);

  // в функцію fetchNotice треба буде прокинути id відкриваємої notice
  // поки бек не віддає без авторизованого користувача
  useEffect(() => {
    dispatch(fetchNotice('646bd2bea5e6d2026f0414bf'));
  }, [dispatch]);
  //

  return (
    <>
      <ModalApproveAction onClose={onClose} height="786px">
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <ModalContent>
            <ImageWrapper>
              <Image
                alt="pet.name"
                src={
                  imageURL
                    ? imageURL
                    : 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgGi3YJI2iukoOZ3_fbYCyoiR4dYO8fIyIu_qpphSUf8GRAmFN'
                }
              />
              <CategoryTag>
                {categories ? categories : 'categories'}
              </CategoryTag>
            </ImageWrapper>
            <div>
              <div>
                <TitleModal>Cute dog looking for a home</TitleModal>
              </div>
              <ListProperty>
                <ItemProp>
                  <NameProp>Name:</NameProp>
                  <SignProp>{name ? name : 'Pet'}</SignProp>
                </ItemProp>
                <ItemProp>
                  <NameProp>Birthday:</NameProp>
                  <SignProp>{birthday ? birthday : 'find'}</SignProp>
                </ItemProp>
                <ItemProp>
                  <NameProp>NameBreed:</NameProp>
                  <SignProp>{breed ? breed : 'superior'}</SignProp>
                </ItemProp>
                <ItemProp>
                  <NameProp>Place:</NameProp>
                  <SignProp>{place ? place : 'find'}</SignProp>
                </ItemProp>
                <ItemProp>
                  <NameProp>The sex:</NameProp>
                  <SignProp>{sex ? sex : 'sex'}</SignProp>
                </ItemProp>
              </ListProperty>
              <ListContact>
                <ItemContact>
                  <Contact>Email:</Contact>
                  <SignContact href="mailto:user@mail.com">
                    user@mail.com
                  </SignContact>
                </ItemContact>
                <ItemContact>
                  <Contact>Phone:</Contact>
                  <SignContact href="tel:+380971234567" aria-label="phone">
                    +380971234567
                  </SignContact>
                </ItemContact>
              </ListContact>
            </div>
            {/* {<CommentWrap>
              <span>Comments:&nbsp;</span><span>Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too! </span>
            </CommentWrap> } */}
            {comments ? (
              <CommentWrap>
                <span>Comments:&nbsp;</span>
                <span>comments</span>
              </CommentWrap>
            ) : null}
            <ButtonWrapThumb>
              <ButtonWrap>
                <ContactBtn href="tel:+380971234567" aria-label="phone button">
                  Contact
                </ContactBtn>
                <Button
                  type="button"
                  aria-label="Add to favorite"
                  onClick={handleChange}
                >
                  Add to
                  <HeartIcon>
                    <use href={icons + '#heart'}></use>
                  </HeartIcon>
                </Button>
              </ButtonWrap>
            </ButtonWrapThumb>
          </ModalContent>
        )}
      </ModalApproveAction>
    </>
  );
};

ModalNotice.propTypes = {
  onClose: PropTypes.func.isRequired,
  // notice: PropTypes.shape({
  //   imageURL: PropTypes.string,
  //   categories: PropTypes.string,
  //   name: PropTypes.string,
  //   birthday: PropTypes.string,
  //   breed: PropTypes.string,
  //   place: PropTypes.string,
  //   sex: PropTypes.string,
  //   comments: PropTypes.string,
  // }).isRequired,
};
