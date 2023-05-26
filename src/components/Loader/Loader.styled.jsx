// import styled from "styled-components";

// export const LoaderStyle = styled.div`
//  display: flex;
//  align-items: center;
//  justify-content: center;
//  padding: 250px;
// `

import styled, { keyframes } from 'styled-components';

export const pawAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const LoaderStyle = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform-origin: 50% 50%;
  transform: rotate(90deg) translate(-50%, 0%);
  font-size: 50px;
  width: 1em;
  height: 3em;
  color: #d31145;
  `

export const Paw = styled.div`
    width: 1em;
    height: 1em;
    animation: 1000ms ${pawAnimation} ease-in-out infinite;
    opacity: 0;

    svg {
      width: 100%;
      height: 100%;
    }

    .icon {
      fill: var(--cl-yellow);
    }

   &:nth-child(odd) {
      transform: rotate(-10deg);
    }

    &:nth-child(even) {
      transform: rotate(10deg) translate(125%, 0);
    }

    ${(props) => {
      let styles = '';
      for (let i = 1; i <= 6; i++) {
        styles += `
          &:nth-child(${i}) {
            animation-delay: ${((i * -1 + 6) * 0.25)}s;
          }
        `;
      }
      return styles;
    }}

    .no-cssanimations & {
      opacity: 1;
    }
  `;