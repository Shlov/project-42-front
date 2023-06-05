import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../images/icons/search.svg';

export const SearchWrapper = styled.div`
  width: 280px;
  margin: 0 auto 43px;
  position: relative;
  background: #fff;
  border-radius: 20px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);

  img {
    position: absolute;
    right: 20px;
    top: 7px;
    cursor: pointer;
  }

  @media (min-width: 767px) {
    width: 492px;
  }

  @media screen and (min-width: 1280px) {
    width: 608px;
  }

  &:hover {
    box-shadow: var(--shadow-hover);
  }
`;

export const SearchInput = styled.input`
  border-radius: 20px;
  border: none;
  padding: 10px 20px;
  outline: none;
  width: 85%;
  background: transparent;

  &:placeholder {
    color: #888888;
    font-size: 20px;
  }
  
`;

export const SearchButton = styled(SearchIcon)`
  border: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  right: ${props => (props.search ? '60px' : '20px')};
  top: 7px;

  &:hover,
  &:active,
  &:focus {
    scale: 1.1;
  }
`;
