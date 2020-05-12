import styled from "styled-components";

const WrapperBlock = styled.div`
  max-width: 1200px;
  margin: auto;
  width: 90%;
`;
const Title = styled.h2``;
const WrapperTop = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
  border-bottom: 1px solid red;
`;

export { WrapperBlock, WrapperTop, Title };
