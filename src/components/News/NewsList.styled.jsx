// import styled from 'styled-components';

// export const List = styled.ul`
//   margin: 0 auto;
//   margin-bottom: 40px;
//   display: grid;
//   row-gap: 44px;
//   width: 100%;
//   /* @media screen and (min-width: 768px) and (max-width: 1279.99px) {
//     width: 280px;
//   } */
//   @media screen and (min-width: 768px) {
//     display: flex;
//     flex-wrap: wrap;
//     column-gap: 32px;
//     row-gap: 46px;
//     margin-bottom: 60px;
//   }
//   @media screen and (min-width: 1280px) {
//     column-gap: 31px;
//     row-gap: 46px;
//   }
// `;

// export const Item = styled.li`
//   width: 100%;
//   position: relative;
//   border-radius: 20px;
//   background-color: #FDF7F2;
//   box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
//   &::before {
//     content: '';
//     position: absolute;
//     top: -20px;
//     left: 0;
//     width: 100%;
//     height: 8px;
//     border-radius: 4px;
//     background-color: #54ADFF;
//     background: linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%);
//     @media screen and (min-width: 768px) {
//       top: -22px;
//     }
//   }
//   @media screen and (min-width: 768px) {
//     flex-basis: calc((100% - 32px) / 2);
//   }
//   @media screen and (min-width: 1280px) {
//     flex-basis: calc((100% - 2 * 31px) / 3);
//   }
// `;

// export const WrapImg = styled.div`
//   overflow: hidden;
//   border-radius: 20px;
//   width: 100%;
//   height: 252px;
// `;

// export const Img = styled.img`
//   display: block;
//   object-fit: cover;
//   height: 100%;
//   width: 100%;
// `;
// export const Plug = styled(Img)`
//   background-image: url('images/icon-pawprint/icons.svg');
//   width: 280px;
//   height: 252px;
//   fill: #54adff;
//   @media screen and (min-width: 768px) {
//     width: 336px;
//   }
//   @media screen and (min-width: 768px) {
//     width: 395px;
//   }
// `;

// export const Wrap = styled.div`
//   padding: 16px 12px 12px 12px;
// `;
// export const Title = styled.h2`
//   margin-left: 0;
//   margin-bottom: 16px;
//   font-weight: 700;
//   font-size: 24px;
//   line-height: 1.37;
//   letter-spacing: -0.01em;
//   overflow: hidden;
//   height: 66px;
// `;

// export const Description = styled.p`
//   font-weight: 400;
//   line-height: 1.37;
//   height: 154px;
//   margin-bottom: 40px;
//   @media screen and (min-width: 768px) {
//     height: 132px;
//   }
//   @media screen and (min-width: 1280px) {
//     height: 110px;
//   }
// `;

// export const WrapBottom = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;
// export const Date = styled.p`
//   font-weight: 400;
//   line-height: 1.37;
//   color: #888888;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-box;
// `;

// export const Link = styled.a`
//   padding: 0;
//   line-height: 1.37;
//   color: #54ADFF;
//   transition: transform 250ms ease-in-out, border 250ms ease-in-out;
//   &:hover,
//   &:focus {
//     color: #888888;
//   }
// `;