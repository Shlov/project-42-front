import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  margin: auto;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    width: 703px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 20px;
    width: 821px;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.36;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;
export const AddButton = styled.button`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0;
  width: 129px;
  height: 40px;
  letter-spacing: 0.04em;
  font-weight: 700;
  cursor: pointer;

  border: 2px solid var(--cl-blue-link);
  border-radius: 40px;
  color: var(--cl-background);
  background-color: var(--cl-blue-link);

  transition: background-color var(--animat), color var(--animat),
    border-color var(--animat);

  &:hover {
    background-color: var(--cl-blue-link);
    color: var(--cl-background);
  }
`;

export const AddIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--cl-background);
  fill: transparent;
`;
