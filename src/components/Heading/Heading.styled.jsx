import styled from 'styled-components';

export const PagesHeading = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  line-height: calc(33 / 24);
  margin-bottom: 24px;
  margin-top: 45px;

  @media (min-width: 768px) {
    font-weight: 700;
    font-size: 48px;
    line-height: 66px;
    margin-bottom: 40px;
  }

  @media (min-width: 1024px) {
    font-size: 48px;
    line-height: 66px;
    margin-bottom: 60px;
    margin-top: 70px;
  }
`;
