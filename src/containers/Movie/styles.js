import styled from "styled-components";

const MovieWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  width: 90%;
`;
const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-column: 1fr 1fr;
  border: 2px solid red;
  padding: 10px;
`;
const MovieInfo = styled.div`
  padding: 20px;
  font-size: 20px;
`;

const Text = styled.p`
  margin-bottom: 30px;
`;

const Title = styled.h2``;
const MovieTop = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
  border-bottom: 1px solid red;
`;

const Button = styled.button`
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    color: blue;
  }
`;

export { Button, Container, MovieTop, MovieInfo, MovieWrapper, Text, Title };
