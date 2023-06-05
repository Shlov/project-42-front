import styled from 'styled-components';

export const LogoImg = styled.img`
  width: 116px;
  height: 20px;

  &:hover {
    scale: 1.1;
  }

  @media screen and (min-width: 480px) {
    width: 162px;
    height: 28px;
  }
`;