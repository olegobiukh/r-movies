import styled from "styled-components";

const Movies = styled.article`

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 20px 0;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 786px) {
    grid-template-columns: 1fr;
  }
`;

export { Movies };
