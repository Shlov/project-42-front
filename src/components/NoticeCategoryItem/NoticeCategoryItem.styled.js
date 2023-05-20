import styled from 'styled-components';

import { ReactComponent as FavoriteIcon } from '../../images/icons/heart.svg';
// import favoriteIcon from '../../images/icons.svg';

export const FavoriteBtn =styled.button`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: var(--cl-blue-light);
  color: var(--cl-blue-link);
  :hover {
    
  }
  :active {
    
  }
`

export const HeartIcon = styled(FavoriteIcon)`
  color: red;
  /* fill: red; */

`

export const CategoryTag = styled.p`
  width: 126px;
  height: 32px;
  background-color: var(--cl-blue-light);
  border-radius: 0px 16px 16px 0px;
  position: absolute;
  width: 126px;
  height: 32px;
  left: 0px;
  top: 16px;
`

export const ImageWrapper = styled.div`
  position: absolute;
`

export const Image = styled.img`
  width: 288px;
  height: 288px;
`

export const TagList = styled.ul`
  position: absolute;
  display: flex;
  justify-content: space-between;

  left: 12px;
  top: 248px;
`

export const TagItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 4px;
  /* width: 80px; */
  height: 28px;

  background-color: var(--cl-blue-light);
  border-radius: 16px;
`

