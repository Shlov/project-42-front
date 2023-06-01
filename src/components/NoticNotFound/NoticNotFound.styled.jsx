import styled from 'styled-components';


export const NotFoundContainer = styled.div`
  padding: 50px 20px 0px 20px;
  height: 100vh;
  margin: 0 auto;
  max-width: 1280px;

  @media screen and (min-width: 768px) {
    padding: 30px 32px 0px 32px;
  }
`;

export const Span = styled.span`
  display: block;

  @media screen and (min-width: 768px) {
    display: inline;
  }
`;

export const NotFoundTitle = styled.h1`
  margin: 0 auto;
  text-align: center;
  max-width: 280px;
  font-size: 24px;
  line-height: 1.36;

  @media screen and (min-width: 768px) {
    max-width: 100%;
    font-weight: 600;
    font-size: 32px;
    line-height: 1.3;
  }
`;

export const NotFoundPicture = styled.picture`
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

export const NotFoundImg = styled.img`
  width: 165px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 300px;
  }

  @media screen and (min-width: 1280px) {
    width: 390px;
  }
`;