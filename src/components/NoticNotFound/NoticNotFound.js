import React from 'react';
import {
  Span,
  NotFoundTitle,
  NotFoundPicture,
  NotFoundImg,
} from './NoticNotFound.styled';

import mobileNotFoundNotice1x from '../../images/noticeNotFound/sedCat@sm_1.jpg';
import mobileNotFoundNotice2x from '../../images/noticeNotFound/sedCat@sm_2.jpg';
import tabletNotFoundNotice1x from '../../images/noticeNotFound/sedCat@md_1.jpg';
import tabletNotFoundNotice2x from '../../images/noticeNotFound/sedCat@md_2.jpg';
import desktopNotFoundNotice1x from '../../images/noticeNotFound/sedCat@lg_1.jpg';
import desktopNotFoundNotice2x from '../../images/noticeNotFound/sedCat@lg_2.jpg';

import mobileNotFoundNotice1xwebp from '../../images/noticeNotFound/sedCat@sm_1.webp';
import mobileNotFoundNotice2xwebp from '../../images/noticeNotFound/sedCat@sm_1.webp';
import tabletNotFoundNotice1xwebp from '../../images/noticeNotFound/sedCat@md_1.webp';
import tabletNotFoundNotice2xwebp from '../../images/noticeNotFound/sedCat@md_2.webp';
import desktopNotFoundNotice1xwebp from '../../images/noticeNotFound/sedCat@lg_1.webp';
import desktopNotFoundNotice2xwebp from '../../images/noticeNotFound/sedCat@lg_2.webp';

export const NoticeNotFound = () => {
  return (
    <>
      <div>
        <NotFoundTitle>
          <Span>Ooops! </Span> You don't have any favorite pets yet :(
        </NotFoundTitle>
        <NotFoundPicture>
          <source
            media="(min-width: 1280px)"
            srcSet={`${desktopNotFoundNotice1xwebp} 1x, ${desktopNotFoundNotice2xwebp} 2x`}
            type="image/webp"
          />

          <source
            media="(min-width: 1280px)"
            srcSet={`${desktopNotFoundNotice1x} 1x, ${desktopNotFoundNotice2x} 2x`}
            type="image/jpg"
          />

          <source
            media="(min-width: 768px)"
            srcSet={`${tabletNotFoundNotice1xwebp} 1x, ${tabletNotFoundNotice2xwebp} 2x`}
            type="image/webp"
          />

          <source
            media="(min-width: 768px)"
            srcSet={`${tabletNotFoundNotice1x} 1x, ${tabletNotFoundNotice2x} 2x`}
            type="image/jpg"
          />

          <source
            media="(max-width: 767px)"
            srcSet={`${mobileNotFoundNotice1xwebp} 1x, ${mobileNotFoundNotice2xwebp} 2x`}
            type="image/webp"
          />
          <source
            media="(max-width: 767px)"
            srcSet={`${mobileNotFoundNotice1x} 1x, ${mobileNotFoundNotice2x} 2x`}
            type="image/jpg"
          />
          <NotFoundImg
            src={mobileNotFoundNotice1x}
            alt="Sed cat"
            width="165"
            height="169"
          />
        </NotFoundPicture>
      </div>
    </>
  );
};
