import styled from "styled-components";


export const PaginationPanel = styled.div`
  padding: 8.5px 15px;
  margin: 48px auto;
  /* margin-top: 48px;
  margin-left: auto;
  margin-right: auto; */
  user-select: none;

  display: flex;
  justify-content: center;
  gap: 8px;

  background-color: var(--cl-background);
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 45px;


`

export const PaginationKey = styled.div`
  width: 35px;
  height: 35px;
  border: 1px solid #CCE4FB;
  border-radius: 17.5px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 15px;
  text-align: center;

  color: var(--cl-blue-light);
  fill: var(--cl-background);
  stroke: var(--cl-blue-light);

  &:hover {
    background-color: var(--cl-blue-link);
    color: var(--cl-background);
    fill: var(--cl-blue-link);
    stroke: var(--cl-background);
    border: none;
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