import styled from 'styled-components';

import { ReactComponent as FavoriteIcon } from '../../images/icons/heart.svg';
// import favoriteIcon from '../../images/icons.svg';

export const Card = styled.div`
  width: 280px;
  height: 456px;
  background: var(--cl-almost-white);
  box-shadow: var(--shadow-default);
  border-radius: 0px 0px 40px 40px;

`

export const FavoriteBtn =styled.button`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: var(--cl-blue-light);
  color: var(--cl-blue-link);
  position: absolute;
  right: 12px;
  top: 12px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  fill:  var(--cl-blue-light);

  :hover {
    background-color: var(--cl-blue-link);
    color: var(--cl-blue-light);
  }
  :active {
    
  }
`

export const MoreBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 28px;
  border: 2px solid var(--cl-blue-link);
  border-radius: 40px;

  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */
  cursor: pointer;

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: var(--cl-blue-link);

  :hover {
    
  }
  :active {
    
  }
`

export const HeartIcon = styled(FavoriteIcon)`
  /* color: red; */
  display: block;
  /* stroke: red; */
  stroke: currentColor;
  stroke-width:1.5;
  stroke-linecap:round;
  stroke-linejoin:round;
  /* fill: currentColor; */
  /* fill: red; */

`

export const CategoryTag = styled.p`
  height: 32px;
  padding: 11px 17px;
  background-color: var(--cl-blue-light);
  border-radius: 0px 16px 16px 0px;
  position: absolute;
  top: 16px;

  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
`

export const ImageWrapper = styled.div`
  /* position: absolute; */
  position: relative;
`

export const Image = styled.img`
  width: 280px;
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

