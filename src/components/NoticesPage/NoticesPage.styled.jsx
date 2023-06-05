import styled from 'styled-components';

export const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 60px;

  font-style: normal;
  color:  ${(props) => props.theme === 'day' ? 'var(--cl-black)'  : 'var(--cl-almost-white)'};
`;

export const TitleModal = styled.h4`
  width: 240px;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  letter-spacing: 0.04em;
  padding-bottom: 14px;
  color:  ${(props) => props.theme === 'day' ? 'var(--cl-black)'  : 'var(--cl-almost-white)'};

  @media (min-width: 768px) {
    width: 317px;
    font-size: 28px;
    line-height: 38px;
    padding-bottom: 40px;
  }
`;

export const DescrModal = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  margin-bottom: 48px;
  color:  ${(props) => props.theme === 'day' ? 'var(--cl-black)'  : 'var(--cl-almost-white)'};
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 17px;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 256px;
  height: 40px;
  padding: 0;

  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;

  border: 2px solid var(--cl-blue-link);
  border-radius: 40px;
  color: var(--cl-blue-link);
  background-color: transparent;

  cursor: pointer;

  transition: background var(--animat), background-color var(--animat);

  &:hover,
  &:active,
  &:focus {
    background: var(--gr-blue);
    color: var(--cl-background);
    border: var(--gr-blue);
  }

  @media (min-width: 768px) {
    width: 129px;
  }
`;

export const ButtonTrash = styled(Button)`

  border: 2px solid var(--gr-blue);
  color: var(--cl-background);
  background-color: var(--cl-blue-link);

  transition: none;

  &:hover,
  &:active,
  &:focus {
    background: var(--gr-blue);
  }
`;

export const Trash = styled.svg`
  width: 24px;
  height: 24px;
  stroke: currentColor;
  fill: transparent;
`;

export const FiltersContainer = styled.div`
max-width: 1260px;
margin: 0 auto;
`
export const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 280px;
  margin: 0 auto 40px;

  @media (min-width: 767px) and (max-width:1279px) {
    width: 730px;
    margin: 0 auto 40px;
  }

  @media (min-width: 1280px) {
    width: 100%;
    margin: 0 auto 42px;
  }

  .filters {
    display: flex;
    position: relative;

    .filters-items {
      position: absolute;
      right: 0;
      top: 56px;
      display: flex;
      flex-wrap: wrap;
      justify-content: end;
      gap: 16px;

      /* @media (max-width: 991px) {
        width: 500px;
      } */

      /* @media (max-width: 768px) {
        width: 320px;
      } */
    }

    & > a {
      margin-left: 12px;
    }
    @media (max-width: 500px) {
      display: block;

      button {
        margin: 0px 0 12px !important;
        &:last-child {
          margin-bottom: 12px;
        }
      }
    }
  }
`
export const Text = styled.p`
  width: 240px;
  @media (min-width: 768px) {
    width: 390px;
  }
`
