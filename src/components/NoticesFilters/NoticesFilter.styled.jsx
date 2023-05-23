import styled from "styled-components";
import { ReactComponent as Filter } from '../../images/icons/filters-3.svg';

export const FilterWrapper = styled.div`
  position: relative;
`

export const Button = styled.button`
  color: var(--cl-blue-link);
  font-size: 16px;
  font-weight: 700;
  width: 152px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--cl-almost-white);
  border: 2px solid rgb(84, 173, 255);
  border-radius: 40px;
  transition: background-color 250ms ease-in-out 0s, color 250ms ease-in-out 0s;
  cursor: pointer;
  margin-bottom: 40px;

  &:hover {
    background: var(--gr-blue);
    color: var(--cl-background);
    border: none;

    path {
      stroke: var(--cl-background);
    }
  }
`

export const FilterCSS = styled(Filter)`
  wirth: 21px;
  height: 24px;
  margin-left: 12px;
  stroke: currentColor;
`

export const FilterSelect = styled.div`
  width: 152px;
  padding: 8px;
  background-color: var(--cl-background);
  color: var(--cl-blue-link);
  box-shadow: var(--shadow-default);
  border-radius: 20px;
  position: absolute;
  z-index: 100;
`

export const FilterSelectTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 7px;
`

export const FiltersButton = styled.button`
  padding: 12px 8px;
  background: var(--cl-blue-light);
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
    color: var(--cl-blue-link);
  }

  input {
    appearance: none;
    position: absolute;
  }

  label {
    color: var(--cl-blue-link);
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

export const FiltersChevron = styled.svg`
 width: 24px;
 height: 24px;
 fill: var(--cl-blue-light);
 stroke: var(--cl-blue-link);
`

export const FiltersRound = styled.svg`
 width: 20px;
height: 20px;
fill: var(--cl-blue-light);
stroke: var(--cl-blue-link);
`