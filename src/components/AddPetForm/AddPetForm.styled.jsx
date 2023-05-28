import styled from 'styled-components';

export const FormContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  width: 280px;
  min-height: 496px;
  padding: 20px 8px 17px;
  background-color: var(--cl-almost-white);
  box-shadow: var(--shadow-default);
  border-radius: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    width: fit-content;
    min-height: 542px;
    padding: 20px 32px;

    ${({ step }) => (step === 1 || step === 2 ? 'width: 458px' : '')}
  }
`;

export const FormTitle = styled.h1`
  font-weight: 500;
  font-size: 20px;
  line-height: calc(27 / 20);
  padding-left: 20px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: calc(38 / 28);
    padding-left: 32px;
  }
`;

export const Stepper = styled.ul`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 10px;
  line-height: calc(14 / 10);
  gap: 11px;
  margin-bottom: 24px;
  color: var(--cl-gray);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(26 / 16);
    margin-bottom: 40px;
  }
`;

export const StepperItem = styled.li`
  position: relative;
  padding-bottom: 20px;
  flex-basis: calc((100% - 22px) / 3);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 8px;

    background-color: var(--cl-blue-light);
    border-radius: 8px;
  }

  &.active {
    color: var(--cl-blue-link); /* Style for the active step */
  }

  &.active::after {
    background-color: var(--cl-blue-link);
  }

  &.completed {
    color: var(--cl-green); /* Style for the completed step */
  }

  &.completed::after {
    background-color: var(--cl-green);
  }
`;
