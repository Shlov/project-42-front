// Компонент рендерить елемент списку оголошень, карточку одного оголошення з кнопками іконка-серце (AddToFavorite) та LearnMore
// Клік по: 
//   - іконці-серцю (AddToFavorite):
//      - якщо користувач АВТОРИЗОВАНИЙ - в залежності від того, чи додано відповідне оголошення в обрані, по кліку користувач додає оголошення в обрані або видаляє з них
//      - якщо користувач НЕАВТОРИЗОВАНИЙ, користувачу повинно виводитись повідомлення типу нотіфікація з інформацією про те, що користувачу потрібно авторизуватися для використання даного функціоналу
//   - LearnMore - відкриває користувачу модалку з детальним описом даного оголошення - NoticeModal

// Авторизований користувач

// Компонент рендерить кнопку для видалення оголошення, якщо дане оголошення створене цим користувачем. 
// Клік по кнопці відкриває модальне вікно  ModalApproveAction

import { Card, FavoriteBtn, CategoryTag, ImageWrapper, Image, TagItem, TagList, HeartIcon, MoreBtn } from "./NoticeCategoryItem.styled";
import favoriteIcon from '../../images/icons.svg';
// import { color } from "@cloudinary/transformation-builder-sdk/qualifiers/background";

export const NoticeCategoryItem = () => {

  return(
    <>
      <Card>
        <ImageWrapper>
          <Image/>
          <CategoryTag>In good hands</CategoryTag>
          <TagList>
            <TagItem>Lviv</TagItem>
            <TagItem>1 year</TagItem>
            <TagItem>female</TagItem>
          </TagList>
          <FavoriteBtn>
            <HeartIcon height="20" width="20"/>
          </FavoriteBtn>
        </ImageWrapper>
        <svg height="20" width="20" style={{color: "red"}}>
          <use href={favoriteIcon + "#heart"}/>
        </svg>
        <div>
          <h3>Cute dog looking for a home</h3>
          <MoreBtn>Learn more</MoreBtn>
        </div>
      </Card>
    </>
  )
}