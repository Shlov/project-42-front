// Компонент рендерить елемент списку оголошень, карточку одного оголошення з кнопками іконка-серце (AddToFavorite) та LearnMore
// Клік по: 
//   - іконці-серцю (AddToFavorite):
//      - якщо користувач АВТОРИЗОВАНИЙ - в залежності від того, чи додано відповідне оголошення в обрані, по кліку користувач додає оголошення в обрані або видаляє з них
//      - якщо користувач НЕАВТОРИЗОВАНИЙ, користувачу повинно виводитись повідомлення типу нотіфікація з інформацією про те, що користувачу потрібно авторизуватися для використання даного функціоналу
//   - LearnMore - відкриває користувачу модалку з детальним описом даного оголошення - NoticeModal

// Авторизований користувач

// Компонент рендерить кнопку для видалення оголошення, якщо дане оголошення створене цим користувачем. 
// Клік по кнопці відкриває модальне вікно  ModalApproveAction


import { Card, FavoriteBtn, DeleteBtn, CategoryTag, ImageWrapper, DescriptionWrapper, Title, Image, TagItem, TagList, MoreBtn, SvgIcon, HeartIcon } from "./NoticeCategoryItem.styled";

import icon from '../../images/icons.svg';
import { useState } from "react";
import { ModalNotice } from "components/ModalNotice/ModalNotice";

export const NoticeCategoryItem = ({onTrashModal}) => {

  const active = false

  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(isOpen => !isOpen);
  };


  return(
    <>
      <Card>
        <ImageWrapper>
          <Image alt="pet" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgGi3YJI2iukoOZ3_fbYCyoiR4dYO8fIyIu_qpphSUf8GRAmFN"/>
          <CategoryTag>In good hands</CategoryTag>
          <TagList>
            <TagItem>
              <SvgIcon height="20" width="20">
                <use href={icon + "#location"}/>
              </SvgIcon>
              <p>Lviv</p>
            </TagItem>
            <TagItem>
              <SvgIcon height="20" width="20">
                <use href={icon + "#clock"}/>
              </SvgIcon>
              <p>1 year</p>
            </TagItem>
            <TagItem>
              <SvgIcon height="20" width="20">
                <use href={icon + "#male"}/>
              </SvgIcon>
              <p>female</p>
            </TagItem>
          </TagList>
          <FavoriteBtn onClick={()=> console.log('add to favorite')}>
            <HeartIcon height="20" width="20" isActive={active} style={{fill: ""}}>
              <use href={icon + "#heart"}/>
            </HeartIcon>
          </FavoriteBtn>
          <DeleteBtn onClick={onTrashModal}>
            <HeartIcon height="20" width="20" >
              <use href={icon + "#trash"}/>
            </HeartIcon>
          </DeleteBtn>
        </ImageWrapper>

        <DescriptionWrapper>
          <Title>Cute fox looking for a home</Title>
          <MoreBtn onClick={toggleModal}>Learn more</MoreBtn>
        </DescriptionWrapper>

        {isOpenModal&& <ModalNotice onClose={toggleModal}/>}
      </Card>
    </>
  )
}