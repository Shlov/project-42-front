import styled from 'styled-components';
export const AuthNavCss = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 767px) {
    display: block;
    margin-top: 40px;
  }
`;

export const ButtonLogin = styled.button`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--cl-background);
  width: 165px;
  height: 40px;
  padding: 8px 20px;
  margin-left: 10px;
  background-color: var(--cl-yellow);
  border: 2px solid var(--cl-yellow);
  border-radius: 40px;
  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: var(--cl-yellow);
    /* background: none; */
    background-color: transparent;
    /* border: 2px solid var(--cl-yellow); */
    box-shadow: var(--shadow-nav);
  }

  @media (max-width: 767px) {
    margin: 0 0 10px;
    height: 40px;
  }
`;

export const ButtonRegister = styled.button`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  width: 165px;
  height: 40px;
  padding: 8px 20px;
  color: var(--cl-yellow);
  width: 165px;
  background-color: ${(props) => props.theme === 'day' ? 'var(--cl-background)' : 'transparent'};
  border: 2px solid var(--cl-yellow);
  border-radius: 40px;
  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: var(--cl-background);
    /* background: none; */
    background-color: var(--cl-yellow);
    box-shadow: var(--shadow-nav);
  }


`;

export const PawCss = styled.svg`
  fill: currentColor;
  /* margin-left: 8px; */
`;
