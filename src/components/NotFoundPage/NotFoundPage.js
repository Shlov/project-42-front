import React from 'react';
import {
  NotFoundContainer,
  Span,
  NotFoundTitle,
  NotFoundPicture,
  NotFoundImg,
  NotFoundBtn,
  NotFoundLink,
  NotFoundBtnText,
} from './NotFoundPage.styled';

import mobileNotFoundImg1x from '../../images/error/error@1x_sm.png';
import mobileNotFoundImg2x from '../../images/error/error@2x_sm.png';
import tabletNotFoundImg1x from '../../images/error/error@1x_md.png';
import tabletNotFoundImg2x from '../../images/error/error@2x_md.png';
import desktopNotFoundImg1x from '../../images/error/error@1x_lg.png';
import desktopNotFoundImg2x from '../../images/error/error@2x_lg.png';
import { ReactComponent as Paw } from '../../images/icons/pawprint 1.svg';

export const NotFoundPage = () => {
  return (
    <>
      <NotFoundContainer>
        <NotFoundTitle>
          <Span>Ooops!</Span> This page not found :(
        </NotFoundTitle>
        <NotFoundPicture>
          <source
            media="(min-width: 1280px)"
            srcSet={`${desktopNotFoundImg1x} 1x, ${desktopNotFoundImg2x} 2x`}
            type="image/png"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${tabletNotFoundImg1x} 1x, ${tabletNotFoundImg2x} 2x`}
            type="image/png"
          />
          <source
            media="(max-width: 767px)"
            srcSet={`${mobileNotFoundImg1x} 1x, ${mobileNotFoundImg2x} 2x`}
            type="image/png"
          />
          <NotFoundImg src={mobileNotFoundImg1x} alt="Cute cat" />
        </NotFoundPicture>
        <NotFoundBtn>
          <NotFoundLink to="./">
            <NotFoundBtnText>To main page</NotFoundBtnText>
            <Paw fill="#fdf7f2" />
          </NotFoundLink>
        </NotFoundBtn>
      </NotFoundContainer>
    </>
  );
};
