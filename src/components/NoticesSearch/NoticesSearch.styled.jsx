import styled from "styled-components";
import { ReactComponent as SearchIcon } from '../../images/icons/search.svg'

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
`
export const SearchTitle = styled.h1`
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

  `

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
`

export const SearchButton = styled(SearchIcon)`
  border: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  right: ${(props) => (props.search ? '60px' : '20px')};
  top: 7px;
`
