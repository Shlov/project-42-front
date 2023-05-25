import styled from 'styled-components';

export const NavWrapper = styled.div`
 display: flex;
justify-content: space-between;

@media (max-width: 991px) {
  max-width: 319px;
  flex-wrap: wrap;
  justify-content: start;

  a {
    margin: 10px 0px 12px;
  }
}
`

export const Button = styled.label`
 margin-left: 12px;
 color: ${(props) => props.categoryPage.categoryName === props.category ? 'var(--cl-blue-light)' : 'var(--cl-blue-link)'};
 font-size: 14px;
 font-weight: 500;
 width: 131px;
 height: 35px;
 background-color: ${(props) => props.categoryPage.categoryName === props.category ? 'var(--cl-blue-link)' : 'var(--cl-blue-light)'};
 border-radius: 20px;
 padding: 8px 16px;
 cursor: pointer;

 &:hover {
    background: var(--cl-blue-link);
    color: var(--cl-blue-light);
    transition: background-color 250ms ease-in-out 0s, color 250ms ease-in-out 0s;
 }

`
