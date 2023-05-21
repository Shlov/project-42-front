import styled from 'styled-components';

export const FriendsSection = styled.div`
  max-width: 1280px;
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

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  } 
`;

export const Card = styled.li`
  width: 256px;
  height: 207px;
  padding: 16px 12px;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;

  .a {
    text-decoration: none;
  }

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
    display: flex;
    gap: 16px;
  `;

export const CardImg = styled.img`
    width: 100px;
    height: 100px;
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
    color: #111111;

    &:hover {
      cursor: pointer;
      color: #54adff;
    }
  `;

export const CardLabel = styled.span`
    font-weight: 600;
`;

export const CardAdress = styled.address`
    font-style: unset;
    &:hover {
    text-decoration: underline;
    }
`;