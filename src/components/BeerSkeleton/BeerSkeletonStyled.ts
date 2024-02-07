import styled from "styled-components";

const BeerSkeletonStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (min-width: 800px) {
    flex: 3.5;
    flex-direction: row;
  }
`;

export default BeerSkeletonStyled;
