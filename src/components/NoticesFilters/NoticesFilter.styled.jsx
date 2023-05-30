import styled from "styled-components";
import { ReactComponent as Filter } from '../../images/icons/filters-3.svg';

export const FilterWrapper = styled.div`
  position: relative;
  display: ${(props) => props.tablet ? 'block' : 'flex'};
  align-items: center;
`

export const Button = styled.button`
  color: ${(props) => {
    if((props.mobile || !props.mobile) && !props.ages.length) {
      return 'var(--cl-blue-link)'
    } else if(props.mobile && props.ages.length) {
      return 'var(--cl-blue-light)'
    } else if(!props.mobile && props.ages.length) {
      return 'var(--cl-background)'
    }
  }};
  font-size: 16px;
  font-weight: 700;
  width: ${(props) => props.mobile ? 'auto' : '152px'};
  height: ${(props) => props.mobile ? 'auto' : '40px'};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => {
    if(props.mobile && !props.ages.length) {
      return 'var(--cl-blue-light)'
    } else if((props.mobile || !props.mobile) && props.ages.length) {
      return 'var(--cl-blue-link)'
    } else if(!props.mobile && !props.ages.length) {
      return 'var(--cl-almost-white)'
    }
  }};
  border: ${(props) => props.mobile ? 'none' : '2px solid rgb(84, 173, 255)'};
  border-radius: 40px;
  transition: background-color 250ms ease-in-out 0s, color 250ms ease-in-out 0s;
  cursor: pointer;
  margin-right: 0 !important;

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
  color: ${(props) => {
    if((props.mobile || !props.mobile) && !props.ages.length) {
      return 'var(--cl-blue-link)'
    } else if(props.mobile && props.ages.length) {
      return 'var(--cl-blue-light)'
    } else if(!props.mobile && props.ages.length) {
      return 'var(--cl-background)'
    }
  }};
  width: ${(props) => props.mobile ? '25px' : '21px'};
  height: ${(props) => props.mobile ? '38px' : '24px'};
  margin-left: ${(props) => props.mobile ? '0px' : '12px'};
  stroke: currentColor;
  ${(props) => props.mobile ? 'position: relative; right: 1px; width: 28px;' : ''}
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
  top: 45px;
  right: 0;
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
  margin-left: 0px !important;

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
    cursor: pointer;

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

export const FilterItem = styled.div`
  padding: 9px 16px;
  width: auto;
  color: var(--cl-blue-link);
  margin-right: 17px;
  background: var(--cl-almost-white);
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  display: flex;
  align-items: center;

  &:last-child {
    margin-right: 0px;
  }

  p {
    margin-right: 9px;
  }

  img {
    cursor: pointer;
  }
`
