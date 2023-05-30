import styled from 'styled-components';

export const FriendsSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 991px) {
    width: 1230px;
    margin: 0 auto;
  }
`;

export const FriendsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding: 16px 12px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }

  @media (min-width: 769px) and (max-width: 1280px) {
  }
`;

export const Card = styled.li`
  padding: 16px 12px;
  background: var(--cl-almost-white);
  box-shadow: var(--shadow-default);
  border-radius: 40px;

  @media (min-width: 768px) {
    width: 312px;
    height: 243px;
  }

  @media (min-width: 1280px) {
    width: 371px;
    height: 255px;
  }
`;

export const CardTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  line-height: 27px;
  color: #54adff;
  margin-bottom: 16px;
`;

export const CardWrap = styled.div`
  width: 256px;
  height: 207px;
  display: flex;
  gap: 16px;

  @media (min-width: 768px) {
    width: 312px;
    height: 243px;
  }

  @media (min-width: 1280px) {
    width: 371px;
    height: 255px;
  }
`;

export const CardImg = styled.img`
  width: 100px;
  height: 68px;
`;

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CardItem = styled.li`
  list-style: none;
  font-size: 12px;
  line-height: 16px;
  color: var(--cl-black);
  position: relative;

  a {
    text-decoration: none;
    color: inherit;
  }

  .time,
  address {
    &:hover {
      cursor: pointer;
      color: var(--cl-blue-link);
      text-decoration: none;
    }
  }

  .email {
    &:hover {
      cursor: pointer;
      color: var(--cl-blue-link);
    }
  }

  .phone {
    &:hover {
      cursor: pointer;
      color: var(--cl-blue-link);
    }
  }
`;

export const CardLabel = styled.span`
  font-weight: 600;
`;

export const CardAdress = styled.address`
  text-decoration: none;
  font-style: unset;
  &:hover {
    text-decoration: underline;
  }
`;

export const CardTimeModal = styled.div`
  border-radius: 20px;
  background: rgb(255, 255, 255);
  box-shadow: var(--shadow-default);
  padding: 19px;
  position: absolute;
  z-index: 10;
  width: 140px;

  .card-time-wrapper {
    display: flex;
    justify-content: space-between;

    div {
      margin: 0 10px;
      &:last-child {
        margin: 0;
      }
    }
  }

  span {
    font-size: 12px;
    font-weight: 700;
    margin: 0 10px 0 0;

    &:last-child {
      margin: 0;
    }
  }
`;

export const ModalDay = styled.span`
  color: var(--cl-blue-link);
`;
