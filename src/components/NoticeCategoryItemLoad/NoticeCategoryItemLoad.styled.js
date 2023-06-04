import styled, { keyframes } from 'styled-components';

const waveAnimation = keyframes`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
`

export const Card = styled.div`
    width: 280px;
  @media (min-width:768px) and (max-width:1279px) {
    width: 336px;
  }
  @media (min-width:1280px) {
    width: 288px;
  }
  height: 456px;
  background: ${(props) => props.theme === 'day' ? 'var(--cl-almost-white)' : 'var(--cl-black)'};
  box-shadow: var(--shadow-default);
  border-radius: 0px 0px 40px 40px;

  user-select: none;
`

export const ImageWrapper = styled.div`
  width: 280px;
  @media (min-width:768px) and (max-width:1279px) {
    width: 336px;
  }
  height: 288px;
  position: relative;
  background-color: #ccc;
  background-image: linear-gradient(to right, #ccc, #808080, #ccc);
  animation: ${waveAnimation} 2s linear infinite; 
  
`


export const DescriptionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 168px;
  padding: 20px 20px 26px 20px;
`

export const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: calc(33 / 24);
  margin-bottom: auto;
`

export const FavoriteBtn =styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: #808080;
  color: var(--cl-blue-link);
  position: absolute;
  right: 12px;
  top: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  fill:  var(--cl-blue-light);

`

export const HeartIcon = styled.svg`
  display: block;
  fill: #8080 ;
  stroke:   #ccc;
  stroke-width:1.5;
  stroke-linecap:round;
  stroke-linejoin:round;

`

export const DeleteBtn =styled.button`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: var(--cl-blue-light);
  color: var(--cl-blue-link);
  position: absolute;
  right: 12px;
  top: 68px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  fill:  var(--cl-blue-light);
  stroke:   var(--cl-blue-link);

  :hover {
    background-color: var(--cl-blue-link);
    color: var(--cl-blue-light);
    stroke:   var(--cl-blue-light);
    fill: var(--cl-blue-link);
  }
  :active {
    /* color: var(--cl-blue-light); */
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
  width: 248px;
  height: 38px;

  font-weight: 600;
  font-size: 16px;
  line-height: calc(22 / 16);

  cursor: pointer;

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: var(--cl-blue-link);

  :hover {
    background-color: var(--cl-blue-link);
    color: var(--cl-blue-light);
  }
  :active {
    
  }
`

export const SvgIcon = styled.svg`

  display: block;
  fill: #8080 ;
  stroke:   #ccc;
  stroke-width:1.5;
  stroke-linecap:round;
  stroke-linejoin:round;

`

export const CategoryTag = styled.p`
  height: 32px;
  padding: 11px 17px;
  background-color:	#808080;
  border-radius: 0px 16px 16px 0px;
  position: absolute;
  top: 16px;

  font-weight: 500;
  font-size: 14px;
  line-height: calc(19 / 14);
  display: flex;
  align-items: center;
  text-align: center;
`

export const Image = styled.img`
  
`

export const TagList = styled.ul`
  position: absolute;
  display: flex;
  justify-content: space-between;

  left: 8px;
  right: 8px;
  bottom: 12px;
`

export const TagItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 2px 4px;
  width: 80px;
  height: 28px;
  font-weight: 600;
  font-size: 12px;
  line-height: calc(16 / 12);
  background-color: #808080;
  border-radius: 16px;
`

