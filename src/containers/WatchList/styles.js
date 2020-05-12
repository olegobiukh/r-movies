import styled from "styled-components";

const WatchItem = styled.li`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  max-width: 1200px;
  padding: 10px;
  margin: auto;
`;

const Button = styled.button`
  border: 4px solid blue;
  background-color: blue;
  color: white;
  border-radius: 9px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background-color: transparent;
    color: blue;
  }
`;

export { WatchItem, Button };
