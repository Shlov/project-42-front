
import styled from 'styled-components';

export const Wraper = styled.div`
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 320px) and (max-width: 767.99px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279.99px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 16px;
  }
`;

export const Title = styled.div`
  margin-bottom: 24px;

  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.375;
  letter-spacing: 0.03em;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    margin-bottom: 40px;
  }
`;