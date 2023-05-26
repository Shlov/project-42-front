import styled from 'styled-components';

export const MainContainer = styled.div`
  padding-top: 30px;
  height: 100vh;
  max-width: 1280px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding-top: 50px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 0;
    position: relative;
  }
`;

export const MainTitle = styled.h1`
  width: 280px;
  line-height: 1.37;
  padding-left: 20px;

  @media screen and (min-width: 768px) {
    width: 588px;
    padding-left: 32px;
    font-size: 68px;
    line-height: 1.47;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 16px;
    width: 501px;
    line-height: 1.3;
    position: absolute;
    top: 188px;
  }
`;

export const MainPicture = styled.picture`
  display: block;
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 30px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 0;
  }
`;

export const MainImg = styled.img`
  width: 100%;

  @media screen and (min-width: 1280px) {
    width: 917px;
    height: 800px;
    margin-left: auto;
  }
`;

// export const MainContainer = styled.div`
//   height: calc(100vh - 86px);

//   @media screen and (min-width: 768px) {
//     height: calc(100vh - 102px);
//   }
// `;

// export const MainTitle = styled.h1`
//   width: 280px;
//   line-height: 1.37;
//   padding-top: 30px;
//   padding-left: 4px;

//   @media screen and (min-width: 768px) {
//     width: 588px;
//     font-size: 68px;
//     line-height: 1.47;
//     padding-top: 50px;
//     padding-left: 16px;
//   }

//   @media screen and (min-width: 1280px) {
//     width: 501px;
//     line-height: 1.3;
//     padding-top: 154px;
//     padding-left: 0;
//   }
// `;

// export const MainImg = styled.img`
//   position: absolute;
//   bottom: 0;
//   right: 0;
//   width: 100%;
//   height: 390px;

//   @media screen and (min-width: 768px) {
//     height: 820px;
//   }

//   @media screen and (min-width: 1280px) {
//     width: 917px;
//     height: 720px;
//   }
// `;
