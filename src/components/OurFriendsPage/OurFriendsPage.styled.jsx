import styled from 'styled-components';

export const FriendsSection = styled.div`

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.4;
  text-align: center;
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
    color: var(--cl-blue-link);
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
  a{
    text-decoration: none;
    color: inherit;
  }
    &:hover {
      cursor: pointer;
      color: var(--cl-blue-link);
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

export const TitleUrl = styled.a`
  text-decoration: none;
`;
