import styled from "styled-components";
import { ReactComponent as Filter } from '../../images/icons/filters-3.svg';

export const Button = styled.button`
  color: #54ADFF;
  font-size: 16px;
  font-weight: 700;
  width: 152px;
  height: 40px;
  font-family: "Manrope", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 2px solid rgb(84, 173, 255);
  border-radius: 40px;
  transition: background-color 250ms ease-in-out 0s, color 250ms ease-in-out 0s;
  cursor: pointer;

  &:hover {
    background: linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%);
    color: var(--cl-background);
    border: none;

    path {
      stroke: var(--cl-background);
    }
  }
`

export const FilterCSS = styled(Filter)`
  margin-left: 12px;
  stroke: currentColor;
`

export const FilterSelect = styled.div`
  width: 152px;
  padding: 8px;
  background-color: var(--cl-background);
  color: #54ADFF;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  position: absolute;
  z-index: 100;
  right: 16px;
  top: 175px;
`

export const FilterSelectTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 7px;
`

export const FiltersButton = styled.button`
  padding: 4px 8px;
  background: #CCE4FB;
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  position: relative;
  margin-bottom: 8px;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    margin-left: 14px;
    color: #54ADFF;
  }

  input {
    appearance: none;
    position: absolute;
  }

  label {
    color: #54ADFF;
    font-size: 12px;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    margin-left: 34px;

    &:last-child {
      margin-bottom: 0;
    }

    svg {
      margin-right: 16px;
    }
  }
`
