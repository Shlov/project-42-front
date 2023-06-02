import styled from 'styled-components';

export const NavWrapper = styled.div`
  display: flex;
  // justify-content: space-between;
  justify-content: start;
  flex-wrap: wrap;
  gap: 8px;
  width: 230px;
  @media (min-width: 767px) {
    width: 360px;
    gap: 12px;
  }


  a {
    /* margin-bottom: 18px; */
    padding: 10px 0;
    @media (min-width: 767px) {
      /* max-width: 319px; */
      flex-wrap: wrap;
      justify-content: start;
    }
  }

@media (min-width: 1280px) {
  width: 580px;
  a {
    /* margin: 2px 0 2px; */
  }
}
`

export const Button = styled.label`
 /* margin-left: 12px; */
  color: ${(props) => {
    if(props.categoryPage === props.category && props.categoryPage !== 'all') {
      return 'var(--cl-blue-light)'
    } else if(props.categoryPage === 'all' && props.category === '') {
      return 'var(--cl-blue-light)'
    } else {
      return 'var(--cl-blue-link)'
    }
  }};
  font-size: 14px;
  font-weight: 500;
  width: 131px;
  height: 35px;
  background-color: ${(props) => {
  if(props.categoryPage === props.category && props.categoryPage !== 'all') {
    return 'var(--cl-blue-link)'
  } else if(props.categoryPage === 'all' && props.category === '') {
    return 'var(--cl-blue-link)'
  } else {
    return 'var(--cl-blue-light)'
  }
 }};
 border-radius: 20px;
 padding: 8px 16px;
 cursor: pointer;

 &:hover {
    background: var(--cl-blue-link);
    color: var(--cl-blue-light);
    transition: background-color 250ms ease-in-out 0s, color 250ms ease-in-out 0s;
 }

`
