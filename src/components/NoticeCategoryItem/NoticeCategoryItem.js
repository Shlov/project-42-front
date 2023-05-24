// Компонент рендерить елемент списку оголошень, карточку одного оголошення з кнопками іконка-серце (AddToFavorite) та LearnMore
// Клік по: 
//   - іконці-серцю (AddToFavorite):
//      - якщо користувач АВТОРИЗОВАНИЙ - в залежності від того, чи додано відповідне оголошення в обрані, по кліку користувач додає оголошення в обрані або видаляє з них
//      - якщо користувач НЕАВТОРИЗОВАНИЙ, користувачу повинно виводитись повідомлення типу нотіфікація з інформацією про те, що користувачу потрібно авторизуватися для використання даного функціоналу
//   - LearnMore - відкриває користувачу модалку з детальним описом даного оголошення - NoticeModal

// Авторизований користувач

// Компонент рендерить кнопку для видалення оголошення, якщо дане оголошення створене цим користувачем. 
// Клік по кнопці відкриває модальне вікно  ModalApproveAction


import { Card, FavoriteBtn, DeleteBtn, CategoryTag, ImageWrapper, DescriptionWrapper, Title, Image, TagItem, TagList, MoreBtn, SvgIcon, HeartIcon, TrashIcon } from "./NoticeCategoryItem.styled";

import icon from '../../images/icons.svg';
import { useState } from "react";
import { ModalNotice } from "components/ModalNotice/ModalNotice";

export const NoticeCategoryItem = ({onTrashModal, item}) => {

  const active = false


  const agePet = (birthday) => {
    const nowDate = new Date();
    const [month, day, year] = birthday.split('.');
    const birthDate = new Date (`${Number(month)-1},${Number(day)},${Number(year)}`);

    const differenceYear = nowDate.getFullYear() - birthDate.getFullYear();
    const differenceMonth = 12 - birthDate.getMonth()+ 1 + nowDate.getMonth() + 1;
    const differenceDay = 30.44 - birthDate.getDay() + nowDate.getDay();

    if ((differenceMonth > 12 && differenceYear > 0) || differenceYear > 1 ) {
      return `${differenceYear} year`
    } else if (differenceYear === 0 && differenceMonth === 0 && differenceDay < 30) {
      return `${Math.floor(differenceDay/7)} week`
    } else {
      return `${differenceMonth} month`
    };
  }

  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(isOpen => !isOpen);
  };


  return(
    <>
      <Card>
        <ImageWrapper>
          <Image alt="pet" src={item.imageURL ? item.imageURL : "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgGi3YJI2iukoOZ3_fbYCyoiR4dYO8fIyIu_qpphSUf8GRAmFN"}/>
          <CategoryTag>{item.categories ? item.categories : 'categories'}</CategoryTag>
          <TagList>
            <TagItem>
              <SvgIcon height="20" width="20">
                <use href={icon + "#location"}/>
              </SvgIcon>
              <p>{item.place ? item.place : 'city'}</p>
            </TagItem>
            <TagItem>
              <SvgIcon height="20" width="20">
                <use href={icon + "#clock"}/>
              </SvgIcon>
              <p>{item.birthday ? agePet(item.birthday) : 'age'}</p>
            </TagItem>
            <TagItem>
              <SvgIcon height="20" width="20">
                <use href={icon + "#male"}/>
              </SvgIcon>
              <p>{item.sex ? item.sex : 'sex'}</p>
            </TagItem>
          </TagList>
          <FavoriteBtn onClick={()=> console.log('add to favorite')}>
            <HeartIcon height="20" width="20" isActive={active} style={{fill: ""}}>
              <use href={icon + "#heart"}/>
            </HeartIcon>
          </FavoriteBtn>
          <DeleteBtn onClick={onTrashModal}>
            <TrashIcon height="20" width="20" >
              <use href={icon + "#trash"}/>
            </TrashIcon>
          </DeleteBtn>
        </ImageWrapper>

        <DescriptionWrapper>
          <Title>{item.title ? item.title : 'Cute fox looking for a home'}</Title>
          <MoreBtn onClick={toggleModal}>Learn more</MoreBtn>
        </DescriptionWrapper>
        {isOpenModal&& <ModalNotice onClose={toggleModal} notice={item}/>}
      </Card>
    </>
  )
}