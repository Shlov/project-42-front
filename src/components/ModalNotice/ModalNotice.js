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
  ContactBlur,
  ContactBtn,
  HeartIcon,
  Image,
  ImageWrapper,
  ItemProp,
  ListContact,
  ListProperty,
  ModalContent,
  NameProp,
  Price,
  PriceValue,
  PriceWrap,
  SignProp,
  TitleModal,
} from './ModalNotice.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchNotice, updateFavorite } from 'Redux/notices/operation';
import { getIsLoadNotice, getNotice, selectFavorites } from 'Redux/notices/selector';
import { selectUser } from 'Redux/auth/selector';

export const ModalNotice = ({ onClose, noticeId }) => {
  const [withoutBlur, setWithoutBlur] = useState(0);
  // const [isFavorite, setIsFavirite] = useState(false);
  // console.log(withoutBlur);

  // const handleFavorite = () => {
  //   setIsFavirite(isFavorite => !isFavorite);

  //   if (!isFavorite) {
  //     console.log('Favirite true');
  //     console.log(isFavorite);
  //     toast.success('Pet has been added to favorites!', {
  //       style: {
  //         backgroundColor: '#fef9f9',
  //         padding: '6px',
  //         color: `'#111111'`,
  //       },
  //       icon: '💗',
  //     });
  //   } else {
  //     console.log('Favirite false');
  //     console.log(isFavorite);
  //     toast.success('Pet has been removed from favorites!', {
  //       style: {
  //         backgroundColor: '#fef9f9',
  //         padding: '6px',
  //         color: `'#111111'`,
  //       },
  //       icon: '😿',
  //     });
  //   }
  // };

  const handleBlurContacts = () => {
    setWithoutBlur(withoutBlur + 1);
  };

  const dispatch = useDispatch();
  const {
    imageURL,
    categories,
    name,
    birthday,
    breed,
    place,
    sex,
    comments,
    price,
  } = useSelector(getNotice);
  const isLoading = useSelector(getIsLoadNotice);

  const inUsersFavorites = useSelector(selectFavorites);
  console.log(inUsersFavorites);

  const userId = useSelector(selectUser).id
  console.log(userId)

  // const userId = '646f0e3366cea3f192faca83'

  const isFavorite = inUsersFavorites.includes(userId)
  console.log(isFavorite)

  useEffect(() => {
    dispatch(fetchNotice(noticeId));
  }, [dispatch, noticeId]);

  const handleFavorite = () => {
        dispatch(updateFavorite({noticeId, userId}));
  };

  return (
    <>
      <ModalApproveAction onClose={onClose} width>
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
                <TitleModal>Cute pet looking for a home</TitleModal>
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
                <ItemProp>
                  <NameProp>Email:</NameProp>
                  {!withoutBlur ? (
                    <ContactBlur href="mailto:user@mail.com">
                      user@mail.com
                    </ContactBlur>
                  ) : (
                    <Contact href="mailto:user@mail.com">user@mail.com</Contact>
                  )}
                </ItemProp>
                <ItemProp>
                  <NameProp>Phone:</NameProp>
                  {!withoutBlur ? (
                    <ContactBlur href="tel:+380971234567" aria-label="phone">
                      +380971234567
                    </ContactBlur>
                  ) : (
                    <Contact href="tel:+380971234567" aria-label="phone">
                      +380971234567
                    </Contact>
                  )}
                </ItemProp>
              </ListContact>
            </div>
            {/* <CommentWrap>
              <span>Comments:&nbsp;</span>
              <span>
                Rich would be the perfect addition to an active family that
                loves to play and go on walks. I bet he would love having a
                doggy playmate too!{' '}
              </span>
            </CommentWrap> */}
            {comments ? (
              <CommentWrap>
                <span>Comments:&nbsp;</span>
                <span>{comments}</span>
              </CommentWrap>
            ) : (
              <CommentWrap></CommentWrap>
            )}
            {/* <PriceProp> <Price>Place:</Price>
                  <Value>{price ? price : 'invaluable'}</Value></PriceProp> */}
            <ButtonWrapThumb>
              {price ? (
                <PriceWrap price>
                  <Price>Price:</Price>
                  <PriceValue>{price}</PriceValue>
                </PriceWrap>
              ) : (
                <PriceWrap>
                  <Price></Price>
                  <PriceValue></PriceValue>
                </PriceWrap>
              )}
              <ButtonWrap>
                {/* <ContactBtn href="tel:+380971234567" aria-label="phone button"> */}
                <ContactBtn
                  type="button"
                  aria-label="show contact button"
                  onClick={handleBlurContacts}
                >
                  Contact
                </ContactBtn>
                <Button
                  type="button"
                  aria-label="Add to favorite"
                  onClick={handleFavorite}
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
};
