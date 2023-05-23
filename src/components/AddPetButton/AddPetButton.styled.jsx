import styled from "styled-components";
 
export const Button = styled.button`
  font-size: 16px;
  font-weight: 700;
  width: 152px;
  height: 40px;
  display: flex;
  align-items: center;
  color: var(--cl-almost-white);
  justify-content: center;
  background-color: var(--cl-blue-link);
  border: 2px solid rgb(84, 173, 255);
  border-radius: 40px;
  transition: background-color 250ms ease-in-out 0s, color 250ms ease-in-out 0s;
  cursor: pointer;
  margin-bottom: 40px;

   &:hover {
    background: var(--cl-background);
    color: var(--cl-blue-link);
    border: none;
 `