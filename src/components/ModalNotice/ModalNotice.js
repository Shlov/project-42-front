// Компонент рендерить модальне вікно з повним описом відповідного оголошення та компонентами AddToFavorite та Contact
// Елементи з контактною інформацією (email,  телефон) автора оголошення повинні бути реалізовані у вигляді посилань з додаванням ефекту :hover.                                                                                       Клік по кнопці AddToFavorite:
//         - якщо користувач АВТОРИЗОВАНИЙ - в залежності від того, чи додано відповідне оголошення в обрані, по кліку користувач додає оголошення в обрані або видаляє з них
//         - якщо користувач НЕАВТОРИЗОВАНИЙ, користувачу повинно виводитьсь повідомлення типу нотіфікація з інформацією про те, що користувачу потрібно авторизуватися для використання даного функціоналу
// Кнопка Contact повинна бути реалізована як посилання, при натисканні на яку користувача повинно переадресувати користувача на мобільний пристрій для виконання телефонного дзвінка по номеру користувача, що створив оголошення
// Модалка повинна закриватись по кліку на кнопку закриття модалки, клік по бекдропу, а також клік по Escape

// import PropTypes from 'prop-types';
import icons from '../../images/icons.svg';
import { ModalApproveAction } from 'components/ModalApproveAction/ModalApproveAction';
import {
  Button,
  ButtonWrap,
  CategoryTag,
  CommentWrap,
  Contact,
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

export const ModalNotice = ({ onClose, notice}) => {
const {imageURL, categories, name,birthday, place, sex } = notice
const handleChange = () => {
console.log("User додав тваринку у favorite")
}

  return (
    <>
      <ModalApproveAction onClose={onClose} height="786px">
        <ModalContent>
          <ImageWrapper>
            <Image
              alt="pet.name"
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgGi3YJI2iukoOZ3_fbYCyoiR4dYO8fIyIu_qpphSUf8GRAmFN"
            />
            <CategoryTag>In good hands</CategoryTag>
          </ImageWrapper>

          <TitleModal>Cute dog looking for a home</TitleModal>
          <ListProperty>
            <ItemProp>
              <NameProp>Name:</NameProp>
              <SignProp>Rich</SignProp>
            </ItemProp>
            <ItemProp>
              <NameProp>Birthday:</NameProp>
              <SignProp>21.09.2020</SignProp>
            </ItemProp>
            <ItemProp>
              <NameProp>NameBreed:</NameProp>
              <SignProp>Pomeranian</SignProp>
            </ItemProp>
            <ItemProp>
              <NameProp>Place:</NameProp>
              <SignProp>Lviv</SignProp>
            </ItemProp>
            <ItemProp>
              <NameProp>The sex:</NameProp>
              <SignProp>male</SignProp>
            </ItemProp>

            <ListContact>
              <ItemContact>
                <Contact>Email:</Contact>
                <SignContact href="mailto:user@mail.com">user@mail.com</SignContact>
              </ItemContact>
              <ItemContact>
                <Contact>Phone:</Contact>
                <SignContact href="tel:+380971234567" aria-label="phone">
                  +380971234567
                </SignContact>
              </ItemContact>
            </ListContact>

            <CommentWrap>
              <span>Comments:&nbsp;</span><span>Rich would be the perfect addition to an active family that
                loves to play and go on walks. I bet he would love having a
                doggy playmate too!</span>
            </CommentWrap>
            <ButtonWrap>
              <Button href="tel:+380971234567" aria-label="phone">
                Contact
              </Button>
              <Button type="button" aria-label="Add to favorite" onChange={handleChange}>
                Add to
                <HeartIcon>
                  <use href={icons + '#heart'}></use>
                </HeartIcon>
              </Button>
            </ButtonWrap>
          </ListProperty>
        </ModalContent>
      </ModalApproveAction>
    </>
  );
};

// ModalNotice.propTypes = {
//   onClose: PropTypes.func.isRequired,
// };
