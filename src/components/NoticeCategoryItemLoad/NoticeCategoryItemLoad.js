// Картка нотіси завантаження

import icon from '../../images/icons.svg';
import { Card, FavoriteBtn,  CategoryTag, ImageWrapper, DescriptionWrapper, Title, TagItem, TagList, MoreBtn, SvgIcon, HeartIcon, Loader } from "./NoticeCategoryItemLoad.styled";

export const NoticeCategoryItemLoad = ({onTrashModal, item}) => {

  return(
    <>
      <Card>
        <ImageWrapper>
          {/* <Image alt="pet" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgGi3YJI2iukoOZ3_fbYCyoiR4dYO8fIyIu_qpphSUf8GRAmFN"/> */}
          <CategoryTag>'categories'</CategoryTag>
          <TagList>
            <TagItem>
              <SvgIcon height="20" width="20">
                <use href={icon + "#location"}/>
              </SvgIcon>
              <p>'city'</p>
            </TagItem>
            <TagItem>
              <SvgIcon height="20" width="20">
                <use href={icon + "#clock"}/>
              </SvgIcon>
              <p>'age'</p>
            </TagItem>
            <TagItem>
              <SvgIcon height="20" width="20">
                <use href={icon + "#male"}/>
              </SvgIcon>
              <p>'sex'</p>
            </TagItem>
          </TagList>
          <FavoriteBtn >
            <HeartIcon height="20" width="20">
              <use href={icon + "#heart"}/>
            </HeartIcon>
          </FavoriteBtn>
        </ImageWrapper>
        <DescriptionWrapper>
          <Title>'Cute fox looking for a home'</Title>
          <MoreBtn>Learn more</MoreBtn>
        </DescriptionWrapper>
      </Card>
    </>
  )
}
