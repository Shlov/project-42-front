import styled from 'styled-components';


export const NoticeNotFoundTitle = styled.h1`
  margin: 0 auto;
  text-align: center;
  max-width: 280px;
  font-size: 24px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    max-width: 100%;

    font-size: 32px;

  }
`;

export const NoticeNotFoundPicture = styled.picture`
  display: block;
  padding-top: 80px;
  padding-bottom: 60px;

  @media screen and (min-width: 768px) {
    padding-bottom: 70px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 20px;
  }
`;

export const NotFoundNoticeImg = styled.img`
  width: 165px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 300px;
  }

  @media screen and (min-width: 1280px) {
    width: 390px;
  }
`;