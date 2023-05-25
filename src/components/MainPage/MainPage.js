// Компонент рендериться на маршрут /main
// Головна сторінка містить в собі заголовок застосунку та контентне зображення домашніх улюбленців
import React from 'react';
import {
  MainContainer,
  MainTitle,
  MainImg,
  MainPicture,
} from './MainPage.styled';

import mobileMainImg1x from '../../images/main/main@1x_sm.png';
import mobileMainImg2x from '../../images/main/main@2x_sm.png';
import tabletMainImg1x from '../../images/main/main@1x_md.png';
import tabletMainImg2x from '../../images/main/main@2x_md.png';
import desktopMainImg1x from '../../images/main/main@1x_lg.png';
import desktopMainImg2x from '../../images/main/main@2x_lg.png';

export const MainPage = () => {
  return (
    <>
      <MainContainer>
        <MainTitle>Take good care of your small pets</MainTitle>
        <MainPicture>
          <source
            media="(min-width: 1280px)"
            srcset={`${desktopMainImg1x} 1x, ${desktopMainImg2x} 2x`}
            type="image/png"
          />
          <source
            media="(min-width: 768px)"
            srcset={`${tabletMainImg1x} 1x, ${tabletMainImg2x} 2x`}
            type="image/png"
          />
          <source
            media="(max-width: 767px)"
            srcset={`${mobileMainImg1x} 1x, ${mobileMainImg2x} 2x`}
            type="image/png"
          />
          <MainImg src={mobileMainImg1x} alt="Cute pets" />
        </MainPicture>
      </MainContainer>
    </>
  );
};
