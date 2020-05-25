import styled, { css } from "styled-components";

const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 5px;
  &:hover {
    background-color: #ddd;
    ${(props) =>
      props.current &&
      css`
        background: #f44336;
      `}
  }
  ${(props) =>
    !props.isLoaded &&
    css`
      opacity: 0.7;
      pointer-events: none;
    `}
  ${(props) =>
    props.current &&
    css`
      background: #f44336;
      color: #fff;
    `}
  ${(props) =>
    (props.page >= 4 || props.isLast) &&
    css`
      background: #f4f4f4;
    `}
`;

const Buttons = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  grid-gap: 5px;
`;

export { Button, Buttons };
