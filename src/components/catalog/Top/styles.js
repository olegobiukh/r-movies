import styled from "styled-components";

const Header = styled.header`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: baseline;
  @media (max-width: 786px) {
    grid-template-columns: auto;
  }
`;
const Title = styled.h1`
  color: #3f51b5;
  text-transform: capitalize;
  text-align: center;
  @media (max-width: 786px) {
    display: none;
  }
`;
const Input = styled.input`
  justify-self: end;
  padding: 5px;
`;

export { Header, Title, Input };
