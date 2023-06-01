import styled from 'styled-components';

export const NoticesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px 32px;
  @media (min-width:768px) and (max-width:1279px) {
    max-width: 704px;
  }
  @media (min-width:1280px) {
    max-width: 1248px;
  }
  @media (max-width:767px) {
    max-width: 280px;
  }
  margin-left: auto;
  margin-right: auto;
  margin-top: ${(props) => {
    if(props.filterHeight > 50) {
      return '95px'
    } else if (props.filterHeight > 30 && props.filterHeight < 50) {
      return '60px'
    } else {
      return '0'
    }
  }};
`
