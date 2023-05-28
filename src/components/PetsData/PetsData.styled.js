import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  margin: auto;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    width: 703px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 20px;
    width: 821px;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.36;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;
