import styled from 'styled-components';

export const MainContainer = styled.div`
  height: calc(100vh - 86px);

  @media screen and (min-width: 768px) {
    height: calc(100vh - 102px);
  }
`;

export const MainTitle = styled.h1`
  width: 280px;
  line-height: 1.37;
  padding-top: 30px;
  padding-left: 4px;

  @media screen and (min-width: 768px) {
    width: 588px;
    font-size: 68px;
    line-height: 1.47;
    padding-top: 50px;
    padding-left: 16px;
  }

  @media screen and (min-width: 1280px) {
    width: 501px;
    line-height: 1.3;
    padding-top: 154px;
    padding-left: 0;
  }
`;

export const MainImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 390px;

  @media screen and (min-width: 768px) {
    height: 820px;
  }

  @media screen and (min-width: 1280px) {
    width: 917px;
    height: 720px;
  }
`;
