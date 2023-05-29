import styled from "styled-components";


export const PaginationWrapper = styled.div`
  display: flex;
`

export const PaginationPanel = styled.div`
  user-select: none;
  padding: 8.5px 15px;
  margin: 48px auto;
  @media (min-width: 768px) {
    margin: 60px auto;
  }

  display: flex;
  justify-content: center;
  gap: 8px;

  background-color: var(--cl-background);
  box-shadow: var(--shadow-default);
  border-radius: 45px;

`

export const PaginationKey = styled.button`
  width: 35px;
  height: 35px;
  border: ${props => (props.disabled ? '1px solid var(--cl-gray)' : '1px solid var(--cl-blue-light)')};
  /* border: 1px solid red; */
  border-radius: 17.5px;
  cursor:  ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 15px;
  text-align: center;

  background-color: var(--cl-background);
  color: var(--cl-blue-light);
  fill: var(--cl-background);
  stroke: ${props => (props.disabled ? 'var(--cl-gray)' : 'var(--cl-blue-link)')};

  &:hover {
    background-color: ${props => (props.disabled ? 'var(--cl-background)' : 'var(--cl-blue-link)')};
    color: var(--cl-background) ;
    fill: ${props => (props.disabled ? 'var(--cl-background)' : 'var(--cl-blue-link)')};
    stroke: ${props => (props.disabled ? 'var(--cl-gray)' : 'var(--cl-background)')};
    border: ${props => (props.disabled ? '1px solid var(--cl-gray)' : 'none')} ;
    }
  
`

export const SvgIcon = styled.svg`
  height: 16px;
  width: 16px;

  transform: rotate(90deg);
  display: block;
  fill: inherit;
  stroke: inherit;
  stroke-width:1.5;
  stroke-linecap:round;
  stroke-linejoin:round;
`