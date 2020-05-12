import styled from "styled-components";

const Title = styled.h2`
  color: #3f51b5;
`;
const Subtitle = styled.span`
  color: #3f51b5;
  font-weight: 500;
`;
const Movie = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid red;
  padding: 10px;
`;

const Right = styled.div`
  padding: 10px;
`;

export { Title, Subtitle, Movie, Right };
