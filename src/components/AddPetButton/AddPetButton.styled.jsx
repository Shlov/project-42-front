import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AddIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--cl-background);
  fill: transparent;
  ${(props) => props.mobile ? `
    width: inherit;
    position: relative;
    right: 2.5px;
  ` : ''}
`;

export const Button = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0;
  margin-left: 12px;
  width: 129px;
  height: 40px;
  letter-spacing: 0.04em;
  font-weight: 700;
  cursor: pointer;

  border: 2px solid var(--cl-blue-link);
  border-radius: 40px;
  color: var(--cl-background);
  background-color: var(--cl-blue-link);

  transition: background-color var(--animat), border-color var(--animat);
  ${(props) => props.mobile ? `
    display: block;
    position: fixed;
    bottom: 20px;
    border-radius: 50px;
    width: 80px;
    margin: 0 !important;
    z-index: 10;
    height: 80px;
    right: 20px;
    gap: 0;
  ` : ''}
  &:hover,
  &:focus {
    color: var(--cl-blue-link);
    background-color: ${(props) => props.theme === 'day' ? 'var(--cl-almost-white)' : 'transparent'};

    svg {
      stroke: var(--cl-blue-link);
    }
  }
`;

export const Link = styled(NavLink)`
  ${Button}
  ${(props) => props.mobile ? `
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  ` : ''}
`;

export const AddButton = styled.button`
  ${Button}
`;

export const NavLinkWrapper = styled.div`
  display: flex;
  gap: 18px;
`;
